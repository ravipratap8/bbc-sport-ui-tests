# BBC Sport UI Automation Framework

This project automates a simple search scenario on the BBC Sport website using Playwright, TypeScript, and Cucumber (BDD).

## Scenario

- Open BBC Sport Homepage
- Click on the search icon
- Search for "Sport in 2023"
- Verify at least 4 results are found

## How to Run

1. Install dependencies

```
npm install
```

2. Run the test

```
npx cucumber-js
```

## Project Structure

- `features/` - BDD feature files
- `step_definitions/` - Cucumber step definitions
- `page-objects/` - Page Object Model files
- `config/` - Configuration (e.g., base URL)