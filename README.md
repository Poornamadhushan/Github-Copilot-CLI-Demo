# GitHub Copilot CLI Demo — Build a Node.js Weather CLI

![GitHub Copilot](https://octodex.github.com/images/original.png)

> **A beginner-friendly, hands-on guide** to using GitHub Copilot CLI to build
> a real Node.js weather application — step by step.

---

## 👤 About the Author

Hi! I'm **Poorna Madhushan** — a developer passionate about AI-assisted coding
and developer tooling.

| Platform | Link |
|----------|------|
| 🐙 GitHub | [github.com/Poornamadhushan](https://github.com/Poornamadhushan) |
| 💼 LinkedIn | [linkedin.com/in/poornamadhushan](https://www.linkedin.com/in/poorna-madhushan/) |
| 🐦 X / Twitter | [x.com/poornamadhushan](https://x.com/poornamadhushan) |

Feel free to connect, star ⭐ this repo, and share your progress!

---

## 📋 Table of Contents

1. [What Is This?](#-what-is-this)
2. [Learning Objectives](#-learning-objectives)
3. [Prerequisites](#-prerequisites)
4. [How to Get GitHub Copilot CLI](#-how-to-get-github-copilot-cli)
5. [Getting Started (Beginner Guide)](#-getting-started-beginner-guide)
6. [Project Overview](#-project-overview)
7. [Step 1 — Set Up & Create an Issue](#step-1--set-up--create-an-issue)
8. [Step 2 — Generate weather.js with Copilot CLI](#step-2--generate-weatherjs-with-copilot-cli)
9. [Step 3 — Run Your CLI](#step-3--run-your-cli)
10. [Step 4 — Check Your Work](#step-4--check-your-work)
11. [How to Get Your Certificate](#-how-to-get-your-certificate)
12. [Extra Tips](#-extra-tips-optional)
13. [License](#-license)

---

## 🌟 What Is This?

This repository is a **hands-on exercise** that teaches you how to use
**GitHub Copilot CLI** — a powerful AI assistant that lives right in your
terminal. By following this guide you will build a working Node.js CLI app that
fetches real-time weather data, all while learning to use AI to write and
improve code faster.

---

## 🎯 Learning Objectives

By the end of this exercise, you will be able to:

- Install and use **GitHub Copilot CLI** from your terminal
- Use Copilot CLI to **generate and improve code** without leaving the command line
- Create a **GitHub Issue** using an issue template
- Build a **Node.js CLI app** that fetches live weather data from a public API
- Practice **error handling** and user-friendly output
- **Generate a completion certificate** for your work

---

## 🔧 Prerequisites

Before you begin, make sure you have:

| Requirement | Version | Notes |
|-------------|---------|-------|
| **Node.js** | 22 or later | [nodejs.org](https://nodejs.org/) |
| **npm** | 10 or later | Comes with Node.js |
| **GitHub CLI (`gh`)** | 2 or later | [cli.github.com](https://cli.github.com/) — needed to create issues and authenticate |
| **GitHub account** | any | [github.com/signup](https://github.com/signup) |
| **GitHub Copilot subscription** | Pro / Pro+ / Business / Enterprise | See below |

> **New to GitHub?** Create a free account at [github.com/signup](https://github.com/signup)
> then sign up for a Copilot subscription at
> [github.com/features/copilot](https://github.com/features/copilot).

**Quick check — verify your versions in the terminal before you start:**

```bash
node --version   # should print v22.x.x or higher
npm --version    # should print 10.x.x or higher
gh --version     # should print gh version 2.x.x or higher
```

If any command is missing or the version is too low, follow the link in the table above to install or update it.

---

## 🚀 How to Get GitHub Copilot CLI

GitHub Copilot CLI is a standalone terminal application that brings the power
of GitHub Copilot directly to your command line. It is installed via npm.

### Step A — Sign up for GitHub Copilot

1. Go to [github.com/features/copilot](https://github.com/features/copilot)
2. Click **Start a free trial** (students get it free via
   [GitHub Education](https://education.github.com/))
3. Choose a plan (Pro is enough for this exercise) and confirm

### Step B — Install the CLI

Open your terminal and run:

```bash
npm install -g @github/copilot
```

> **If you get a 404 or "not found" error**, the package name may have changed.
> Check the [official install guide](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
> for the latest install command.

### Step C — Verify the installation

```bash
copilot --version
```

You should see a version number printed, for example `1.0.0`.

**Troubleshooting:**
- `command not found` — your npm global `bin` folder is not in your `PATH`.
  Run `npm config get prefix` to find the folder, then add `<that folder>/bin`
  to your `PATH` environment variable and open a new terminal.
- Wrong version — run `npm install -g @github/copilot` again to update.

### Step D — Authenticate with GitHub

This command starts the Copilot CLI **and** enables all built-in tools
(including the GitHub tools needed for creating issues):

```bash
copilot --enable-all-github-mcp-tools
```

**What to expect the first time:**
1. A browser window opens asking you to sign in to GitHub.
2. Click **Authorize** to grant Copilot CLI access to your account.
3. Return to your terminal — you will see an interactive prompt where you can
   type requests in plain English.

> **Re-authentication tip:** If you close and reopen your terminal you may need
> to log in again. Inside the Copilot CLI prompt, the `!` prefix runs a plain
> shell command. So type `!gh auth login` and press Enter — this runs
> `gh auth login` without sending it to Copilot — then follow the prompts.

### Key CLI Shortcuts

| Shortcut | Action |
|----------|--------|
| `@` | Mention a file — includes its content as context |
| `Esc` | Cancel the current operation |
| `!` | Run a shell command without going through Copilot |
| `Ctrl+C` | Cancel / clear input / exit |
| `Ctrl+D` | Shut down the CLI |
| `Ctrl+L` | Clear the screen |
| `Shift+Tab` | Switch between plan mode and interactive mode |

### Useful CLI Commands

| Command | What it does |
|---------|-------------|
| `/session` | Show details about the current chat session |
| `/context` | View current token usage |
| `/usage` | View session statistics |
| `/share [file|gist] [path]` | Share your session to a file or GitHub Gist |
| `/delegate` | Delegate a task to the Copilot coding agent |

---

## 🏁 Getting Started (Beginner Guide)

If you have never used a terminal before, here is a quick orientation:

1. **Open a terminal**
   - **Windows** — search for "Command Prompt" or install
     [Windows Terminal](https://aka.ms/terminal)
   - **macOS** — open **Terminal** from Applications → Utilities
   - **Linux** — press `Ctrl+Alt+T`

2. **Fork this repository** by clicking the **Fork** button at the top of this
   page. This creates your own copy under your GitHub account.

3. **Open the repository in a Codespace** (recommended — no local setup needed):

   After forking, replace `YOUR-USERNAME` with your actual GitHub username in
   the URL below, then open it in a new browser tab.

   For example, if your GitHub username is `jsmith`, the URL would look like:
   ```
   https://codespaces.new/jsmith/Github-Copilot-CLI-Demo?quickstart=1
   ```

   General pattern:
   ```
   https://codespaces.new/YOUR-USERNAME/Github-Copilot-CLI-Demo?quickstart=1
   ```

   Click the green **Create Codespace** button. VS Code will open in your
   browser with a full terminal ready to use.

4. **Install dependencies** in the terminal:

   ```bash
   npm install
   ```

5. **Install Copilot CLI** (see [How to Get GitHub Copilot CLI](#-how-to-get-github-copilot-cli) above).

6. Follow the steps in the sections below to complete the exercise.

---

## 📦 Project Overview

You will build a CLI app called `weather.js` that:

- Accepts a city name or zip code as a command-line argument
- Fetches **real-time weather data** from a public API (`wttr.in`)
- Displays **temperature in Celsius**, weather condition, and humidity
- Shows a friendly **error message** if the location is not found

API used in this exercise: `https://wttr.in/London?format=j1`

Example usage:

```bash
node weather.js Colombo
node weather.js London
node weather.js 94040
```

---

## Step 1 — Set Up & Create an Issue

### Activity 1: Open your development environment

1. Open the Codespace link in a new tab (replace `YOUR-USERNAME` with your
   GitHub username — e.g. `https://codespaces.new/jsmith/Github-Copilot-CLI-Demo?quickstart=1`):
   `https://codespaces.new/YOUR-USERNAME/Github-Copilot-CLI-Demo?quickstart=1`
2. The free tier of Codespaces is fine if you still have minutes available.
3. Confirm the **Repository** field shows *your fork*, not the original.
4. Click **Create Codespace** and wait for VS Code to load.

### Activity 2: Start the Copilot CLI

If you have not yet installed Copilot CLI, go back to
[How to Get GitHub Copilot CLI](#-how-to-get-github-copilot-cli) and complete
Steps B–D first.

Confirm it is installed and launch it:

```bash
copilot --version
```

### Activity 3: Create an issue using Copilot CLI

Start an interactive session:

```bash
copilot --enable-all-github-mcp-tools
```

When prompted to add the folder to the trusted list and configure key bindings,
respond **yes** to both.

Then paste the following prompt:

```text
Create a GitHub issue for a Node.js CLI weather app using the
.github/ISSUE_TEMPLATE/feature_request.md template. The issue title must
include the word "weather". The app should accept a city name or zip code,
fetch real-time weather from wttr.in, display temperature in Celsius,
weather condition description, and humidity, and show an error if location
is not found. Create the issue in the current repository using gh CLI
commands and list the issue link when complete.
```

References:

- [Install Copilot CLI](https://docs.github.com/en/copilot/how-tos/set-up/install-copilot-cli)
- [Use Copilot CLI](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/use-copilot-cli)
- [Copilot CLI 101 blog post](https://github.blog/ai-and-ml/github-copilot-cli-101-how-to-use-github-copilot-from-the-command-line/)

---

## Step 2 — Complete weather.js with Copilot CLI

Open `weather.js`. At the top of the file you will see five TODO comments that
describe what the script needs to do. The rest of the file already contains
helper code for generating the certificate — **your job is to fill in the
weather-fetching logic described by those TODOs**.

Use the Copilot CLI to generate or improve that code. Start a session if you
haven't already:

```bash
copilot --enable-all-github-mcp-tools
```

**Suggested prompts:**

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

---

## Step 3 — Run Your CLI

```bash
node weather.js Colombo
```

If the output looks good, try a few more locations:

```bash
node weather.js London
node weather.js 94040
```

---

## Step 4 — Check Your Work

Use this checklist before moving on:

- [ ] CLI accepts a city name or zip code
- [ ] Data is fetched using `async/await`
- [ ] Output shows Celsius temperature, weather condition, and humidity
- [ ] An invalid location shows a clear, friendly error message

---

## 🏆 How to Get Your Certificate

Once you have completed the exercise and your CLI is working, you can generate
a personalised **completion certificate**.

### Option A — Generate via the CLI command

Run the following command and enter your name when prompted:

```bash
node weather.js cert
```

The CLI will:
1. Ask for your **name**
2. Automatically use **today's date**
3. Create a certificate DOCX (and PDF on Windows with Word installed) inside
   the `output/` folder

### Option B — Generate after a weather lookup

After a successful weather lookup the CLI will also prompt for your name and
generate the certificate automatically.

### Template customisation

The certificate template lives at `templates/certificate-template.docx`.
It uses two placeholders that are replaced at runtime:

| Placeholder | Replaced with |
|-------------|---------------|
| `{{NAME}}` | Your name (entered at the prompt) |
| `{{DATE}}` | Today's date (set automatically) |

> **Note:** PDF export requires **Microsoft Word on Windows**. On other
> operating systems the `output/` folder will contain a DOCX file instead.

---

## 💡 Extra Tips (Optional)

- Add input validation and a `--help` usage message
- Format the output with labels and line breaks for better readability
- Handle network errors with a friendly message (e.g., "Could not reach the weather service")
- Try using Copilot CLI's `/share` command to save and share your session

---

## 📄 License

This project is licensed under the **MIT License** — see the
[LICENSE](LICENSE) file for details.
