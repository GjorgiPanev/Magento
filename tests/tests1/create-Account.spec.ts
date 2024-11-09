import { test, expect } from '../basefixtures';
import * as fs from 'fs';
const data = JSON.parse(fs.readFileSync('../Magento/tests/test-data/createaccountdata.json',"utf-8"));

test.describe("Test Suite for create a new account for Magento Page", () => {

    test.beforeEach(async ({page})=>{
        await page.goto('/');
    });

    test('Create an account',{tag: '@smoke'}, async({createAccountPage})=>{
        await createAccountPage.ClickOnCreateAccountLink();
        await createAccountPage.EnterFirstName(data.FirstName);
        await createAccountPage.EnterLastName(data.LastName);
        await createAccountPage.EnterEmail();
        await createAccountPage.EnterPassword(data.Password);
        await createAccountPage.ConfirmPassword(data.ConfirmPassword);
        await createAccountPage.ClickOnCreateAnAccount();
        await expect(createAccountPage.messageAccount).toHaveText('Thank you for registering with Main Website Store.');
    })
});