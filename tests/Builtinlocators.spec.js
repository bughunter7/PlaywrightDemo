import {test} from "@playwright/test";


test("To verify built inlocators ",async({page})=>{
    
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

   
    await page.pause();
})