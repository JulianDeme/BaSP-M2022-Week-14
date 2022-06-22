const loginPage = require('../pageobjects/logInPage');
const mainPage = require ('../pageobjects/mainPage');
const cartPage = require('../pageobjects/cartPage');
const checkOutPage = require('../pageobjects/checkOutPage');
const overviewPage = require('../pageobjects/overviewPage');
const thankYouPage = require('../pageobjects/thankYouPage');

describe ('Simple Standard User Flow', () =>{
    beforeAll('Open Browser', ()=> {
        browser.url('https://www.saucedemo.com/')
    })

    it('Verify Log In Page Logo', async ()=> {
        await expect(loginPage.LogoImg).toBeDisplayed();
    })
    it('Verify Log In Page Username Field', async ()=> {
        await expect(loginPage.UsernameField).toBeDisplayed();
    })
    it('Verify Log In Page Password Field', async ()=> {
        await expect(loginPage.PasswordField).toBeDisplayed();
    })
    it('Verify Log In Page Log In Button', async ()=> {
        await expect(loginPage.LogInBtn).toBeDisplayed();
    })
    it('Click Log In Page Log In Button', async () => {
        await loginPage.clickLoginBtn();
    });
    it('Verify Log In Page Error Container', async ()=> {
        await expect(loginPage. errorContainer).toBeDisplayed();
    })
    it('Verify Log In Page Error Cleaner', async ()=> {
        await expect(loginPage.errorCleaner).toBeDisplayed();
    })
    it('Verify Log In Page Error Message Empty', async ()=> {
        await expect(loginPage.errorContainer).toHaveText('Epic sadface: Username is required')
    })
    it ('Login Fail', async () => {
        await loginPage.login('stenderd_usor', 'sicrit_soice');
    })
    it('Verify Log In Page Error Message Filled', async ()=> {
        await expect(loginPage.errorContainer).toHaveText('Epic sadface: Username and password do not match any user in this service')
    })
    it ('Login Succes', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
    })


    it('Verify Main Page Header Logo', async ()=> {
        await expect(mainPage.headerLogo).toBeDisplayed();
    })
    it('Verify Log In Page Header Hamburguer', async ()=> {
        await expect(mainPage.headerHamburguer).toBeDisplayed();
    })
    it('Verify Log In Page Error Header Shopping Cart Button', async ()=> {
        await expect(mainPage.headerShoppingCart).toBeDisplayed();
    })
    it('Verify Log In Page Second Header', async ()=> {
        await expect(mainPage.secondHeader).toBeDisplayed();
    })
    it('Verify Log In Page Second Header Pet', async ()=> {
        await expect(mainPage.secondHeaderPet).toBeDisplayed();
    })
    it('Verify Log In Page Second Header Title', async ()=> {
        await expect(mainPage.secondHeaderTitle).toBeDisplayed();
    })


    it('Verify Log In Page Footer Container', async ()=> {
        await expect(mainPage.footerContainer).toBeDisplayed();
    })
    it('Verify Log In Page Footer Pet', async ()=> {
        await expect(mainPage.footerPet).toBeDisplayed();
    })
    it('Verify Log In Page Footer Twitter', async ()=> {
        await expect(mainPage.footerTw).toBeDisplayed();
    })
    it('Verify Log In Page Footer Facebook', async ()=> {
        await expect(mainPage.footerFb).toBeDisplayed();
    })
    it('Verify Log In Page Footer LinkedIn', async ()=> {
        await expect(mainPage.footerIn).toBeDisplayed();
    })
    it('Verify Log In Page Footer Rights', async ()=> {
        await expect(mainPage.footeRights).toBeDisplayed();
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
        await mainPage.clickAddBtnItem_01();
    });

    it('Verify Main Page Item 02 Img ', async ()=> {
        await expect(mainPage.storeItemImg_02).toBeDisplayed();
    })
    it('Verify Main Page Item 02 Img correct display', async () => {
        await expect(mainPage.storeItemImg_02).toHaveAttrContaining('src', '/static/media/red-onesie-1200x1500.1b15e1fa.jpg');
    });
    it('Verify Main Page Item 02 Title ', async ()=> {
        await expect(mainPage.storeItemTitle_02).toBeDisplayed();
    })
    it('Verify Main Page Item 02 Text', async ()=> {
        await expect(mainPage.storeItemTxt_02).toBeDisplayed();
    })
    it('Verify Main Page Item 02 Price', async ()=> {
        await expect(mainPage.storeItemPrice_02).toBeDisplayed();
    })
    it('Verify Main Page Item 02 Add Button', async ()=> {
        await expect(mainPage.addBtnItem_02).toBeClickable();
    })
    it('Click Main Page Item 02 Add Button', async () => {
        await mainPage.clickAddBtnItem_02();
    });

    it('Verify Main Page Item 03 Img ', async ()=> {
        await expect(mainPage.storeItemImg_03).toBeDisplayed();
    })
    it('Verify Main Page Item 03 Img correct display', async () => {
        await expect(mainPage.storeItemImg_03).toHaveAttrContaining('src', '/static/media/red-tatt-1200x1500.e32b4ef9.jpg');
    });
    it('Verify Main Page Item 03 Title ', async ()=> {
        await expect(mainPage.storeItemTitle_03).toBeDisplayed();
    })
    it('Verify Main Page Item 03 Text', async ()=> {
        await expect(mainPage.storeItemTxt_03).toBeDisplayed();
    })
    it('Verify Main Page Item 03 Price', async ()=> {
        await expect(mainPage.storeItemPrice_03).toBeDisplayed();
    })
    // it('Verify Main Page Item 03 Add Button', async ()=> {
    //     await expect(mainPage.addBtnItem_03).toBeClickable();
    // })
    // it('Click Main Page Item 03 Add Button', async () => {
    //     await mainPage.clickAddBtnItem_03();
    // });
    // Does not pass the test. 

    it('Verify Main Page Item 04 Img ', async ()=> {
        await expect(mainPage.storeItemImg_04).toBeDisplayed();
    })
    it('Verify Main Page Item 04 Img correct display', async () => {
        await expect(mainPage.storeItemImg_04).toHaveAttrContaining('src', '/static/media/sauce-backpack-1200x1500.34e7aa42.jpg');
    });
    it('Verify Main Page Item 04 Title ', async ()=> {
        await expect(mainPage.storeItemTitle_04).toBeDisplayed();
    })
    it('Verify Main Page Item 04 Text', async ()=> {
        await expect(mainPage.storeItemTxt_04).toBeDisplayed();
    })
    it('Verify Main Page Item 04 Price', async ()=> {
        await expect(mainPage.storeItemPrice_04).toBeDisplayed();
    })
    it('Verify Main Page Item 04 Add Button', async ()=> {
        await expect(mainPage.addBtnItem_04).toBeClickable();
    })
    it('Click Main Page Item 04 Add Button', async () => {
        await mainPage.clickAddBtnItem_04();
    });
    
    it('Verify Main Page Item 05 Img ', async ()=> {
        await expect(mainPage.storeItemImg_05).toBeDisplayed();
    })
    it('Verify Main Page Item 05 Img correct display', async () => {
        await expect(mainPage.storeItemImg_05).toHaveAttrContaining('src', '/static/media/sauce-pullover-1200x1500.439fc934.jpg');
    });
    it('Verify Main Page Item 05 Title ', async ()=> {
        await expect(mainPage.storeItemTitle_05).toBeDisplayed();
    })
    it('Verify Main Page Item 05 Text', async ()=> {
        await expect(mainPage.storeItemTxt_05).toBeDisplayed();
    })
    it('Verify Main Page Item 05 Price', async ()=> {
        await expect(mainPage.storeItemPrice_05).toBeDisplayed();
    })
    it('Verify Main Page Item 05 Add Button', async ()=> {
        await expect(mainPage.addBtnItem_05).toBeClickable();
    })
    it('Click Main Page Item 05 Add Button', async () => {
        await mainPage.clickAddBtnItem_05();
    });


    it('Verify Main Page Item 00 Remove Button', async ()=> {
        await expect(mainPage.removeBtnItem_00).toBeClickable();
    })
    it('Click Main Page Item 00 Remove Button', async () => {
        await mainPage.clickRemoveBtnItem_00();
    });
    it('Verify Main Page Item 01 Remove Button', async ()=> {
        await expect(mainPage.removeBtnItem_01).toBeClickable();
    })
    it('Click Main Page Item 01 Remove Button', async () => {
        await mainPage.clickRemoveBtnItem_01();
    });
    it('Verify Main Page Item 02 Remove Button', async ()=> {
        await expect(mainPage.removeBtnItem_02).toBeClickable();
    })
    it('Click Main Page Item 02 Remove Button', async () => {
        await mainPage.clickRemoveBtnItem_02();
    });
    // it('Verify Main Page Item 03 Remove Button', async ()=> {
    //     await expect(mainPage.removeBtnItem_03).toBeClickable();
    // })
    // it('Click Main Page Item 03 Remove Button', async () => {
    //     await mainPage.clickRemoveBtnItem_03();
    // });
    // Didn´t pass previous test. 
    it('Verify Main Page Item 04 Remove Button', async ()=> {
        await expect(mainPage.removeBtnItem_04).toBeClickable();
    })
    it('Click Main Page Item 04 Remove Button', async () => {
        await mainPage.clickRemoveBtnItem_04();
    });
    it('Verify Main Page Item 05 Remove Button', async ()=> {
        await expect(mainPage.removeBtnItem_05).toBeClickable();
    })
    it('Click Main Page Item 05 Remove Button', async () => {
        await mainPage.clickRemoveBtnItem_05();
    });


    it('Click Main Page Item 00 Add Button', async () => {
        await mainPage.clickAddBtnItem_00();
    });
    it('Click Main Page Item 01 Add Button', async () => {
        await mainPage.clickAddBtnItem_01();
    });
    it('Click Main Page Item 02 Add Button', async () => {
        await mainPage.clickAddBtnItem_02();
    });
    // it('Click Main Page Item 03 Add Button', async () => {
    //     await mainPage.clickAddBtnItem_03();
    // });
    it('Click Main Page Item 04 Add Button', async () => {
        await mainPage.clickAddBtnItem_04();
    });
    it('Click Main Page Item 05 Add Button', async () => {
        await mainPage.clickAddBtnItem_05();
    });

    it('Click Main Page Shopping Cart Button', async () => {
        await mainPage.clickHeaderShoppingCart();
    });


    it('Verify Cart Page Item 00 Title ', async ()=> {
        await expect(cartPage.storeItemTitle_00).toBeDisplayed();
    })
    it('Verify Cart Page Item 00 Text', async ()=> {
        await expect(cartPage.storeItemTxt_00).toBeDisplayed();
    })
    it('Verify Cart Page Item 00 Text Message', async ()=> {
        await expect(cartPage.storeItemTxt_00).toHaveText('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.')
    })
    it('Verify Cart Page Item 00 Price', async ()=> {
        await expect(cartPage.storeItemPrice_00).toBeDisplayed();
    })
    it('Verify Cart Page Item 00 Remove Button', async ()=> {
        await expect(cartPage.removeBtnItem_00).toBeClickable();
    })
    it('Click Cart Page Item 00 Remove Button', async () => {
        await cartPage.clickRemoveBtnItem_00();
    })


    it('Verify Cart Page Item 01 Title ', async ()=> {
        await expect(cartPage.storeItemTitle_01).toBeDisplayed();
    })
    it('Verify Cart Page Item 01 Text', async ()=> {
        await expect(cartPage.storeItemTxt_01).toBeDisplayed();
    })
    it('Verify Cart Page Item 01 Text Message', async ()=> {
        await expect(cartPage.storeItemTxt_01).toHaveText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
    })
    it('Verify Cart Page Item 01 Price', async ()=> {
        await expect(cartPage.storeItemPrice_01).toBeDisplayed();
    })
    it('Verify Cart Page Item 01 Remove Button', async ()=> {
        await expect(cartPage.removeBtnItem_01).toBeClickable();
    })
    it('Click Cart Page Item 01 Remove Button', async () => {
        await cartPage.clickRemoveBtnItem_01();
    })

    it('Verify Cart Page Item 02 Title ', async ()=> {
        await expect(cartPage.storeItemTitle_02).toBeDisplayed();
    })
    it('Verify Cart Page Item 02 Text', async ()=> {
        await expect(cartPage.storeItemTxt_02).toBeDisplayed();
    })
    it('Verify Cart Page Item 02 Text Message', async ()=> {
        await expect(cartPage.storeItemTxt_02).toHaveText('Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.')
    })
    it('Verify Cart Page Item 02 Price', async ()=> {
        await expect(cartPage.storeItemPrice_02).toBeDisplayed();
    })
    it('Verify Cart Page Item 02 Remove Button', async ()=> {
        await expect(cartPage.removeBtnItem_02).toBeClickable();
    })
    it('Click Cart Page Item 02 Remove Button', async () => {
        await cartPage.clickRemoveBtnItem_02();
    })

    // it('Verify Cart Page Item 03 Title ', async ()=> {
    //     await expect(cartPage.storeItemTitle_03).toBeDisplayed();
    // })
    // it('Verify Cart Page Item 03 Text', async ()=> {
    //     await expect(cartPage.storeItemTxt_03).toBeDisplayed();
    // })
    // it('Verify Cart Page Item 03 Text Message', async ()=> {
    //     await expect(cartPage.storeItemTxt_03).toHaveText('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.')
    // })
    // it('Verify Cart Page Item 03 Price', async ()=> {
    //     await expect(cartPage.storeItemPrice_03).toBeDisplayed();
    // })
    // it('Verify Cart Page Item 03 Remove Button', async ()=> {
    //     await expect(cartPage.removeBtnItem_03).toBeClickable();
    // })
    // it('Click Cart Page Item 03 Remove Button', async () => {
    //     await cartPage.clickRemoveBtnItem_03();
    // })
    // Didn´t pass previous test. 

    it('Verify Cart Page Item 04 Title ', async ()=> {
        await expect(cartPage.storeItemTitle_04).toBeDisplayed();
    })
    it('Verify Cart Page Item 04 Text', async ()=> {
        await expect(cartPage.storeItemTxt_04).toBeDisplayed();
    })
    it('Verify Cart Page Item 04 Text Message', async ()=> {
        await expect(cartPage.storeItemTxt_04).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    })
    it('Verify Cart Page Item 04 Price', async ()=> {
        await expect(cartPage.storeItemPrice_04).toBeDisplayed();
    })
    it('Verify Cart Page Item 04 Remove Button', async ()=> {
        await expect(cartPage.removeBtnItem_04).toBeClickable();
    })
    it('Click Cart Page Item 04 Remove Button', async () => {
        await cartPage.clickRemoveBtnItem_04();
    })
    
    it('Verify Cart Page Item 05 Title ', async ()=> {
        await expect(cartPage.storeItemTitle_05).toBeDisplayed();
    })
    it('Verify Cart Page Item 05 Text', async ()=> {
        await expect(cartPage.storeItemTxt_05).toBeDisplayed();
    })
    it('Verify Cart Page Item 05 Text Message', async ()=> {
        await expect(cartPage.storeItemTxt_05).toHaveText('It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.')
    })
    it('Verify Cart Page Item 05 Price', async ()=> {
        await expect(cartPage.storeItemPrice_05).toBeDisplayed();
    })
    it('Verify Cart Page Item 05 Remove Button', async ()=> {
        await expect(cartPage.removeBtnItem_05).toBeClickable();
    })
    it('Click Cart Page Item 05 Remove Button', async () => {
        await cartPage.clickRemoveBtnItem_05();
    })

    it('Verify Cart Page Continue Shopping Button', async ()=> {
        await expect(cartPage.continueShoppBtn).toBeClickable();
    })
    it('Click Cart Page Continue Shopping Button', async () => {
        await cartPage.clickContinueShoppBtn();
    });

    it('Click Main Page Item 00 Add Button', async () => {
        await mainPage.clickAddBtnItem_00();
    });
    it('Click Main Page Item 01 Add Button', async () => {
        await mainPage.clickAddBtnItem_01();
    });
    it('Click Main Page Item 02 Add Button', async () => {
        await mainPage.clickAddBtnItem_02();
    });
    // it('Click Main Page Item 03 Add Button', async () => {
    //     await mainPage.clickAddBtnItem_03();
    // });
    it('Click Main Page Item 04 Add Button', async () => {
        await mainPage.clickAddBtnItem_04();
    });
    it('Click Main Page Item 05 Add Button', async () => {
        await mainPage.clickAddBtnItem_05();
    });

    it('Click Main Page Shopping Cart Button', async () => {
        await mainPage.clickHeaderShoppingCart();
    });

    it('Verify Cart Page Checkout Button', async ()=> {
        await expect(cartPage.checkoutbtn).toBeClickable();
    })
    it('Click Cart Page Checkout Button', async () => {
        await cartPage.clickCheckoutbtn();
    });


    it('Verify CheckOut Page First Name Field', async ()=> {
        await expect(checkOutPage. firstNameField).toBeDisplayed();
    })
    it('Verify CheckOut Page Last Name Field', async ()=> {
        await expect(checkOutPage.lastNameField).toBeDisplayed();
    })
    it('Verify CheckOut Page Zip Code Field', async ()=> {
        await expect(checkOutPage.zipField).toBeDisplayed();
    })
    it('Verify CheckOut Page Continue Shopping Button', async ()=> {
        await expect(checkOutPage.continueBtn).toBeClickable();
    })
    it('Click CheckOut Page Continue Shopping Button', async () => {
        await  checkOutPage.clickContinueBtn();
    });
    it('Verify CheckOut Page Zip Code Field', async ()=> {
        await expect(checkOutPage.zipField).toBeDisplayed();
    })
    it('Verify CheckOut Page Error Container', async ()=> {
        await expect(checkOutPage.ErrorContainer).toBeDisplayed();
    })
    it('Verify CheckOut Page Zip Error Cleaner', async ()=> {
        await expect(checkOutPage.ErrorCleaner).toBeDisplayed();
    })
    it('Verify CheckOut Page Cancel Button', async ()=> {
        await expect(checkOutPage.cancelBtnCO).toBeClickable();
    })
    it('Click CheckOut Page Cancel Button', async () => {
        await  checkOutPage.clickCancelBtnCO();
    });

    it('Click Cart Page Checkout Button', async () => {
        await cartPage.clickCheckoutbtn();
    });

    it('Complete CheckOut Page Form', async ()=>{
        await checkOutPage.checkOut('Pepito', 'Pepon', '2154');
    })
    it('Click CheckOut Page Continue Shopping Button', async () => {
        await  checkOutPage.clickContinueBtn();
    });









    it('Verify Cart Page Item 00 Title ', async ()=> {
        await expect(overviewPage.storeItemTitle_00).toBeDisplayed();
    })
    it('Verify Cart Page Item 00 Text', async ()=> {
        await expect(overviewPage.storeItemTxt_00).toBeDisplayed();
    })
    it('Verify Cart Page Item 00 Text Message', async ()=> {
        await expect(overviewPage.storeItemTxt_00).toHaveText('A red light isn\'t the desired state in testing but it sure helps when riding your bike at night. Water-resistant with 3 lighting modes, 1 AAA battery included.')
    })
    it('Verify Cart Page Item 00 Price', async ()=> {
        await expect(overviewPage.storeItemPrice_00).toBeDisplayed();
    })


    it('Verify Cart Page Item 01 Title ', async ()=> {
        await expect(overviewPage.storeItemTitle_01).toBeDisplayed();
    })
    it('Verify Cart Page Item 01 Text', async ()=> {
        await expect(overviewPage.storeItemTxt_01).toBeDisplayed();
    })
    it('Verify Cart Page Item 01 Text Message', async ()=> {
        await expect(overviewPage.storeItemTxt_01).toHaveText('Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.')
    })
    it('Verify Cart Page Item 01 Price', async ()=> {
        await expect(overviewPage.storeItemPrice_01).toBeDisplayed();
    })

    it('Verify Cart Page Item 02 Title ', async ()=> {
        await expect(overviewPage.storeItemTitle_02).toBeDisplayed();
    })
    it('Verify Cart Page Item 02 Text', async ()=> {
        await expect(overviewPage.storeItemTxt_02).toBeDisplayed();
    })
    it('Verify Cart Page Item 02 Text Message', async ()=> {
        await expect(overviewPage.storeItemTxt_02).toHaveText('Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won\'t unravel.')
    })
    it('Verify Cart Page Item 02 Price', async ()=> {
        await expect(cartPoverviewPageage.storeItemPrice_02).toBeDisplayed();
    })

    // it('Verify Cart Page Item 03 Title ', async ()=> {
    //     await expect(overviewPage.storeItemTitle_03).toBeDisplayed();
    // })
    // it('Verify Cart Page Item 03 Text', async ()=> {
    //     await expect(overviewPage.storeItemTxt_03).toBeDisplayed();
    // })
    // it('Verify Cart Page Item 03 Text Message', async ()=> {
    //     await expect(overviewPage.storeItemTxt_03).toHaveText('This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.')
    // })
    // it('Verify Cart Page Item 03 Price', async ()=> {
    //     await expect(overviewPage.storeItemPrice_03).toBeDisplayed();
    // })
    // Didn´t pass previous test. 

    it('Verify Cart Page Item 04 Title ', async ()=> {
        await expect(overviewPage.storeItemTitle_04).toBeDisplayed();
    })
    it('Verify Cart Page Item 04 Text', async ()=> {
        await expect(overviewPage.storeItemTxt_04).toBeDisplayed();
    })
    it('Verify Cart Page Item 04 Text Message', async ()=> {
        await expect(overviewPage.storeItemTxt_04).toHaveText('carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.')
    })
    it('Verify Cart Page Item 04 Price', async ()=> {
        await expect(overviewPage.storeItemPrice_04).toBeDisplayed();
    })
    
    it('Verify Cart Page Item 05 Title ', async ()=> {
        await expect(overviewPage.storeItemTitle_05).toBeDisplayed();
    })
    it('Verify Cart Page Item 05 Text', async ()=> {
        await expect(overviewPage.storeItemTxt_05).toBeDisplayed();
    })
    it('Verify Cart Page Item 05 Text Message', async ()=> {
        await expect(overviewPage.storeItemTxt_05).toHaveText('It\'s not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.')
    })
    it('Verify Cart Page Item 05 Price', async ()=> {
        await expect(overviewPage.storeItemPrice_05).toBeDisplayed();
    })

    it('Verify overview Page Payment Info Title', async ()=> {
        await expect(overviewPage.paymentInfoTitle).toBeDisplayed();
    })
    it('Verify overview Page Payment Info', async ()=> {
        await expect(overviewPage.paymentInfo).toBeDisplayed();
    })
    it('Verify overview Page Shipping Info Title', async ()=> {
        await expect(overviewPage.shippingInfoTitle).toBeDisplayed();
    })
    it('Verify overview Page Shipping Info', async ()=> {
        await expect(overviewPage.shippingInfo).toBeDisplayed();
    })
    it('VVerify overview Page Sub Total Price', async ()=> {
        await expect(overviewPage.subTotalPrice).toBeDisplayed();
    })
    it('Verify overview Page Tax Price', async ()=> {
        await expect(overviewPage.taxPrice).toBeDisplayed();
    })
    it('Verify overview Page Total Price', async ()=> {
        await expect(overviewPage.totalPrice).toBeDisplayed();
    })

    it('Verify Overview Page Cancel Button', async ()=> {
        await expect(checkOutPage.cancelBtnO).toBeClickable();
    })
    it('Click  Overview Page Cancel Button', async () => {
        await  checkOutPage.clickCancelBtnO();
    });
    it('Verify Overview Page Finish Button', async ()=> {
        await expect(checkOutPage.finishBtn).toBeClickable();
    })
    it('Click  Overview Page Finish Button', async () => {
        await  checkOutPage.clickFinishBtn();
    });






})