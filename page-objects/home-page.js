const { expect } = require("chai");
//import { test, expect } from '@playwright/test';
locators = {
  "username_input": "#user-name",
  "password_input": "#password",
  "login_button": "#login-button",
  "inventory_container": "#inventory_container",
  "Apple_url":"https://www.apple.com/?afid=p238%7CseIEs444j-dc_mtid_1870765e38482_pcrid_630738884103_pgrid_13945964887_pntwk_g_pchan__pexid__&cid=aos-us-kwgo-brand-apple--slid---product-"

}

class HomePage{
  async navigateToHomePage() {
    return await page.goto(global.NEW_URL);
  }

  async verifyUserIsOnHomePage() {
    return expect(await page.title()).to.equal('Google');
  }
  async  fillSearchBar() {
    const searchBar = await page.getByRole("combobox[name=\"Search\"]");
    await searchBar.click();
    await searchBar.fill('Apple');
  }
  async clickOnSearch(){
    await page.getByText('Google Search').first().click();
  }
  async seeAppleSearchViews() {
    const newlocator = await page.innerText('[data-text-ad="1"]>div>div>a>div>span>>nth=0');
    // const locator = await page.getByText('Apple - Official Site', { exact: true });
    //expect(newlocator).to.contain("Apple - Official Site");
    //onsole.log(newlocator);
    const locator2 = page.locator('[data-text-ad="1"]>div>div>a>div>span>>nth=0');
    expect(locator2.toBeVisible);
  }
  async clickOnOfficialAppleLink() {
    const getLink = await page.getByRole('link', { name: 'Apple - Official Site Ad· https://www.apple.com/' });
    await getLink.click();
  //  await expect(page.locator((locators.Apple_url)));
    await page.locator('[class="ac-gn-item ac-gn-item-menu ac-gn-iphone"]>a>span').click();
    await page.locator('[class="chapternav-item chapternav-item-iphone-14-pro"]>a').click();
  //  await page.locator('[class="ac-gn-link ac-gn-link-iphone"]').click();
  }
  async verifyUserIsOnIphone14Page() {
    await page.locator('[class="ac-gn-item ac-gn-item-menu ac-gn-iphone"]>a>span').click();
    await page.locator('[class="chapternav-item chapternav-item-iphone-14-pro"]>a').click();
    await expect(page.url('https://www.apple.com/iphone-14-pro/'));
  }

  async dashboard() {
    await page.waitForTimeout(5000);
    const dashBoard = await page.locator('[class="element-wrapper compact pt-4"]>h6>>nth=0');
    const isThere = await dashBoard.isVisible();
    console.log("Dashboard is visible: " + isThere);
  }

}
module.exports = { HomePage };