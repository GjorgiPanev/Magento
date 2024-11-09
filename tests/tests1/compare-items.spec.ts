import { test, expect } from '../basefixtures';


test.describe("Test Suite for comparing items for Magento Page", () => {

    test.beforeEach(async ({page})=>{
        await page.goto('/');
    });

    test('Compare items', async({comparePage})=>{
        await comparePage.clickOnItem1();
        await comparePage.clickOnCompare();
        await comparePage.clickOnLogo();
        await comparePage.clickOnItem2();
        await comparePage.clickOnCompare();
        await comparePage.clickOnLogo();
        await comparePage.clickOnComparePage();
        const itemsCompare = await comparePage.items.count();
        await expect(itemsCompare).toEqual(2);
    });
});