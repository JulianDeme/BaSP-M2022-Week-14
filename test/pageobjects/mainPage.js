class mainPage {

    //getters

    get headerLogo () { return $('#header_container > div.primary_header > div.header_label > div') }
    get headerHamburguer () { return $('#react-burger-menu-btn') }
    get headerShoppingCart () { return $('#shopping_cart_container > a') }
    get secondHeader () { return $('#header_container > div.header_secondary_container') }
    get secondHeaderPet () { return $('#header_container > div.header_secondary_container > div.peek') }
    get secondHeaderTitle () { return $('#header_container > div.header_secondary_container > span') }

    get storeItemImg_00 () { return $('#item_0_img_link > img') }
    get storeItemImg_01 () { return $('#item_1_img_link > img') }
    get storeItemImg_02 () { return $('#item_2_img_link > img') }
    get storeItemImg_03 () { return $('#item_3_img_link > img') }
    get storeItemImg_04 () { return $('#item_4_img_link > img') }
    get storeItemImg_05 () { return $('#item_5_img_link > img') }

    get storeItemTitle_00 () { return $('#item_0_title_link > div') }
    get storeItemTitle_01 () { return $('#item_1_title_link > div') }
    get storeItemTitle_02 () { return $('#item_2_title_link > div') }
    get storeItemTitle_03 () { return $('#item_3_title_link > div') }
    get storeItemTitle_04 () { return $('#item_4_title_link > div') }
    get storeItemTitle_05 () { return $('#item_5_title_link > div') }

    get storeItemTxt_00 () { return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.inventory_item_label > div') }
    get storeItemTxt_01 () { return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.inventory_item_label > div') }
    get storeItemTxt_02 () { return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.inventory_item_label > div') }
    get storeItemTxt_03 () { return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label > div') }
    get storeItemTxt_04 () { return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.inventory_item_label > div') }
    get storeItemTxt_05 () { return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.inventory_item_label > div') }

    get storeItemPrice_00 () { return $('#inventory_container > div > div:nth-child(2) > div.inventory_item_description > div.pricebar > div') }
    get storeItemPrice_01 () { return $('#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.pricebar > div') }
    get storeItemPrice_02 () { return $('#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.pricebar > div') }
    get storeItemPrice_03 () { return $('#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.pricebar > div') }
    get storeItemPrice_04 () { return $('#inventory_container > div > div:nth-child(1) > div.inventory_item_description > div.pricebar > div') }
    get storeItemPrice_05 () { return $('#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.pricebar > div') }

    get addBtnItem_00 () { return $('#add-to-cart-sauce-labs-bike-light') }
    get removeBtnItem_00 () { return $('#remove-sauce-labs-bike-light') }

    get addBtnItem_01 () { return $('#add-to-cart-sauce-labs-bolt-t-shirt') }
    get removeBtnItem_01 () { return $('#remove-sauce-labs-bolt-t-shirt') }

    get addBtnItem_02 () { return $('#add-to-cart-sauce-labs-onesie') }
    get removeBtnItem_02 () { return $('#remove-sauce-labs-onesie') }

    get addBtnItem_03 () { return $('#add-to-cart-test\.allthethings\(\)-t-shirt-\(red\)') }
    get removeBtnItem_03 () { return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)') }
    // get addBtnItem_03 () { return $('#add-to-cart-test.allthethings()-t-shirt-(red)') }
    // get removeBtnItem_03 () { return $('#remove-test.allthethings()-t-shirt-(red)') }
    // It doesn´t work in both cases.

    get addBtnItem_04 () { return $('#add-to-cart-sauce-labs-backpack') }
    get removeBtnItem_04 () { return $('#remove-sauce-labs-backpack') }

    get addBtnItem_05 () { return $('#add-to-cart-sauce-labs-fleece-jacket') }
    get removeBtnItem_05 () { return $('#remove-sauce-labs-fleece-jacket') }

    get footerContainer() { return $('#page_wrapper > footer') }
    get footerPet () { return $('#page_wrapper > footer > img') }
    get footerTw () { return $('#page_wrapper > footer > ul > li.social_twitter > a') }
    get footerFb () { return $('#page_wrapper > footer > ul > li.social_facebook > a') }
    get footerIn () { return $('#page_wrapper > footer > ul > li.social_linkedin > a') }
    get footeRights () { return $('#page_wrapper > footer > div') }

    get sidebarCross() { return $('#react-burger-cross-btn') }
    get sidebarInventory() { return $('#inventory_sidebar_link') }
    get sidebarAbout() { return $('#about_sidebar_link') }
    get sidebarLogOut() { return $('#logout_sidebar_link') }
    get sidebarReset() { return $('#reset_sidebar_link') }

    //Setters



    //metgods

    async sidebarHeaderHamburguer(){
        await  this.headerHamburguer.click();
        browser.pause(3000);
    };

    async sidebarMenuCross(){
        await  this.sidebarCross.click()
        browser.pause(3000);
    };

    async sidebarMenuAllItems(){
        await this.sidebarInventory.click()
        browser.pause(3000);
    };

    async sidebarMenuAbout(){
        await this.sidebarAbout.click()
        browser.pause(3000);
    };

    async sidebarMenuLogOut(){
        await this.sidebarLogOut.click()
        browser.pause(3000);
    };

    async sidebarMenuReset(){
        await this.sidebarReset.click()
        browser.pause(3000);
    };


    async clickAddBtnItem_00(){
       await this.addBtnItem_00.click();
        browser.pause(4000);
    };
    async clickRemoveBtnItem_00(){
        await this.removeBtnItem_00.click();
         browser.pause(4000);
     };

    async clickAddBtnItem_01(){
        await this.addBtnItem_01.click();
         browser.pause(4000);
     };
     async clickRemoveBtnItem_01(){
        await this.removeBtnItem_01.click();
         browser.pause(4000);
     };

     async clickAddBtnItem_02(){
        await this.addBtnItem_02.click();
         browser.pause(4000);
     };
     async clickRemoveBtnItem_02(){
        await this.removeBtnItem_02.click();
         browser.pause(4000);
     };

     async clickAddBtnItem_03(){
        await this.addBtnItem_01.click();
         browser.pause(4000);
     };
     async clickRemoveBtnItem_03(){
        await this.removeBtnItem_03.click();
         browser.pause(4000);
     };

     async clickAddBtnItem_04(){
        await this.addBtnItem_04.click();
         browser.pause(4000);
     };
     async clickRemoveBtnItem_04(){
        await this.removeBtnItem_04.click();
         browser.pause(4000);
     };

     async clickAddBtnItem_05(){
        await this.addBtnItem_05.click();
         browser.pause(4000);
     };
     async clickRemoveBtnItem_05(){
        await this.removeBtnItem_05.click();
         browser.pause(4000);
     };

     async clickHeaderShoppingCart(){
        await this.headerShoppingCart.click();
         browser.pause(4000);
     };




}
module.exports = new mainPage()