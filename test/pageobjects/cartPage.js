class cartPage {

    //getters

    get headerLogo () { return $('#header_container > div.primary_header > div.header_label > div') }
    get headerHamburguer () { return $('#react-burger-menu-btn') }
    get headerShoppingCart () { return $('#shopping_cart_container > a') }
    get secondHeader () { return $('#header_container > div.header_secondary_container') }
    get secondHeaderPet () { return $('#header_container > div.header_secondary_container > div.peek') }
    get secondHeaderTitle () { return $('#header_container > div.header_secondary_container > span') }

    get storeItemTitle_00 () { return $('#item_0_title_link > div') }
    get storeItemTitle_01 () { return $('#item_1_title_link > div') }
    get storeItemTitle_02 () { return $('#item_2_title_link > div') }
    get storeItemTitle_03 () { return $('#item_3_title_link > div') }
    get storeItemTitle_04 () { return $('#item_4_title_link > div') }
    get storeItemTitle_05 () { return $('#item_5_title_link > div') }

    get storeItemTxt_00 () { return $('.inventory_item_desc') }
    get storeItemTxt_01 () { return $('.inventory_item_desc') }
    get storeItemTxt_02 () { return $('.inventory_item_desc') }
    get storeItemTxt_03 () { return $('.inventory_item_desc') }
    get storeItemTxt_04 () { return $('.inventory_item_desc') }
    get storeItemTxt_05 () { return $('.inventory_item_desc') }

    get storeItemPrice_00 () { return $('.inventory_item_price') }
    get storeItemPrice_01 () { return $('.inventory_item_price') }
    get storeItemPrice_02 () { return $('.inventory_item_price') }
    get storeItemPrice_03 () { return $('.inventory_item_price') }
    get storeItemPrice_04 () { return $('.inventory_item_price') }
    get storeItemPrice_05 () { return $('.inventory_item_price') }

    get removeBtnItem_00 () { return $('#remove-sauce-labs-bike-light') }
    get removeBtnItem_01 () { return $('#remove-sauce-labs-bolt-t-shirt') }
    get removeBtnItem_02 () { return $('#remove-sauce-labs-onesie') }
    get removeBtnItem_03 () { return $('#remove-test\.allthethings\(\)-t-shirt-\(red\)') }
    get removeBtnItem_04 () { return $('#remove-sauce-labs-backpack') }
    get removeBtnItem_05 () { return $('#remove-sauce-labs-fleece-jacket') }

    get continueShoppBtn () { return $('#continue-shopping') }
    get checkoutbtn () { return $('#checkout') }

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

    //methods

     async clickRemoveBtnItem_00(){
         await this.removeBtnItem_00.click();
          browser.pause(4000);
      };

      async clickRemoveBtnItem_01(){
         await this.removeBtnItem_01.click();
          browser.pause(4000);
      };
 
      async clickRemoveBtnItem_02(){
         await this.removeBtnItem_02.click();
          browser.pause(4000);
      };
 
      async clickRemoveBtnItem_03(){
         await this.removeBtnItem_03.click();
          browser.pause(4000);
      };
 
      async clickRemoveBtnItem_04(){
         await this.removeBtnItem_04.click();
          browser.pause(4000);
      };
 
      async clickRemoveBtnItem_05(){
         await this.removeBtnItem_05.click();
          browser.pause(4000);
      };

      async clickContinueShoppBtn(){
        await this.continueShoppBtn.click();
         browser.pause(4000);
     };

     async clickCheckoutbtn(){
        await this.checkoutbtn.click();
         browser.pause(4000);
     };
 
}
module.exports = new cartPage()