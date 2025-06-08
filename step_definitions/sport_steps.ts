// step_definitions/sport_steps.ts
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { SearchPage } from '../page-objects/SearchPage';

Given('I open the BBC Sport homepage', async function (this: CustomWorld) {
  await this.page.goto('https://www.bbc.com/sport');
});

When('I search for {string}', async function (this: CustomWorld, searchTerm: string) {
  const page = this.page;

  try {
    // 1. Wait for and click Search Icon
    const searchIcon = page.getByRole(SearchPage.SEARCH_ICON, { name: SearchPage.SEARCH_ICON_NAME });
    await searchIcon.waitFor({ state: 'visible', timeout: 10000 });
    await searchIcon.click();

    // 2. Wait for search input to be focusable
    const input = page.getByRole(SearchPage.SEARCH_INPUT, { name: SearchPage.SEARCH_INPUT_NAME });
    await input.waitFor({ state: 'attached', timeout: 10000 });
    await input.click();

    // 3. Slow typing
    await input.type(searchTerm, { delay: 100 });  // type with delay

    // 4. Confirm value typed
    const typedValue = await input.inputValue();
    if (typedValue.trim() !== searchTerm) {
      throw new Error(`Typed value mismatch. Got "${typedValue}"`);
    }

    // 5. Click Search button
    const button = page.getByRole(SearchPage.CONFIRM_BUTTON, { name: SearchPage.CONFIRM_BUTTON_NAME });
    await button.waitFor({ state: 'visible', timeout: 10000 });
    await button.click();

  } catch (err) {
    console.error('Search step failed:', err);
    await page.screenshot({ path: 'reports/screenshots/search-failure.png', fullPage: true });
    throw err;
  }
});

Then('I should see at least {int} search results', async function (this: CustomWorld, count: number) {
  await this.page.waitForSelector(SearchPage.SEARCH_RESULTS, { timeout: 30000 });
  const links = await this.page.locator(SearchPage.SEARCH_RESULTS).all();
  console.log(`Search results found: ${links.length}`);
  expect(links.length).toBeGreaterThanOrEqual(count);
});
