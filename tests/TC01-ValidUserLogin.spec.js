import { LoginPage } from "../pageObjects/LoginPage";
import {expect, test} from "@playwright/test";

test("To verify valid user is able to login into the application ",async({page})=>{



    let  lp = new LoginPage(page);
    await page.goto("https://ecommerce-playground.lambdatest.io/");

    const username = "pwfinal@test.com";
    const password = "Test@#6969";

    await lp.valiuserlogin(username ,password);
    await lp.navigatetoeditbutton();
    let actualusername =await lp.getuserdetails();

    expect(actualusername).toEqual(username);
    

})