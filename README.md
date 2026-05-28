# GitHub CLI Weather Training Website

This repository contains a modern training website for learning GitHub CLI through a practical Weather CLI demo project. The site is built with Astro and TailwindCSS and includes step-by-step tutorials, terminal-style code blocks, and a complete Weather CLI walkthrough.

## Project goals

- Teach what GitHub CLI is and how it helps terminal workflows
- Install and authenticate gh on Windows, macOS, and Linux
- Learn core gh commands
- Build and run a Weather CLI demo using Node.js

## Local setup

```bash
npm install
```

## Run the site

```bash
npm run dev
```

## Build the site

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Project structure

- src/pages - Astro pages for the landing page and docs
- src/components - Reusable UI components
- examples/weather-cli - Beginner-friendly Weather CLI example

## Weather CLI demo

The Weather CLI demo uses a public API from wttr.in and prints condition, temperature, and humidity for a city name.

This project is licensed under the **MIT License** — see the
[LICENSE](LICENSE) file for details.
