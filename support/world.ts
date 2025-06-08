import { IWorldOptions, setWorldConstructor } from '@cucumber/cucumber';
import { Page, BrowserContext } from 'playwright';

export class CustomWorld {
  page!: Page;
  context!: BrowserContext; // 

  constructor(options: IWorldOptions) {
    // We can initialize things here if needed
  }
}

setWorldConstructor(CustomWorld);
