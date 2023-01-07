const { expect } = require("chai");


 locators = {
    "username_input": "#user-name",
    "password_input": "#password",
    "login_button": "#login-button",
    "inventory_container": "#inventory_container",
    "usernameInput": '[class="form-group"] [id="username"]',
    "passwordInput": '[class="form-group"] [id="password"]',
    "rememberMeCechkbox": '[class="buttons-w"] [class="form-check-inline"] [type="checkbox"]',
    "loginButton": '[class="buttons-w"] [id="log-in"]'
 }
 
 class LoginPage {

  async navigateToLoginScreen() {
   return await page.goto(global.BASE_URL);
  }

  async demoTest() {
    return await page.goto(global.DEMO_TEST);
  }

  async verifyLoginPageIsDisplayed() {
   return expect(await page.title()).to.equal('Swag Labs');
  }

  async submitLoginForm() {
    const element = await page.waitForSelector(locators.username_input);
    await page.fill(locators.username_input,'standard_user');
    await page.fill(locators.password_input,'secret_sauce');
    await page.click(locators.login_button);
  }

  async verifyAfterLoginPage() {
    await page.waitForSelector(locators.inventory_container);
    const visible = await page.isVisible(locators.inventory_container);
    return expect(visible).to.equal(true);
  }

  async theLoginInPage() {
    await page.waitForSelector(locators.usernameInput);
    await page.waitForTimeout(1000);
    await page.fill(locators.usernameInput, 'admin');
    await page.waitForTimeout(1000);
    await page.fill(locators.passwordInput, 'adminPassword');
    await page.waitForTimeout(1000);
    await page.click(locators.rememberMeCechkbox);
    await page.waitForTimeout(1000);
    await page.click(locators.loginButton, { waitUntil: 'networkidle' });
  }
};

module.exports = { LoginPage };