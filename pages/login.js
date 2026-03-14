const { Base } = require("./base");


class Login extends Base{
    constructor(page){
        super(page);
        
        this.email =  page.locator('#Email');
        this.password = page.locator('#Password');
        this.loginButton = page.getByRole('button', { name: 'Log in' });
        this.rememberMe = page.locator('#RememberMe');
        this.forgetPass = page.getByRole('link', { name: 'Forgot password?' });
    }


    async fillEmail(email){
        this.email.fill(email);
    }


    async fillPass(pass){
        this.password.fill(pass);
    }


    async clickLogin(){
        await this.loginButton.click();
    }


    async clickRememberMe(){
        await this.rememberMe.click();
    }


    async clickForgetPass(){
        await this.forgetPass.click();
    }


    async openLoginPage(){
        await this.navigate("https://demowebshop.tricentis.com/login");
    }
}


module.exports = { Login };