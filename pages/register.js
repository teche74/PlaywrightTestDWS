import {Base} from "./base"

class Register extends Base{
    constructor(page){
        super(page);


        this.maleGender = page.getByLabel('Male');
        this.femaleGender = page.getByLabel('Female');
        this.firstName = page.getByRole('textbox', { name: 'First name:' });
        this.lastName = page.getByRole('textbox', { name: 'Last name:' });
        this.email = page.getByRole('textbox', { name: 'Email:' });

        this.password = page.getByRole('textbox', { name: 'Password:' });
        this.confirmPassword = page.getByRole('textbox', { name: 'Confirm password:' });

        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.continueAfterRegister = page.getByRole('button', { name: 'Continue' });
    }

    async selectMale(){
        await this.maleGender.click();
    }

    async selectFemale(){
        await this.femaleGender.click();
    }

    async fillFirstName(firstname){
        await this.firstName.fill(firstname);
    }

    async fillLastName(lastname){
        await this.lastName.fill(lastname);
    }

    async fillEmail(email){
        await this.email.fill(email);
    }

    async fillPass(password){
        await this.password.fill(password);
    }


    async fillConfirmPass(password){
        await this.confirmPassword.fill(password);
    }

    async clickRegister(){
        await this.registerButton.click();
        await this.continueAfterRegister.click();

    }


    async openRegisterPage(){
        await this.navigate("https://demowebshop.tricentis.com/register");
    }
}