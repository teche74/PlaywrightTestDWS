import { test, expect } from "@playwright/test";

test('Demo Web Shop test' , async({ page }) =>{
    await page.goto("https://demowebshop.tricentis.com/");
    
    await page.click('a[href ="/login"]');

    await page.fill('#Email' , "tempraman54@gmail.com");

    await page.fill('#Password' , "23456789dfghjkl");


    await page.click('input[value="Log in"]');


    await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
})
