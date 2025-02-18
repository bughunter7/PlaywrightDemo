import {expect, test} from "@playwright/test";
import {customshot} from "../utils/customshot";



test("To verify Screenshot feature in playwright",async({page})=>{

    let shot = new customshot();


    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    await shot.myscreenshot("sample test 01",page);

    await page.screenshot({path : "customscreenshot/ss.png" , fullPage:false});
})

test("Element Screenshot ",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

    let eleone =await page.locator("#dropdown-class-example");
    expect(false).toEqual(true);

    await eleone.screenshot({path : "customscreenshot/ele.png"  , fullPage : false});
})

test("Simple test ",async({page})=>{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.locator("#opentab").click();
})