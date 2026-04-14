# GitHub Copilot CLI Setup Guide

GitHub Copilot CLI helps developers use AI directly in the terminal to generate commands, explain commands, and automate tasks.

# Prerequisites

Students must have:
- GitHub account
- Git installed
- VS Code installed (recommended)
- Python installed (optional for demo project)

# Step 1 — Install GitHub CLI

GitHub CLI is required before installing Copilot CLI.

Windows:
```bash
winget install GitHub.cli
```

Mac:
```bash
brew install gh
```

Linux:
```bash
sudo apt install gh
```

Verify installation:
```bash
gh --version
```

# Step 2 — Login to GitHub using CLI

```bash
gh auth login
```

Follow the prompts and complete the browser login process.

# Step 3 — Install GitHub Copilot CLI Extension

```bash
gh extension install github/gh-copilot
```

# Step 4 — Verify installation

```bash
gh copilot --help
```

# Step 5 — Test Copilot CLI

Example commands students can try:
```bash
gh copilot explain "ls -la"

gh copilot suggest "find all python files in folder"

gh copilot suggest "create python virtual environment"
```

Copilot CLI converts natural language into terminal commands.

# Notes

Students must have an active GitHub Copilot subscription or student access.
