import {test, expect} from "@playwright/test";

test.describe('Interacting with checkboxes and radiobuttons', ()=> {
    test('valid login', async ({page}) => {
        await page.goto('https://practice.expandtesting.com/checkboxes');
        //using click
        await page.locator("#checkbox1").click();
        await page.locator("#checkbox2").click();

    })

})