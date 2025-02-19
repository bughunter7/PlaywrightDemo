import { test } from "@playwright/test";
import path from "path";


test("To verify auto login feature in playwright ", async ({ browser }) => {

    let context = await browser.newContext({
        storageState: "./auth.json"
    });

    let page = await context.newPage();

    await page.goto("https://rahulshettyacademy.com/client");

    await page.waitForTimeout(5000);

})
//npx playwright codegen --save-storage=auth.json
//npx playwright open --load-storage=auth.json https://rahulshettyacademy.com/client

