class overviewPage {

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

    get storeItemTxt_00 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.inventory_item_desc') }
    get storeItemTxt_01 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(6) > div.cart_item_label > div.inventory_item_desc') }
    get storeItemTxt_02 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(7) > div.cart_item_label > div.inventory_item_desc') }
    get storeItemTxt_03 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(8) > div.cart_item_label > div.inventory_item_desc') }
    get storeItemTxt_04 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.inventory_item_desc') }
    get storeItemTxt_05 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label > div.inventory_item_desc') }

    get storeItemPrice_00 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.item_pricebar > div') }
    get storeItemPrice_01 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(6) > div.cart_item_label > div.item_pricebar > div') }
    get storeItemPrice_02 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(7) > div.cart_item_label > div.item_pricebar > div') }
    get storeItemPrice_03 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(8) > div.cart_item_label > div.item_pricebar > div') }
    get storeItemPrice_04 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(3) > div.cart_item_label > div.item_pricebar > div') }
    get storeItemPrice_05 () { return $('#checkout_summary_container > div > div.cart_list > div:nth-child(5) > div.cart_item_label > div.item_pricebar > div') }

    get paymentInfoTitle () { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(1)') }
    get paymentInfo () { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(2)') }

    get shippingInfoTitle () { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(3)') }
    get shippingInfo () { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(4)') }

    get subTotalPrice () { return $('#checkout_summary_container > div > div.summary_info > div.summary_subtotal_label') }
    get taxPrice () { return $('#checkout_summary_container > div > div.summary_info > div.summary_tax_label') }
    get totalPrice () { return $('#checkout_summary_container > div > div.summary_info > div.summary_total_label') }

    get cancelBtnO () { return $('#cancel') }
    get finishBtn () { return $('#finish') }

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

}
module.exports = new overviewPage()