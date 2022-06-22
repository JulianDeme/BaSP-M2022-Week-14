const loginPage = require('../pageobjects/logInPage');
const mainPage = require ('../pageobjects/mainPage');
// const cartPage = require('../pageobjects/cartPage');
// const checkoutPage = require('../pageobjects/checkOutPage');
// const overviewPage = require('../pageobjects/overviewPage');
// const thankYouPage = require('../pageobjects/thankYouPage');

describe ('Standard User Flow', () =>{
    beforeAll('Open Browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })
    it ('Login Succes', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
    })
    it('Verify Item 00 Img ', async ()=> {
        await expect(mainPage.storeItemImg_00).toBeDisplayed();
    })
    it('Verify Item 00 Title ', async ()=> {
        await expect(mainPage.storeItemTitle_00).toBeDisplayed();
    })
    it('Verify Item 00 Text', async ()=> {
        await expect(mainPage.storeItemTxt_00).toBeDisplayed();
    })
    it('Verify Item 00 Price', async ()=> {
        await expect(mainPage.storeItemPrice_00).toBeDisplayed();
    })
    it('Verify Add Button', async ()=> {
        await expect(mainPage.addBtnItem_00).toBeClickable();
    })
    it('Click Add Button', async () => {
        mainPage.clickAddBtnItem_00();
    });
})