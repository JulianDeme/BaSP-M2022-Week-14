class thankYouPage {

    //getters
    
    get headerLogo () { return $('#header_container > div.primary_header > div.header_label > div') }
    get headerHamburguer () { return $('#react-burger-menu-btn') }
    get headerShoppingCart () { return $('#shopping_cart_container > a') }
    get secondHeader () { return $('#header_container > div.header_secondary_container') }
    get secondHeaderPet () { return $('#header_container > div.header_secondary_container > div.peek') }
    get secondHeaderTitle () { return $('#header_container > div.header_secondary_container > span') }

    get thanksForOrder () { return $('#checkout_complete_container > h2') }
    get deliveryText () { return $('#checkout_complete_container > div') }
    get ponyLogo () { return $('#checkout_complete_container > img') }
    get backHomeBtn () { return $('#back-to-products') }

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
module.exports = new thankYouPage()