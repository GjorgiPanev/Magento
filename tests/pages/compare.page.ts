import { type Locator, type Page } from '@playwright/test';


export class ComparePage{
    readonly item1:Locator;
    readonly item2:Locator;
    readonly compare:Locator;
    readonly logo:Locator;
    readonly comparepage:Locator;
    readonly items:Locator;


    constructor(page:Page){
        this.item1 = page.locator('ol li:first-child');
        this.item2 = page.locator('ol li:nth-child(2)');
        this.compare = page.locator('.product-addto-links a:last-child');
        this.logo = page.getByLabel('store logo');
        this.comparepage = page.locator("[class='action compare']");
        this.items = page.locator("[class='cell product info']");
    }

    async clickOnItem1(){
        await this.item1.click();
    }

    async clickOnItem2(){
        await this.item2.click();
    }

    async clickOnCompare(){
        await this.compare.click();
    }

    async clickOnLogo(){
        await this.logo.click();
    }

    async clickOnComparePage(){
        await this.comparepage.click();
    }
}