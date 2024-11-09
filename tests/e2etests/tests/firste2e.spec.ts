import { test, expect } from '../fixtures/fixtures';

test.describe("Test Suite for e2e tests for Magento Page", () => {
    
    test.beforeEach(async ({page})=>{
        await page.goto('https://magento.softwaretestingboard.com');
    });

    test('Add one item and ship it', async({addItems, cartPage, shippingPage})=>{
        await addItems.clickOnItem(0);
        await addItems.chooseSize(1);
        await addItems.chooseColor(0);
        await addItems.clckOnAddCart();
        //await expect(addItems.messageItem).toHaveText(' You added '+ addItems.getTheTextFromTheItem() +' to your shopping cart');
        await cartPage.clickOnCart();
        await cartPage.clickOnProccedToCheckout();
        await shippingPage.enterEmailAdress('test@mail.com');
        await shippingPage.enterFirstName('Hello');
        await shippingPage.enterLastName('hello');
        await shippingPage.enterStreetAddress('address');
        await shippingPage.enterCity('city');
        await shippingPage.chooseCountry('MK');
        await shippingPage.enterZipCode('2300');
        await shippingPage.enterPhoneNumber('789789456');
        await shippingPage.checkShippingMethods();
        await shippingPage.clickOnNext();
        //await expect(shippingPage.paymentMethodText).toBeVisible();
        await shippingPage.clickOnPlaceOrder();
        await expect(shippingPage.finalMessage).toHaveText('Thank you for your purchase!');
    });
});