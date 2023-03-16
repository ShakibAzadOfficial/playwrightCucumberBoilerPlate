const { Given, When , Then } = require('@cucumber/cucumber');
//const { MinhazPage } = require('../page-objects/minhaz-page');
//const minhazpage = new MinhazPage();


Given ('I am on the google store login screen', async function(){
    await page.goto('https://www.google.com/');
    await page.getByRole('combobox', { name: 'Search' }).click();
    await page.getByRole('combobox', { name: 'Search' }).fill('amazon');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.getByRole('link', { name: 'Amazon.com. Spend less. Smile more. Amazon.com https://www.amazon.com' }).click();
    await page.getByPlaceholder('Search Amazon').click();
    await page.getByPlaceholder('Search Amazon').fill('laptop');
    await page.locator('.s-suggestion').first().click();
})

Given ('I am on the amazon home page', async function(){
    await page.goto('https://www.amazon.com');
}

)

Given ('I am on the apple home page', async function(){
    await page.goto('https://www.apple.com/');
    //await page.getByRole('link', { name: 'Support' }).nth(2).click();
    //await page.getByRole('link', { name: 'Sign in to iCloud' }).click();
    //await page.getByRole('link', { name: 'Sign in on your Mac (On-page icon)' }).click();
    //below code is refactored by chatgpt
    await page.$$eval('a', links => links.find(link => link.textContent === 'Support' && link.parentElement.tagName === 'NAV')).click();
    await page.$eval('a[href*="appleid.apple.com"]', link => link.click());
    await page.$eval('a[aria-label*="Sign in on your Mac"]', link => link.click());

})

