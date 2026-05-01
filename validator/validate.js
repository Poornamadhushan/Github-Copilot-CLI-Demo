#!/usr/bin/env node
// validator/validate.js
//
// Usage: node validator/validate.js <repo-directory>
//
// Runs `node index.js Colombo` (or `node weather.js Colombo` as fallback)
// inside the given directory and validates that the output contains both
// "weather" and "temperature".
//
// Exits 0 on success, 1 on any failure.

"use strict";

const { spawnSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const repoDir = process.argv[2];

if (!repoDir) {
  console.error("Usage: node validator/validate.js <repo-directory>");
  process.exit(1);
}

const absRepoDir = path.resolve(repoDir);

if (!fs.existsSync(absRepoDir)) {
  console.error(`Repository directory not found: ${absRepoDir}`);
  process.exit(1);
}

// Determine the CLI entry point – prefer index.js as specified, fall back to weather.js
let entryPoint = null;
for (const candidate of ["index.js", "weather.js"]) {
  if (fs.existsSync(path.join(absRepoDir, candidate))) {
    entryPoint = candidate;
    break;
  }
}

if (!entryPoint) {
  console.error("No index.js or weather.js found in the repository.");
  process.exit(1);
}

console.log(`Running: node ${entryPoint} Colombo`);

const result = spawnSync("node", [entryPoint, "Colombo"], {
  cwd: absRepoDir,
  timeout: 30000,
  encoding: "utf8",
  stdio: ["ignore", "pipe", "pipe"],
});

if (result.error) {
  console.error("Failed to spawn CLI process:", result.error.message);
  process.exit(1);
}

const stdout = result.stdout || "";
const stderr = result.stderr || "";

if (result.status !== 0) {
  console.error(`CLI exited with code ${result.status}`);
  if (stderr) console.error("STDERR:", stderr);
  if (stdout) console.log("STDOUT:", stdout);
  process.exit(1);
}

console.log("CLI output:");
console.log(stdout);

const lower = stdout.toLowerCase();
const hasWeather = lower.includes("weather");
const hasTemperature = lower.includes("temperature");

if (!hasWeather || !hasTemperature) {
  console.error('Validation failed: output does not contain required keywords.');
  if (!hasWeather) console.error('  Missing: "weather"');
  if (!hasTemperature) console.error('  Missing: "temperature"');
  process.exit(1);
}

console.log("✅ Validation passed!");
process.exit(0);
