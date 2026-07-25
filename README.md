# Playwright TodoMVC Automation Tests

## Overview

This project demonstrates **End-to-End (E2E) UI automation testing** using **Playwright** with **JavaScript**. The automated tests validate the functionality of the TodoMVC React application by simulating real user interactions.

**Application Under Test:**
https://todomvc.com/examples/react/dist/

---

## Tech Stack

- Playwright
- JavaScript
- Node.js
- npm
- Chromium
- Firefox
- WebKit
- Git & GitHub

---

## Project Setup

### 1. Create the project

Initialize a Node.js project:

```bash
npm init -y
```

Initialize Playwright:

```bash
npm init playwright@latest
```

Install Playwright browser binaries:

```bash
npx playwright install
```

This downloads the supported browsers:

- Chromium
- Firefox
- WebKit

---

## Creating Tests

Playwright Codegen was used to record user interactions and generate the initial test script.

```bash
npx playwright codegen https://todomvc.com/examples/react/dist/
```

The generated script was then refined and saved as:

```
tests/todo.spec.js
```

---

## Running Tests

### Run all tests (Headless)

Runs all tests in headless mode.

```bash
npx playwright test
```

---

### Run tests in Headed Mode

Launches the browser with a visible user interface.

```bash
npx playwright test --headed
```

---

### Run tests on a specific browser

Run tests only on Chromium.

```bash
npx playwright test --headed --project=chromium
```

Run tests only on Firefox.

```bash
npx playwright test --project=firefox
```

Run tests only on WebKit.

```bash
npx playwright test --project=webkit
```

---

### Run tests in UI Mode

Launch Playwright's interactive UI for running, filtering, and debugging tests.

```bash
npx playwright test --ui
```

---

### Debug Tests

Open Playwright Inspector to debug tests step-by-step.

```bash
npx playwright test --debug
```

---

### View HTML Report

After test execution, open the generated HTML report.

```bash
npx playwright show-report
```

---

## Test Scenario

The automation test covers the following TodoMVC functionality:

- Open the TodoMVC application
- Add new todo items
- Verify newly added todos
- Mark todos as completed
- Remove todo items
- Validate application behaviour

---

## Playwright Features Explored

During this project, I explored several Playwright features, including:

- Project initialization with `npm init playwright@latest`
- Browser installation using `npx playwright install`
- Test recording with Playwright Codegen
- Running tests in headless mode
- Running tests in headed mode
- Cross-browser execution (Chromium, Firefox, WebKit)
- Interactive UI Mode
- Debugging using Playwright Inspector
- HTML report generation
- Playwright Test Runner

---

## Skills Demonstrated

- End-to-End (E2E) Test Automation
- UI Automation Testing
- Cross-browser Testing
- Playwright Framework
- JavaScript
- Node.js
- npm
- Test Recording
- Test Debugging
- HTML Test Reporting
- Git Version Control
- GitHub Repository Management

---

## Installation

Clone the repository:

```bash
git clone https://github.com/<your-username>/playwright-todo-tests.git
```

Navigate to the project folder:

```bash
cd playwright-todo-tests
```

Install project dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## Execute the Tests

```bash
npx playwright test
```

---

## Generate Test Report

```bash
npx playwright show-report
```

