// weather.js - starter file for the weather CLI
// TODO: Read the location from command line arguments (process.argv)
// TODO: Build the wttr.in URL using the location and format=j1
// TODO: Fetch weather data with async/await
// TODO: Parse JSON and display temperature (C), condition, and humidity
// TODO: Show a friendly error if the location is not found

const fs = require("fs/promises");
const { execFile } = require("child_process");
const { promisify } = require("util");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
const readline = require("readline");

const DEFAULT_TEMPLATE_PATH = path.join(
  __dirname,
  "templates",
  "certificate-template.docx"
);
const DEFAULT_OUTPUT_DIR = path.join(__dirname, "output");
const execFileAsync = promisify(execFile);

async function getWeather(location) {
  // Fetch JSON from wttr.in and return a simplified object.
  const encoded = encodeURIComponent(location);
  const url = `https://wttr.in/${encoded}?format=j1`;
  const response = await fetch(url);

  if (!response.ok) {
    return null;
  }

  const payload = await response.json();
  const data = payload && payload.data ? payload.data : payload;

  if (!data || (Array.isArray(data.error) && data.error.length > 0)) {
    return null;
  }

  const current = Array.isArray(data.current_condition)
    ? data.current_condition[0]
    : null;

  if (!current) {
    return null;
  }

  const description = Array.isArray(current.weatherDesc)
    ? current.weatherDesc[0]?.value
    : null;

  return {
    location,
    tempC: current.temp_C,
    condition: description,
    humidity: current.humidity,
  };
}

function printUsage() {
  console.log("Usage:");
  console.log("  node weather.js <city-or-zip>");
  console.log("  node weather.js cert");
  console.log("Example:");
  console.log("  node weather.js Colombo");
  console.log("  node weather.js cert");
}

function sanitizeFilePart(value) {
  const cleaned = value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return cleaned || "student";
}

function createPrompt() {
  return readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
}

function askQuestion(rl, question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => resolve(answer.trim()));
  });
}

async function loadTemplate(templatePath) {
  try {
    return await fs.readFile(templatePath);
  } catch (error) {
    console.log("Template not found.");
    console.log(`Expected template at: ${templatePath}`);
    console.log("Add your PPTX template and try again.");
    process.exit(1);
  }
}

function formatDisplayDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
}

function renderDocxTemplate(templateBuffer, data) {
  const zip = new PizZip(templateBuffer);
  const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
    delimiters: { start: "{{", end: "}}" },
  });

  try {
    doc.render(data);
  } catch (error) {
    console.log("Failed to render the DOCX template.");
    console.log("Check that the placeholders match the template.");
    process.exit(1);
  }

  return doc.getZip().generate({ type: "nodebuffer" });
}

function escapePowerShellString(value) {
  return value.replace(/'/g, "''");
}

async function convertDocxToPdf(docxPath) {
  const pdfPath = docxPath.replace(/\.docx$/i, ".pdf");
  const safeDocPath = escapePowerShellString(docxPath);
  const safePdfPath = escapePowerShellString(pdfPath);

  const script = [
    "$ErrorActionPreference = 'Stop'",
    `$docPath = '${safeDocPath}'`,
    `$pdfPath = '${safePdfPath}'`,
    "$word = New-Object -ComObject Word.Application",
    "$word.Visible = $false",
    "$document = $word.Documents.Open($docPath, $false, $true)",
    "$document.SaveAs([ref]$pdfPath, 17)",
    "$document.Close()",
    "$word.Quit()",
    "[System.Runtime.InteropServices.Marshal]::ReleaseComObject($document) | Out-Null",
    "[System.Runtime.InteropServices.Marshal]::ReleaseComObject($word) | Out-Null",
  ].join("; ");

  await execFileAsync("powershell", [
    "-NoProfile",
    "-ExecutionPolicy",
    "Bypass",
    "-Command",
    script,
  ]);

  return pdfPath;
}

async function generateCertificate() {
  const rl = createPrompt();

  const name = await askQuestion(rl, "Student name: ");
  if (!name) {
    rl.close();
    console.log("Name is required.");
    process.exit(1);
  }

  rl.close();

  const date = formatDisplayDate(new Date());

  const templateBuffer = await loadTemplate(DEFAULT_TEMPLATE_PATH);
  const outputBuffer = renderDocxTemplate(templateBuffer, {
    NAME: name,
    DATE: date,
  });

  await fs.mkdir(DEFAULT_OUTPUT_DIR, { recursive: true });
  const safeDate = sanitizeFilePart(date);
  const outputFileName = `certificate-${sanitizeFilePart(name)}-${safeDate}.docx`;
  const outputPath = path.join(DEFAULT_OUTPUT_DIR, outputFileName);
  await fs.writeFile(outputPath, outputBuffer);

  let pdfPath = null;
  try {
    pdfPath = await convertDocxToPdf(outputPath);
    await fs.unlink(outputPath);
  } catch (error) {
    pdfPath = null;
  }

  if (pdfPath) {
    console.log("Certificate PDF saved:");
    console.log(pdfPath);
  } else {
    console.log("Certificate DOCX saved:");
    console.log(outputPath);
    console.log("PDF conversion requires Microsoft Word on Windows.");
  }
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    printUsage();
    process.exit(1);
  }

  if (args[0].toLowerCase() === "cert" || args[0].toLowerCase() === "certificate") {
    await generateCertificate();
    return;
  }

  const location = args.join(" ").trim();

  if (!location) {
    printUsage();
    process.exit(1);
  }

  try {
    const data = await getWeather(location);

    if (!data) {
      console.log("Location not found. Please try another city or zip code.");
      process.exit(1);
    }

    console.log(`Location: ${data.location}`);
    console.log(`Temperature: ${data.tempC} C`);
    console.log(`Condition: ${data.condition}`);
    console.log(`Humidity: ${data.humidity}%`);

    await generateCertificate();
  } catch (error) {
    console.log("Something went wrong while fetching weather data.");
    console.log("Please check your network connection and try again.");
  }
}

main();
