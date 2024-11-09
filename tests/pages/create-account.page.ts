import { type Locator, type Page } from '@playwright/test';
import randomstring from 'randomstring';

export class CreateAccountPage{
    readonly page: Page;
    readonly createAccount1: Locator;
    readonly firstname: Locator;
    readonly lastname: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly createAccount2: Locator;
    readonly messageAccount: Locator;

    constructor(page: Page){
        this.page = page;
        this.createAccount1 = page.getByRole('link', { name: 'Create an Account' });
        this.firstname = page.locator('#firstname');
        this.lastname = page.locator('#lastname');
        this.email = page.locator('#email_address');
        this.password = page.locator('#password');
        this.confirmPassword = page.locator('#password-confirmation');
        this.createAccount2 = page.locator("[class='action submit primary']");
        this.messageAccount = page.locator('.page');
    }

    async generateRandomEmail(): Promise<string>{
        return `${randomstring.generate({ length: 10})}@example.com`;
    }

    async ClickOnCreateAccountLink(){
        await this.createAccount1.click();
    }

    async EnterFirstName(firstn){
        await this.firstname.fill(firstn);
    }

    async EnterLastName(lastn){
        await this.lastname.fill(lastn);
    }

    async EnterEmail(){
        const randomEmail = await this.generateRandomEmail();
        await this.email.fill(randomEmail);
    }

    async EnterPassword(password1){
        await this.password.fill(password1);
    }

    async ConfirmPassword(confirmpassword1){
        await this.confirmPassword.fill(confirmpassword1);
    }

    async ClickOnCreateAnAccount(){
        await this.createAccount2.click();
    }
}