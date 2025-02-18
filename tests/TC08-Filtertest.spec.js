
import {test} from "@playwright/test";

test("To verify filter logic ",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/client");

    await page.getByRole('textbox', { name: 'email@example.com' }).fill("aqa@test.com");
    await page.getByRole('textbox', { name: 'enter your passsword' }).fill("Aqatester@123");

    await page.getByRole('button', { name: 'Login' }).click();

    await page.locator("div.card").filter({has  : page.locator("h5") , hasText : "IPHONE 13 PRO"}).getByRole("button" , {name : "Add to Cart"}).click();


    await page.pause();
    
})