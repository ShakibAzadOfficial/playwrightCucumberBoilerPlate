const { Given, When , Then } = require('@cucumber/cucumber');
const { HomePage } = require('../page-objects/home-page');
const homePage = new HomePage();


Given('I am on Google Homepage', async function() {
  await homePage.navigateToHomePage();
  await homePage.verifyUserIsOnHomePage();
});
When('I fill search bar with apple', async function(){
  await homePage.fillSearchBar();
});
Then('I click Search', async function(){
  await homePage.clickOnSearch();
});
Then('I will see apple search views', async function(){
  await homePage.seeAppleSearchViews();
});
Then('I click on Official Apple Site Link', async function() {
  await homePage.clickOnOfficialAppleLink();
  await homePage.verifyUserIsOnIphone14Page();
});

Given('I verify I am on dashboard', async function() {
  await homePage.dashboard();
});