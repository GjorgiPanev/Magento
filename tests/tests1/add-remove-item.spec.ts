import { test, expect } from '../basefixtures';


test.describe("Test Suite for add and remove item from the cart for Magento Page", () => {

    test.beforeEach(async ({page})=>{
        await page.goto('/');
    });

    test('Remove item', async({homePage, cartPage})=>{
        await homePage.ClickOnItem();
        await homePage.ChooseSize(0);
        await homePage.ChooseColor(0);
        await homePage.ClckOnAddCart();
        await cartPage.clickOnCart();
        await cartPage.clickOnRemove();
        await cartPage.confirmRemove();
        await expect(cartPage.messageConfirm).toContainText('You have no items in your shopping cart.');
    })
});