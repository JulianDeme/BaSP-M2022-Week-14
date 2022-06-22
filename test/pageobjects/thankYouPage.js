class thankYouPage {

    //getters

    get thanksForOrder () { return $('#checkout_complete_container > h2') }
    get deliveryText () { return $('#checkout_complete_container > div') }
    get ponyLogo () { return $('#checkout_complete_container > img') }
    get backHomeBtn () { return $('#back-to-products') }


    //Setters

    //methods

}
module.exports = new thankYouPage()