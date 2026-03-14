const { Given, When, Then,} = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { Register } = require("../../pages/register");

let register;

Given('I am on Demo WebShop register page' , async function(){
    register = new Register(this.page);

    register.openRegisterPage();
})

When('user enters valid personal details having gender as {string} , firstname as {string} , lastname as {string} and email as {string}' , async function(gender , firstname , lastname , email){
    if(gender.toLowerCase() === "male"){
        register.selectMale();
    }
    else{
        register.selectFemale();
    }

    register.fillFirstName(firstname);
    register.fillLastName(lastname);
    register.fillEmail(email);
})

When('user fills Your Password section with valid credentials for password as {string} and confirm password as {string} ' , async function(pass, confirmpass){
    register.fillPass(pass);
    register.fillConfirmPass(confpass);
})


When('clicks register button', async function(){
    register.clickRegister();
})

Then('user redirects to home page and asserts his email {string} as accountname' , async function(userEmail){
    await expect(this.page.getByRole('link', { name: userEmail })).toBeVisible();
})