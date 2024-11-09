import { test, expect } from '../basefixtures';


test.describe("Test Suite for addding items for Magento Page", () => {

    test.beforeEach(async ({page})=>{
        await page.goto('https://magento.softwaretestingboard.com');
    });

    test('Add item', async({homePage})=>{
        await homePage.ClickOnItem();
        await homePage.ChooseSize(2);
        await homePage.ChooseColor(0);
        await homePage.ClckOnAddCart();
        await expect(homePage.messageItem).toContainText('You added Argus All-Weather Tank to your shopping cart.');
    });

    test.afterEach(async({page})=>{
        await page.close();
    });
});