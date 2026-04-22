# Skills Exercise: Create Applications with the Copilot CLI

![original github octocat](https://octodex.github.com/images/original.png)

👋 Hey there @Poornamadhushan! Welcome to your Skills exercise!

Let's get you started with GitHub Copilot CLI! We will learn how to use it for
issue management and building a Node.js weather CLI app.

✨ This is an interactive, hands-on GitHub Skills exercise.

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

## Step 1: Install Copilot CLI and use the issue template

Duck prefers working in the terminal and wants to use AI from there. Duck is
getting ready to develop a new Node.js CLI weather app and plans to install the
standalone Copilot CLI to build the application from the terminal.

### Theory: GitHub Copilot CLI - a standalone terminal application

GitHub Copilot CLI is a standalone terminal application that brings the power
of GitHub Copilot directly to your command line. It is installed via npm and
provides a rich interactive experience for developers.

Key capabilities and options to be aware of include:

- Providing intelligent command suggestions powered by the latest AI models
- Generating code snippets and scripts directly in your terminal
- Assisting with Git operations and GitHub interactions
- Supporting image inputs via paste and drag-and-drop for visual context
- The `--enable-all-github-mcp-tools` flag enables all GitHub MCP tools, giving
	Copilot CLI access to GitHub features like creating issues and repositories
- Depending on your configuration, you may be prompted to enable features for
	the session. Respond yes to these prompts.
- `/session` shows details about your current chat session
- `/context` provides a visual overview of your current token usage
- `/usage` lets you view session statistics
- `/share [file|gist] [path]` shares your session to a file or GitHub gist
- You can create custom agents to encode specialized prompts and workflows
- You can delegate tasks to the Copilot coding agent with `/delegate`

Global shortcuts:

```
@            mention files, include contents in context
Esc          cancel the current operation
!            execute command in your local shell (bypass Copilot)
Ctrl+C       cancel operation / clear input / exit
Ctrl+D       shutdown
Ctrl+L       clear the screen
Shift+Tab    switch between plan mode and regular interactive mode
```

Installation requirements:

- Node.js 22 or later
- npm 10 or later
- Active GitHub Copilot subscription (Pro, Pro+, Business, or Enterprise)

Issue templates help maintain consistency when team members create issues. This
repository already has a `feature_request.md` template that you will use to
create your weather app issue.

References:

- https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli
- https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli
- https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/

Important: If you restarted your Codespace you may need to run
`copilot --allow-all` and authenticate with GitHub again using `!gh auth login`
in your terminal, or `!gh auth login` from within the Copilot CLI session.

### Activity 1: Getting to know your development environment

1. Open the Create Codespace page in a new tab:

	 https://codespaces.new/Poornamadhushan/Github-Copilot-CLI-Demo?quickstart=1

2. The free tier of Codespaces is fine if you still have minutes available.
3. Confirm the Repository field is your copy of the exercise, not the original.
4. Click the green Create Codespace button.
5. Wait a moment for Visual Studio Code to load.

We will be focused on the full terminal window since this is all about the CLI.

### Activity 2: Install the standalone Copilot CLI

Install the standalone GitHub Copilot CLI by running in the terminal window:

```bash
npm install -g @github/copilot
```

Verify the installation:

```bash
copilot --version
```

Tip: After installation, you can use the `copilot` command anywhere in your
terminal to start an interactive session.

### Activity 3: Create an issue using Copilot CLI

Start an interactive Copilot CLI session:

```bash
copilot --enable-all-github-mcp-tools
```

When starting Copilot CLI, you may be prompted to add this folder to the
trusted folder list and to key bindings. Respond yes to both prompts to
continue.

Ask Copilot CLI to create a feature request issue for the weather app. Example
prompt:

```text
Create a GitHub issue for a Node.js CLI weather app using the
.github/ISSUE_TEMPLATE/feature_request.md template. The issue title must
include the word "weather". The app should accept a city name or zip code,
fetch real-time weather from wttr.in, display temperature in Celsius,
weather condition description, and humidity, and show an error if location
is not found. Create the issue in the current repository using gh CLI
commands and list the issue link when complete.
```

Mona should check your work shortly and post the next step in the comments.

## Step 2: Generate the weather.js logic with Copilot CLI

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

## Step 3: Run your CLI

```bash
node weather.js Colombo
```

If your output looks good, try a few more locations:

```bash
node weather.js London
node weather.js 94040
```

## License

[MIT License](LICENSE)

## Step 4: Check your work

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
