import { type Locator, type Page } from '@playwright/test';

export class HomePage{

    readonly page: Page;
    readonly item: Locator;
    readonly size: Locator;
    readonly color: Locator;
    readonly addtocart: Locator;
    readonly messageItem:Locator;

    constructor(page: Page){
        this.page = page;
        this.item = page.getByRole('link', { name: 'Argus All-Weather Tank' }).first();
        this.size = page.locator("[class='swatch-option text']");
        this.color = page.locator("[class='swatch-option color']");
        this.addtocart = page.getByRole('button', { name: 'Add to Cart' });
        this.messageItem = page.locator('.page');
    }

    async ClickOnItem(){
        await this.item.click();
    }

    async ChooseSize(index: number){
        await this.size.nth(index).click();
    }

    async ChooseColor(index: number){
        await this.color.nth(index).click();
    }

    async ClckOnAddCart(){
        await this.addtocart.click();
    }
}