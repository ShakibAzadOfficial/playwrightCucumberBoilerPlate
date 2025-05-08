const {expect} = require("@playwright/test");
//import { test, expect } from '@playwright/test';
locators = {
  // All locators removed as they are not used by the remaining dashboard() method
}

class HomePage{
  async dashboard() {
    const firstHeaderLocator = page.locator('[class="element-wrapper compact pt-4"] > h6').first();
    await expect(firstHeaderLocator).toBeVisible();
    const headerText = await firstHeaderLocator.innerText();
    console.log('Header is visible: ' + headerText);
    await page.pause();
  }
}
module.exports = { HomePage };