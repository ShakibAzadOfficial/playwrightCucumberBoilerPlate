[![Playwright-CI](https://github.com/your-repo-username/playwright-cucumber-js-e2e-boilerplate/actions/workflows/ci.yml/badge.svg)](https://github.com/your-repo-username/playwright-cucumber-js-e2e-boilerplate/actions/workflows/ci.yml)
# Playwright Cucumber JS E2E Boilerplate

This project provides a boilerplate for End-to-End (E2E) testing using Playwright with Cucumber-JS (v7) in JavaScript, following the Page Object Model (POM) design pattern. It's designed to help beginners get started with automated testing and to provide a solid foundation for more complex test suites.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Directory Structure](#directory-structure)
- [Configuration](#configuration)
  - [Managing URLs](#managing-urls)
- [Writing Tests](#writing-tests)
  - [1. Creating a Feature File](#1-creating-a-feature-file)
  - [2. Writing Step Definitions](#2-writing-step-definitions)
  - [3. Implementing Page Objects](#3-implementing-page-objects)
- [Running Tests](#running-tests)
  - [Run All Tests](#run-all-tests)
  - [Run Specific Tests by Tag](#run-specific-tests-by-tag)
- [Reporting](#reporting)
- [Best Practices for Beginners](#best-practices-for-beginners)
- [Contributing](#contributing)

## Overview

[Playwright](https://playwright.dev/) is a Node.js library developed by Microsoft to automate Chromium, Firefox, and WebKit browsers with a single API. It's known for its speed, reliability, and auto-waits.

[Cucumber](https://cucumber.io/) is a tool that supports Behavior-Driven Development (BDD). It allows you to write test scenarios in a human-readable language called Gherkin. These scenarios are then translated into executable test code.

The Page Object Model (POM) is a design pattern that encourages the separation of test code (what to test) from page-specific code (how to interact with the page). This leads to more maintainable and reusable test automation code.

## Features

-   **Playwright:** For powerful and reliable browser automation.
-   **Cucumber-JS:** For writing tests in Gherkin (Given-When-Then).
-   **Page Object Model:** For maintainable and scalable test code.
-   **JavaScript:** The programming language used for test implementation.
-   **HTML Reporting:** Generates an HTML report with test results and screenshots for failed tests.
-   **Cross-browser:** Capable of running tests on Chromium, Firefox, and WebKit.

## Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (which includes npm, the Node Package Manager). Version 14.x or higher is recommended.
-   A code editor (e.g., [Visual Studio Code](https://code.visualstudio.com/)).

## Installation

1.  **Clone the repository (if you haven't already):**
    ```bash
    git clone <repository-url>
    cd playwright-cucumber-js-e2e-boilerplate
    ```

2.  **Install dependencies:**
    This command will download and install all the necessary packages defined in `package.json`, including Playwright and Cucumber.
    ```bash
    npm install
    ```
    Playwright will also download browser binaries the first time it's installed.

## Directory Structure

Here's an overview of the key directories in this project:

```
playwright-cucumber-js-e2e-boilerplate/
├── config/                     # Configuration files (e.g., base URLs)
│   └── config.js
├── features/                   # Cucumber feature files (.feature)
│   └── login.feature
├── node_modules/               # Project dependencies (managed by npm)
├── page-objects/               # Page Object Model files (_page.js)
│   └── login-page.js
├── reports/                    # Test execution reports (auto-generated)
├── setup/                      # Setup files for tests (e.g., hooks)
│   └── hooks.js
├── step-definitions/           # Step definition files (_step.js)
│   └── login-step.js
├── .gitignore                  # Specifies intentionally untracked files that Git should ignore
├── cucumber.js                 # Cucumber.js profile configurations
├── package-lock.json           # Records exact versions of dependencies
├── package.json                # Project metadata and dependencies
└── README.md                   # This file
```

-   `config/`: Contains configuration files. For instance, `config.js` is used to define global variables like base URLs for different environments.
-   `features/`: This is where you write your test scenarios in Gherkin syntax. Each `.feature` file typically represents a feature of your application.
-   `page-objects/`: Contains classes that represent the pages of your application. Each class encapsulates the locators and interaction methods for a specific page.
-   `reports/`: Test execution reports are generated here.
-   `setup/`: Contains global setup for your tests, like hooks (`setup/hooks.js`) which can run before or after scenarios.
-   `step-definitions/`: Contains the JavaScript code that maps the Gherkin steps from your `.feature` files to actions performed by Playwright.

## Configuration

### Managing URLs

Global configurations, such as base URLs for your application under test, are managed in `config/config.js`.

**Example `config/config.js`:**

```javascript
Object.assign(global, {
  BASE_URL: 'https://www.saucedemo.com',
  DEMO_TEST_URL: 'https://demo.applitools.com/',
  // Add more global variables as needed
  // API_BASE_URL: 'https://api.example.com'
});
```

**How to add a new URL:**

1.  Open `config/config.js`.
2.  Add a new property to the `Object.assign(global, { ... });` block. For example, to add a URL for a new admin portal:
    ```javascript
    Object.assign(global, {
      BASE_URL: 'https://www.saucedemo.com',
      DEMO_TEST_URL: 'https://demo.applitools.com/',
      ADMIN_PORTAL_URL: 'https://admin.example.com' // New URL
    });
    ```
3.  You can then access this URL in your page objects or step definitions using `global.ADMIN_PORTAL_URL` or simply `ADMIN_PORTAL_URL` (since it's assigned to `global`).

## Writing Tests

Tests are written by combining Gherkin feature files, step definitions, and page objects.

### 1. Creating a Feature File

Feature files describe your application's behavior from a user's perspective.

1.  Create a new file in the `features/` directory with a `.feature` extension (e.g., `userProfile.feature`).
2.  Write your scenarios using Gherkin syntax (Given, When, Then, And, But).

**Example `features/userProfile.feature`:**

```gherkin
Feature: User Profile Management
  As a registered user
  I want to be able to update my profile
  So that my information is current

  @profile
  Scenario: Successfully update user profile
    Given I am logged in and on the profile page
    When I update my email to "new.email@example.com"
    And I click "Save Changes"
    Then I should see a success message "Profile updated successfully"
```

-   **`Feature:`**: A short description of the feature.
-   **`Scenario:`**: A specific test case for that feature.
-   **`Given, When, Then, And, But`**: Steps that describe the actions and verifications.
-   **`@tagName`**: Tags can be used to group scenarios (e.g., `@profile`, `@smoke`). You can use these tags to run specific sets of tests.

### 2. Writing Step Definitions

Step definitions connect the Gherkin steps in your feature files to actual JavaScript code that Playwright will execute.

1.  Create or open a relevant `_step.js` file in the `step-definitions/` directory (e.g., `userProfile-step.js`). If creating a new file, try to name it corresponding to the feature.
2.  Import `Given`, `When`, `Then` from `@cucumber/cucumber`.
3.  Import any necessary Page Objects.
4.  Write functions that match the Gherkin steps.

**Example `step-definitions/userProfile-step.js` (corresponding to the feature above):**

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { UserProfilePage } = require('../page-objects/userProfile-page'); // Assuming you create this page object

const userProfilePage = new UserProfilePage();

Given('I am logged in and on the profile page', async function () {
  // Assuming login is handled or navigation to profile page is direct
  await userProfilePage.navigateToProfilePage();
  await userProfilePage.verifyOnProfilePage();
});

When('I update my email to {string}', async function (email) {
  await userProfilePage.updateEmail(email);
});

When('I click {string}', async function (buttonText) {
  // This step can be made more generic or specific as needed
  await userProfilePage.clickButton(buttonText); // Example: a generic click method on the page object
});

Then('I should see a success message {string}', async function (message) {
  await userProfilePage.verifySuccessMessage(message);
});
```

-   The strings inside `Given()`, `When()`, `Then()` are regular expressions that match the Gherkin steps.
-   Parameters like `{string}` in Gherkin are passed as arguments to your step definition functions.
-   These functions typically call methods on your Page Objects.

### 3. Implementing Page Objects

Page Objects encapsulate the interactions with the web pages.

1.  Create a new file in the `page-objects/` directory (e.g., `userProfile-page.js`).
2.  Define a class for the page.
3.  Add locators (CSS selectors, XPath, etc.) for elements on the page.
4.  Create methods for interacting with these elements (e.g., clicking buttons, filling forms) and for verifying page state.
5.  Use Playwright's `expect` for assertions.

**Example `page-objects/userProfile-page.js`:**

```javascript
const { expect } = require('@playwright/test');

// Define locators at the top or within the class as preferred
const locators = {
  emailInput: '#email',
  saveChangesButton: 'button:has-text("Save Changes")', // Example Playwright selector
  successMessageBanner: '.success-message'
};

class UserProfilePage {
  async navigateToProfilePage() {
    // Assuming global.PROFILE_URL is defined in config/config.js
    await page.goto(global.PROFILE_URL || '/profile'); // Fallback if not defined
  }

  async verifyOnProfilePage() {
    await expect(page).toHaveTitle(/Profile/); // Assumes page title contains "Profile"
    await expect(page.locator(locators.emailInput)).toBeVisible();
  }

  async updateEmail(newEmail) {
    await page.fill(locators.emailInput, newEmail);
  }

  async clickButton(buttonText) {
    // A more robust implementation might use specific locators
    // This is a simplified example
    await page.locator(`button:has-text("${buttonText}")`).click();
  }

  async verifySuccessMessage(expectedMessage) {
    const messageElement = page.locator(locators.successMessageBanner);
    await expect(messageElement).toBeVisible();
    await expect(messageElement).toHaveText(expectedMessage);
  }
}

module.exports = { UserProfilePage };
```
- Remember to `require` Playwright's `expect` at the top: `const { expect } = require("@playwright/test");`
- `page` is a global Playwright Page object, typically made available through hooks (see `setup/hooks.js`).

## Running Tests

### Run All Tests

To run all feature files in the project:

```bash
npm test
```

This command is defined in `package.json` and executes Cucumber with the specified parameters.

### Run Specific Tests by Tag

You can run specific scenarios or features by using tags. Add tags (e.g., `@smoke`, `@regression`, `@myFeature`) above `Feature:` or `Scenario:` lines in your `.feature` files.

To run tests with a specific tag (e.g., `@smoke`):

```bash
npm run smoke
```

You'll need to add a corresponding script to your `package.json` for each tag you want to run this way. For example, to run the `@smoke` tag:

**In `package.json`:**

```json
"scripts": {
  "test": "...",
  "demo": "...",
  "smoke": "./node_modules/.bin/cucumber-js --require cucumber.js --tags @smoke --require step-definitions/**/*.js --require features/**/*.js --format html:./reports/cucumber_report.html --format summary --format @cucumber/pretty-formatter --no-strict --publish-quiet"
  // Add other tag-specific scripts here
},
```

Alternatively, you can run tests with tags directly using the full Cucumber command, modifying the `--tags` parameter:

```bash
./node_modules/.bin/cucumber-js --require cucumber.js --tags @yourTagName --require step-definitions/**/*.js --require features/**/*.js --format html:./reports/cucumber_report.html --format summary --format @cucumber/pretty-formatter --no-strict --publish-quiet
```

## Reporting

After test execution, an HTML report is generated in the `reports/` folder (e.g., `cucumber_report.html`). This report provides a summary of the test run, including passed and failed scenarios. Screenshots are automatically attached to failed scenarios.

## Best Practices for Beginners

-   **Keep Scenarios Focused:** Each scenario should test one specific piece of behavior.
-   **Write Declarative Steps:** Gherkin steps should describe *what* the user does, not *how* the application implements it (e.g., "Given I log in as an admin" instead of "Given I type 'admin' in the username field and 'password123' in the password field and click the login button"). The "how" belongs in step definitions and page objects.
-   **Use Page Objects Effectively:**
    -   Don't put assertions directly in page object methods unless they are verifying the state of that page itself (e.g., `verifyPageLoaded()`). Assertions about business logic outcomes usually belong in step definitions.
    -   Page object methods should return data or perform actions, allowing step definitions to make decisions or assertions.
-   **Meaningful Locators:** Choose robust and unique locators for elements (IDs are often best, followed by data attributes like `data-testid`). Avoid relying on highly dynamic or brittle selectors (e.g., complex XPath based on DOM structure).
-   **Use Auto-Waits:** Playwright has excellent auto-waiting capabilities. Understand them to avoid unnecessary explicit waits.
-   **Organize Your Code:** Keep your features, step definitions, and page objects well-organized.
-   **Regularly Review and Refactor:** As your test suite grows, refactor your code to keep it clean and maintainable.
-   **Version Control:** Use Git or another version control system to track your changes.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.
(You can add more specific contribution guidelines if this is an open-source project). 
