import selectors from "./locators/locators.json"
import type { Locator, Page } from 'playwright';
import { ElementHandle, expect } from "@playwright/test";

class SamplePage {
    readonly page: Page;
    readonly industriesMenu: Locator;
    readonly industryMenuDdl: Locator;
    readonly industryMenuAllItems: Locator;

    constructor(page: Page) {
      this.page = page;
      this.industriesMenu = page.locator(selectors.pages.mainPage.industriesMenuButn);
      this.industryMenuDdl = page.locator(selectors.pages.mainPage.industryMenu.ddl);
      this.industryMenuAllItems = page.locator(selectors.pages.mainPage.industryMenu.allItemsItem);
    }
    async openMain() {
      await this.page.goto("/");
    }
    async getMenuIndustriesItems():  Promise<ElementHandle<SVGElement | HTMLElement>[]> {
      await this.industriesMenu.click();
      const count = await this.page.$$(selectors.pages.mainPage.industryMenu.ddlMenuItems);
      await this.page.keyboard.press("Escape");
      return count
    }
    async getPageIndustriesTiles():  Promise<ElementHandle<SVGElement | HTMLElement>[]>{
      await this.industriesMenu.click();
      await this.industryMenuAllItems.click();
      expect(this.page.url()).toContain("/industries");
      return await this.page.$$(selectors.pages.industriesPage.industryMenuTiles);
    }
  }

export { SamplePage };
