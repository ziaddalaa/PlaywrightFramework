import {test, expect} from "@playwright/test";

test.describe('Handling Web Elements by index and filter', ()=> {
    test('valid login', async ({page}) => {
        await page.goto('https://practice.expandtesting.com/');

        const baseLocator = page.locator("//div[@class='card-body']");

        //filter
        await baseLocator.filter({hasText: "Test Login Page"}).click();

    })
})