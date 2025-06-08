// page-objects/SearchPage.ts
import { Page } from 'playwright';

export class SearchPage {
  static SEARCH_ICON: Parameters<Page['getByRole']>[0] = 'link';
  static SEARCH_ICON_NAME = 'Search BBC';

  static SEARCH_INPUT: Parameters<Page['getByRole']>[0] = 'combobox';
  static SEARCH_INPUT_NAME = 'Input your search term';

  static CONFIRM_BUTTON: Parameters<Page['getByRole']>[0] = 'button';
  static CONFIRM_BUTTON_NAME = 'Search';

  static SEARCH_RESULTS = 'main#main-content a[href*="/sport/"]';

}
