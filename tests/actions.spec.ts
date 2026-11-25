import {test, expect} from "@playwright/test";

test.describe('Login Test', ()=> {
    test('valid login', async ({page}) => {
        await page.goto('https://practice.expandtesting.com/');
        await page.pause();
        await page.goto('https://practice.expandtesting.com/login');
        await page.locator("//input[@id='username']").fill('practice');
        await page.locator("//input[@id='password']").fill("SuperSecretPassword!");
        await page.locator("//button[@id='submit-login']").click();
        await expect(page.locator("div[id='flash'] b")).toContainText("You logged into a secure area!");
    })

    test('search', async ({page}) => {
        await page.goto('https://practice.expandtesting.com/');
        await page.getByPlaceholder("Search an example...").fill('login');
        await page.locator("//a[normalize-space()='Test Login Page']").click();
        await expect(page.locator("div[class='container'] h1"));
    })
})
