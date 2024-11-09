import { type Locator, type Page } from '@playwright/test';

export class CartPage{
    readonly cart: Locator;
    readonly checkout: Locator;
    readonly numberInCart:Locator;


    constructor(page: Page){
        this.cart = page.locator('.action.showcart');
        this.checkout = page.locator('#top-cart-btn-checkout');
        this.numberInCart = page.locator('.counter-number');
    }

    async clickOnCart(){
        await this.numberInCart.waitFor({state: 'visible'});
        await this.cart.click();
    }

    async clickOnProccedToCheckout(){
        //await this.numberInCart.waitFor({state: 'visible'});
        await this.checkout.click();
    }
}