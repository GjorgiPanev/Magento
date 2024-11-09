import {test as base} from '@playwright/test'
import { HomePage } from '../tests/pages/add-item.page';
import { CreateAccountPage } from '../tests/pages/create-account.page';
import { CartPage } from '../tests/pages/cart.page';
import { ComparePage } from '../tests/pages/compare.page';
 
type MyFixtures = {
    homePage:HomePage
    createAccountPage:CreateAccountPage
    cartPage:CartPage
    comparePage:ComparePage
}
 
export const test = base.extend<MyFixtures>({
    homePage: async ({page}, use)=>{
        await use(new HomePage(page))
    },
 
    createAccountPage: async({page}, use)=>{
        await use(new CreateAccountPage(page))
    },

    cartPage: async({page}, use)=>{
        await use(new CartPage(page))
    },

    comparePage: async({page}, use)=>{
        await use(new ComparePage(page))
    }
})
 
export {expect} from '@playwright/test'