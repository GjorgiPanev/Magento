import { type Locator, type Page } from '@playwright/test';

export class CartPage{
    readonly cart: Locator;
    readonly remove:Locator;
    readonly confirm: Locator;
    readonly messageConfirm: Locator;

    constructor(page: Page){
        this.cart = page.locator('.action.showcart.active');
        this.remove = page.getByRole('link', { name: ' Remove' });
        this.confirm = page.getByRole('button', { name: 'OK' });
        this.messageConfirm = page.locator('#minicart-content-wrapper');
    }

    async clickOnCart(){
        await this.cart.click();
    }

    async clickOnRemove(){
        await this.remove.click()
    }

    async confirmRemove(){
        await this.confirm.click();
    }
}