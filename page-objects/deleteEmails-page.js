const { expect } = require("@playwright/test");
import { UI_LOCATORS } from '../constants/locators';
const gmailUsername = process.env.USERNAME
const gmailPassword = process.env.PASSWORD




class deleteEmails{
async navigateToGmail(){
    await page.goto('www.gmail.com')
}
async login(){
    await page.locator(UI_LOCATORS.username).click
    await page.fill(gmailUsername)
    await page.locator(UI_LOCATORS.password).click()
    await page.fill(gmailPassword)
    await page.click(UI_LOCATORS.loginButton)
}





}
module.exports = { deleteEmails };
// create sample NodeJS PDF read and parse?
