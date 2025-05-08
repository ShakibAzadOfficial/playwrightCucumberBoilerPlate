const { Given } = require('@cucumber/cucumber');
const { HomePage } = require('../page-objects/home-page');
const homePage = new HomePage();

Given('I verify I am on dashboard', async function() {
  await homePage.dashboard();
});