const loginPage = require('../pageobjects/logInPage');
const mainPage = require ('../pageobjects/mainPage');
const cartPage = require('../pageobjects/cartPage');
const checkOutPage = require('../pageobjects/checkOutPage');
const overviewPage = require('../pageobjects/overviewPage');
const thankYouPage = require('../pageobjects/thankYouPage');

describe ('Problem User Flow', () =>{
    beforeAll('Open Browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })

    it ('Login Succes', async () => {
        await loginPage.login('problem_user', 'secret_sauce');
    })


    it('Verify Main Page Item 00 Img ', async ()=> {
        await expect(mainPage.storeItemImg_00).toBeDisplayed();
    })
    it('Verify Main Page Item 00 Img correct display', async () => {
        await expect(mainPage.storeItemImg_00).toHaveAttrContaining('src', '/static/media/bike-light-1200x1500.a0c9caae.jpg');
    });
    it('Verify Main Page Item 00 Title ', async ()=> {
        await expect(mainPage.storeItemTitle_00).toBeDisplayed();
    })
    it('Verify Main Page Item 00 Text', async ()=> {
        await expect(mainPage.storeItemTxt_00).toBeDisplayed();
    })
    it('Verify Main Page Item 00 Price', async ()=> {
        await expect(mainPage.storeItemPrice_00).toBeDisplayed();
    })
    it('Verify Main Page Item 00 Add Button', async ()=> {
        await expect(mainPage.addBtnItem_00).toBeClickable();
    })
    it('Click Main Page Item 00 Add Button', async () => {
        await mainPage.clickAddBtnItem_00();
    });
    it('Verify Main Page Item 00 Remove Button', async ()=> {
        await expect(mainPage.removeBtnItem_00).toBeClickable();
    })



    it('Verify Main Page Item 01 Img ', async ()=> {
        await expect(mainPage.storeItemImg_01).toBeDisplayed();
    })
    it('Verify Main Page Item 01 Img correct display', async () => {
        await expect(mainPage.storeItemImg_01).toHaveAttrContaining('src', '/static/media/bolt-shirt-1200x1500.c0dae290.jpg');
    });
    it('Verify Main Page Item 01 Title ', async ()=> {
        await expect(mainPage.storeItemTitle_01).toBeDisplayed();
    })
    it('Verify Main Page Item 01 Text', async ()=> {
        await expect(mainPage.storeItemTxt_01).toBeDisplayed();
    })
    it('Verify Main Page Item 01 Price', async ()=> {
        await expect(mainPage.storeItemPrice_01).toBeDisplayed();
    })
    it('Verify Main Page Item 01 Add Button', async ()=> {
        await expect(mainPage.addBtnItem_01).toBeClickable();
    })
    it('Click Main Page Item 01 Add Button', async () => {
        await  mainPage.clickAddBtnItem_01();
    });
    it('Verify Main Page Item 01 Remove Button', async ()=> {
        await expect(mainPage.removeBtnItem_01).toBeClickable();
    })
    it('Click Main Page Item 01 Remove Button', async () => {
        await  mainPage.clickRemoveBtnItem_01();
    });


    it('Verify Main Page Shopping Cart Button', async ()=> {
        await expect(mainPage.headerShoppingCart).toBeClickable();
    })
    it('Click Main Page Shopping Cart Button', async () => {
        await mainPage.clickHeaderShoppingCart();
    });
    it('Verify Cart Page Item 00 Title ', async ()=> {
        await expect(cartPage.storeItemTitle_00).toBeDisplayed();
    })
    it('Verify Cart Page Item 00 Text', async ()=> {
        await expect(cartPage.storeItemTxt_00).toBeDisplayed();
    })
    it('Verify Cart Page Item 00 Price', async ()=> {
        await expect(cartPage.storeItemPrice_00).toBeDisplayed();
    })
    it('Verify Cart Page Item 00 Remove Button', async ()=> {
        await expect(cartPage.removeBtnItem_00).toBeClickable();
    })
    it('Click Cart Page Item 00 Remove Button', async () => {
        await  cartPage.clickRemoveBtnItem_00();
    });
    it('Verify Cart Page Continue Shopping Button', async ()=> {
        await expect(cartPage.continueShoppBtn).toBeClickable();
    })
    it('Click Cart Page Continue Shopping Button', async () => {
        await  cartPage.clickContinueShoppBtn();
    });
    it('Click Main Page Item 00 Add Button', async () => {
        await  mainPage.clickAddBtnItem_00();
    });
    it('Click Main Page Shopping Cart Button', async () => {
        await  mainPage.clickHeaderShoppingCart();
    });
    it('Verify Cart Page Checkout Button', async ()=> {
        await expect(cartPage.checkoutbtn).toBeClickable();
    })
    it('Click Cart Page Checkout Button', async () => {
        await  cartPage.clickCheckoutbtn();
    });


    it('Verify CheckOut Page First Name Field', async ()=> {
        await expect(checkOutPage. firstNameField).toBeDisplayed();
    })
    it('Verify CheckOut Page Last Name Field', async ()=> {
        await expect(checkOutPage.lastNameField).toBeDisplayed();
    })
    it('Verify CheckOut Page Zip Code Field', async ()=> {
        await expect(checkOutPage.zipField).toBeClickable();
    })
    it('Complete CheckOut Page Form', async ()=>{
        await checkOutPage.checkOut('Pepito', 'Pepon', '2154');
    })
    it('Verify CheckOut Page Continue Shopping Button', async ()=> {
        await expect(checkOutPage.continueBtn).toBeClickable();
    })
    it('Click CheckOut Page Continue Shopping Button', async () => {
        await  checkOutPage.clickContinueBtn();
    });

    // Test gives a false positive when trying to go to the Overview Page while field Last Name couldn´t be filled.

})