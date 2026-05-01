#!/usr/bin/env node
// certificate/generate.js
//
// Usage: node certificate/generate.js <student-name> [output-directory]
//
// Fills templates/certificate-template.docx with {{NAME}} and {{DATE}},
// writes a DOCX to the output directory, and prints two shell-parsable lines:
//   DOCX_PATH=<absolute-path-to-docx>
//   CERT_NAME=<base-name-without-extension>

"use strict";

const path = require("path");
const fs = require("fs");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");

const name = process.argv[2];
const outputDir = process.argv[3]
  ? path.resolve(process.argv[3])
  : path.join(__dirname, "..", "output");

if (!name) {
  console.error(
    "Usage: node certificate/generate.js <student-name> [output-directory]"
  );
  process.exit(1);
}

const templatePath = path.join(
  __dirname,
  "..",
  "templates",
  "certificate-template.docx"
);

if (!fs.existsSync(templatePath)) {
  console.error(`Certificate template not found: ${templatePath}`);
  console.error(
    "Place a DOCX template containing {{NAME}} and {{DATE}} at that path."
  );
  process.exit(1);
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
}

function sanitize(value) {
  const cleaned = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || "student";
}

const date = formatDate(new Date());
const templateBuffer = fs.readFileSync(templatePath);
const zip = new PizZip(templateBuffer);
const doc = new Docxtemplater(zip, {
  paragraphLoop: true,
  linebreaks: true,
  delimiters: { start: "{{", end: "}}" },
});

try {
  doc.render({ NAME: name, DATE: date });
} catch (err) {
  console.error("Failed to render certificate template:", err.message);
  process.exit(1);
}

const outputBuffer = doc.getZip().generate({ type: "nodebuffer" });

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const certName = `certificate-${sanitize(name)}`;
const docxPath = path.join(outputDir, `${certName}.docx`);

fs.writeFileSync(docxPath, outputBuffer);

// Print machine-readable variables for the calling shell script
console.log(`DOCX_PATH=${docxPath}`);
console.log(`CERT_NAME=${certName}`);
