import { type Locator, type Page } from '@playwright/test';

export class ShippingPage{

    readonly emailAddress: Locator;
    readonly firstName: Locator;
    readonly lastName: Locator;
    readonly company: Locator;
    readonly streetAdress: Locator;
    readonly city: Locator;
    readonly state: Locator;
    readonly zipCode: Locator;
    readonly country: Locator;
    readonly phoneNumber: Locator;
    readonly shippingMethods: Locator;
    readonly nextButton: Locator;
    readonly placeOrder: Locator;
    readonly finalMessage: Locator;
    readonly shippingAddressText: Locator;
    readonly paymentMethodText:Locator;

    constructor(page:Page){
        //this.emailAddress = page.locator('#customer-email');
        this.emailAddress = page.getByRole('textbox', { name: 'Email Address * Email Address' });
        //this.firstName = page.locator('#SNDNG5J');
        this.firstName = page.getByLabel('First Name');
        //this.lastName = page.locator('#HJMBHLE');
        this.lastName = page.getByLabel('Last Name');
        //this.company = page.locator('#CQDWOUP');
        this.company = page.getByLabel('Company');
        //this.streetAdress = page.locator('#C3FKFIO');
        this.streetAdress = page.getByLabel('Street Address: Line 1');
        //this.city = page.locator('#MHWIXJO');
        this.city = page.getByLabel('City');
        //this.state = page.locator('#QD2HHVL');
        //this.zipCode = page.locator('#WYQY4U8');
        this.zipCode = page.getByLabel('Zip/Postal Code');
        //this.country = page.locator('#X56DAQJ'); 
        this.country = page.getByLabel('Country');
        //this.phoneNumber = page.locator('#OU8DT6T');
        this.phoneNumber = page.getByLabel('Phone Number');
        //this.shippingMethods = page.locator("[class='radio']");
        this.shippingMethods = page.getByLabel('Fixed');
        //this.nextButton = page.locator("[class='button action continue primary']");
        this.nextButton = page.getByRole('button', { name: 'Next' });
        //this.placeOrder = page.locator("[class='action primary checkout']");
        this.placeOrder = page.getByRole('button', { name: 'Place Order' });
        this.finalMessage = page.locator('.base');
        this.shippingAddressText = page.getByText('Shipping Address');
        this.paymentMethodText = page.getByText('Payment Method', { exact: true });
    }

    async enterEmailAdress(emailaddress: string){
        await this.emailAddress.waitFor({state: 'visible', timeout: 20000});
        await this.emailAddress.fill(emailaddress);
    }

    async enterFirstName(firstname: string){
        await this.firstName.fill(firstname);
    }

    async enterLastName(lastname: string){
        await this.lastName.fill(lastname);
    }

    async enterCompany(company: string){
        await this.company.fill(company);
    }

    async enterStreetAddress(streetaddress: string){
        await this.streetAdress.fill(streetaddress);
    }

    async enterCity(city: string){
        await this.city.fill(city);
    }

    async enterState(state: string){
        await this.state.fill(state);
    }

    async enterZipCode(zipcode: string){
        await this.zipCode.fill(zipcode);
    }

    async chooseCountry(text: string){
        await this.country.selectOption(text);
    }

    async enterPhoneNumber(phonenumber: string){
        await this.phoneNumber.fill(phonenumber);
    }

    async clickOnNext(){
        await this.nextButton.click();
    }

    async clickOnPlaceOrder(){
        await this.placeOrder.waitFor({state: 'visible', timeout: 20000});
        await this.placeOrder.click();
    }

    async checkShippingMethods(){
        await this.shippingMethods.check({force: true});
    }
}