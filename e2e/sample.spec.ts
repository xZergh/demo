import { test, expect } from "@playwright/test";
import { SamplePage } from "../pages/sample_page";

test.beforeEach(async ({ page }) => {
    const sample_page = new SamplePage(page);
    await sample_page.openMain();
  });


test("sample test", async ({ page }) => {
  const sample_page = new SamplePage(page);

  const menuIndItems:Array<any> = await sample_page.getMenuIndustriesItems();
  const pageIndItems:Array<any> = await sample_page.getPageIndustriesTiles();
  expect(menuIndItems.length -2).toEqual(pageIndItems.length); // two extra items in theDDL
});

