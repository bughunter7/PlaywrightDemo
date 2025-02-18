import {expect, test} from "@playwright/test";

test("To verify ss test ",async({page})=>{

        await page.goto("https://www.google.com");

        await page.screenshot({path : "customscreenshot/yo.png" , fullPage : false});
        

})

test("To perform visual test using playwright ",async({page})=>{

    await page.goto("https://www.google.com");

     expect(await page.screenshot()).toMatchSnapshot('vt.png');

})

test.only("Assertions test ",async({page})=>{

    expect("value").toMatch("gdf");

    await expect(page).toHaveTitle("test");
    await expect(page).toHaveURL("fsdfdsfds");

    let ab = await page.locator("sfsd");
    await expect(ab).toBeVisible();
    await expect(ab).toBeEnabled();
    await expect(ab).toBeDisabled();
    await expect(ab).toContainText("fsdfsdf");
    await expect(ab).toHaveText("fgdfgdfg");
    await expect(ab).toHaveValue("sdfssdfsd");

    await expect(ab).toHaveAttribute(id,"fs");

    //negate assertions 
    await expect(ab).not.toHaveAttribute(id,"fs");

    //hard asswertions and soft assertions in playwright 


     await expect.soft(ab).toHaveAttribute(id,"fs");

     //options in playwright 
     await expect(ab).toBeVisible({timeout: 5000});

})