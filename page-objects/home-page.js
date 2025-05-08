const {expect} = require("@playwright/test");
//import { test, expect } from '@playwright/test';
locators = {
  // All locators removed as they are not used by the remaining dashboard() method
}

class HomePage{
  async dashboard() {
    await page.waitForTimeout(5000);
    const header = await page.locator('[class="element-wrapper compact pt-4"]>h6>>nth=0').innerText();
    expect(header).toBeVisible()
    console.log('Header is visible: ' + header );
  }
}
module.exports = { HomePage };