import { type Locator, type Page } from '@playwright/test';

export class AddItems{

    readonly page: Page;
    readonly items: Locator;
    readonly size: Locator;
    readonly color: Locator;
    readonly addtocart: Locator;
    readonly messageItem:Locator;
    readonly nameOfItem:Locator;

    constructor(page: Page){
        this.page = page;
        this.items = page.locator('.product-item');
        this.size = page.locator("[class='swatch-option text']");
        this.color = page.locator("[class='swatch-option color']");
        this.addtocart = page.locator('#product-addtocart-button');
        this.messageItem = page.locator('.message-success');
        this.nameOfItem = page.locator('.product-info-main h1');
    }

    async clickOnItem(index:number){
        await this.items.nth(index).click();
    }

    async chooseSize(index: number){
        await this.size.nth(index).click();
    }

    async chooseColor(index: number){
        await this.color.nth(index).click();
    }

    async clckOnAddCart(){
        await this.addtocart.click();
    }

    async getTheTextFromTheItem(){
        return await this.nameOfItem.textContent();
    }
}