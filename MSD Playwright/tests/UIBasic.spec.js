const {test, expect} = require ("@playwright/test")

test ('My First browser test', async ({browser})=>
{
//chromium - plugins / cookies
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/AutomationPractice/")

 
});

test.only('My page test', async ({page})=>
{
// chromium - plugins / cookies
// const context = browser.newContext();
// const page = (await context).newPage
await page.goto('https://google.com/')
console.log(await page.title())
await expect (page).toHaveTitle('Google')
});