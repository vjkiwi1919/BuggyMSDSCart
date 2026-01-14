Playwright Shopping Cart Automation
This repository contains automated functional tests for the Shopping Cart User Story.
It utilizes Playwright with TypeScript to validate core e-commerce flows including adding items, updating quantities, and checkout processes.
*******
Tech Stack
Framework: Playwright
Language:  JavaScript
Reporter: Playwright HTML Report
*********
Clone the repository and install the dependencies:

Bash

git clone <your-repository-url>
cd <repository-folder>
npm install

********
Playwright requires specific browser binaries to run tests:

Bash

npx playwright install
************
🧪 Running TestsActionCommandRun all tests (Headless)npx playwright testRun tests in Headed modenpx playwright test
--headedOpen Interactive UI Modenpx playwright test 
--uiDebug Specific Testnpx playwright test
--debugView Last Test Reportnpx playwright show-report
*********
Project Structure
tests/ - Contains all .spec.ts test files.

playwright.config.ts - Main configuration file (Base URL, browser settings, retries).

.github/workflows/ - CI/CD pipeline configuration.
