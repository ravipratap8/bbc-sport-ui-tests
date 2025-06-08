# BBC Sport UI Automation

This is a simple Playwright + Cucumber + TypeScript test automation framework built to automate the BBC Sport website's search feature.

## Why this project exists

The goal of this project is to demonstrate how frontend UI tests can be written using modern tools in a structured and scalable way. It follows a clean Page Object Model structure and includes Cucumber for writing BDD-style test scenarios.

## Tech stack

- Playwright (for browser automation)
- Cucumber.js (for BDD step definitions)
- TypeScript (for strict typing and clean code)
- Multiple Cucumber HTML Reporter (for generating test reports)

## Project structure

features/ → Gherkin feature files
step_definitions/ → Step definition files
page-objects/ → Page Object classes and locators
support/ → Hooks and World context
reports/ → Auto-generated test reports (excluded from Git)


## How to run the tests

must have Node.js installed.

1. Install dependencies:


npm install
##  Run the test 

npx cucumber-js

Author
Ravi Pratap
https://github.com/ravipratap8
