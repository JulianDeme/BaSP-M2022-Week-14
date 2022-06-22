class loginPage {
    
    //getters
    get LogoImg() { return $('#root > div > div.login_logo')}
    get UsernameField() { return $('#user-name') }
    get PasswordField() { return $('#password') }
    get errorContainer() { return $('#login_button_container > div > form > div.error-message-container.error') }
    get errorCleaner() { return $('#login_button_container > div > form > div.error-message-container.error > h3 > button > svg') }
    get LogInBtn() { return $('#login-button') }
    get PetImg() { return $('#root > div > div.login_wrapper > div.login_wrapper-inner > div.bot_column')}

    //Setters

    async setUsername(username) {
        await this.UsernameField.setValue(username);
    }
    async setPassword(password) {
        await this.PasswordField.setValue(password);
    }

    //methods
    async login(username, password) {
        await this.setUsername(username);
        await this.setPassword(password);
        await this.LogInBtn.click()
    }

    async clickLoginBtn() {
        await this.LogInBtn.click()
    }
}
module.exports = new loginPage();