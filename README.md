# Skills Exercise: Create a Weather CLI with GitHub Copilot CLI

👋 Hey there @Poornamadhushan! Welcome to your Skills exercise!

Let's get you started with GitHub Copilot CLI! We will learn how to use it for issue management and building a Node.js weather CLI app.

✨ This is an interactive, hands-on GitHub Skills style exercise.

As you complete each step, I will leave updates in the comments:

- Check your work and guide you forward
- Share helpful tips and resources
- Celebrate your progress and completion

Let's get started - good luck and have fun!

-- Mona

If you encounter any issues along the way please report them here.

## Learning objectives

By the end, you will be able to:

- Use GitHub Copilot CLI to generate and improve code from the terminal
- Create a feature request issue using an issue template
- Build a simple Node.js CLI that fetches real-time weather data
- Practice error handling and user-friendly CLI output

## Project overview

You will build a CLI app called `weather.js` that:

- accepts a city name or zip code as a command line argument
- fetches real-time weather data from a public weather API
- displays temperature in Celsius, weather condition description, and humidity
- shows an error message if the location is not found

API used in this exercise:

- https://wttr.in/London?format=j1

Example usage:

```bash
node weather.js Colombo
node weather.js London
node weather.js 94040
```

## Step 1: Install GitHub Copilot CLI

Install the standalone Copilot CLI:

```bash
npm install -g @github/copilot
```

Verify it is installed:

```bash
copilot --version
```

Start a Copilot CLI session (enable GitHub tools):

```bash
copilot --enable-all-github-mcp-tools
```

If prompted, approve access for this session.

## Step 2: Create a feature request issue

Use the issue template in this repo:

- .github/ISSUE_TEMPLATE/feature_request.md

Ask Copilot CLI to create an issue for the weather app. Example prompt:

```text
Create a GitHub issue for a Node.js CLI weather app using the
.github/ISSUE_TEMPLATE/feature_request.md template. The issue title must
include the word "weather". The app should accept a city name or zip code,
fetch real-time weather from wttr.in, display temperature in Celsius,
weather condition description, and humidity, and show an error if location
is not found. Create the issue in the current repository using gh CLI
commands and list the issue link when complete.
```

## Step 3: Generate the weather.js logic with Copilot CLI

Open `weather.js` and follow the TODOs. Use Copilot CLI to help you.

Suggested prompts:

```text
Write a Node.js script that reads a location from argv, calls
https://wttr.in/<location>?format=j1 with fetch and async/await, and prints
temperature in Celsius, weather description, and humidity. Handle errors
when the location is not found.
```

```text
Explain how to parse JSON from wttr.in format=j1 and extract temp_C,
weatherDesc[0].value, and humidity.
```

## Step 4: Run your CLI

```bash
node weather.js Colombo
```

If your output looks good, try a few more locations:

```bash
node weather.js London
node weather.js 94040
```

## Step 5: Check your work

Use this checklist:

- CLI accepts a city or zip code
- Data is fetched with async/await
- Output shows Celsius temperature, weather condition, and humidity
- Invalid location shows a clear error message

## Extra tips (optional)

- Add input validation and a usage message
- Format output nicely (labels, line breaks)
- Handle network errors with a friendly message

## You are done

Nice work! You created a real CLI app with Copilot CLI. Mona will post your
next step in the comments.
