// support/hooks.ts

import { BeforeAll, AfterAll, Before } from '@cucumber/cucumber';
import { CustomWorld } from './world';
import { chromium, Browser } from 'playwright';
import reporter from 'multiple-cucumber-html-reporter';
import fs from 'fs';

let browser: Browser;

BeforeAll(async () => {
  // Clean and recreate the reports/json folder to avoid stale or corrupted files
  const reportJsonPath = 'reports/json';
  if (fs.existsSync(reportJsonPath)) {
    fs.rmSync(reportJsonPath, { recursive: true, force: true });
  }
  fs.mkdirSync(reportJsonPath, { recursive: true });

  browser = await chromium.launch({ headless: false });
});

Before(async function (this: CustomWorld) {
  const context = await browser.newContext();
  this.page = await context.newPage();
});

AfterAll(async () => {
  await browser.close();

  reporter.generate({
    jsonDir: 'reports/json',
    reportPath: 'reports/html',
    metadata: {
      browser: { name: 'chromium', version: 'latest' },
      device: 'Local test machine',
      platform: { name: 'Windows', version: '10' }
    },
    customData: {
      title: 'Execution Info',
      data: [
        { label: 'Project', value: 'BBC Sport UI Automation' },
        { label: 'Tested By', value: 'Ravi Gupta' },
        { label: 'Date', value: new Date().toLocaleString() }
      ]
    },
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    displayReportTime: true,
    useCDN: true,
    pageTitle: 'BBC Sport UI Automation Report',
    reportName: 'BBC Sport Test Results',
    disableLog: false
  });
});
