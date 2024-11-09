import {test as base} from '@playwright/test';

import { AddItems } from '../pages/additems.page';
import { CartPage } from '../pages/cartt.page';
import { ShippingPage } from '../pages/shippin-information.page';

type Fixtures = {
    addItems:AddItems
    cartPage:CartPage
    shippingPage:ShippingPage
}

export const test = base.extend<Fixtures>({
    addItems: async ({page}, use)=>{
        await use(new AddItems(page))
    },
    cartPage: async ({page}, use)=>{
        await use(new CartPage(page))
    },
    shippingPage: async ({page}, use)=>{
        await use(new ShippingPage(page))
    }
})

export {expect} from '@playwright/test'