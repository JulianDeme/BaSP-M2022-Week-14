const loginPage = require('../pageobjects/logInPage');
const mainPage = require ('../pageobjects/mainPage');
const cartPage = require('../pageobjects/cartPage');
const checkOutPage = require('../pageobjects/checkOutPage');
const overviewPage = require('../pageobjects/overviewPage');
const thankYouPage = require('../pageobjects/thankYouPage');

describe ('Locked User Flow', () =>{
    beforeAll('Open Browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })

    it ('Login Succes', async () => {
        await loginPage.login('locked_out_user', 'secret_sauce');
    })

// Test gives a false positive when trying to Log In
})