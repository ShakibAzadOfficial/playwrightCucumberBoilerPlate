const { Given, When , Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../page-objects/login-page');
const loginPage = new LoginPage();

Given('I am on the login screen', async function() {
  await loginPage.navigateToLoginScreen();
  await loginPage.verifyLoginPageIsDisplayed();
});

When('I fill the login form with valid credentials', async function() {
  await loginPage.submitLoginForm();
});

Then('I should be able to see the home screen', async function() {
  await loginPage.verifyAfterLoginPage();
});

// Given('I am on Google Homepage', async function() {
//   await homePage.navigateToHomePage();
//   await homePage.verifyUserIsOnHomePage();
// });
// When('I fill search bar with apple', async function(){
//   await homePage.fillSearchBar();
// });
// Then('I click Search', async function(){
//   await homePage.clickOnSearch();
// });
// Then('I will see apple search views', async function(){
//   await homePage.seeAppleSearchViews();
// });
// Then('I click on Official Apple Site Link', async function() {
//   await homePage.clickOnOfficialAppleLink();
//   await homePage.verifyUserIsOnIphone14Page();
// });

Given('I am going to zillow Page', async function() {
  await loginPage.zillowLogin();
});

Given('I verify web page', async function() {
  await loginPage.zillowVerify();
});