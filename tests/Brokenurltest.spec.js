import { test } from "@playwright/test";

test("To verify broken link in playwright ", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  let table = await page.locator("div#gf-BIG table");
  let t2 = await table.locator("tbody td:nth-of-type(2)");
  let url = await t2.locator("li>a[href*='broken']").getAttribute("href");

  console.log(url);

  let response = await page.request.get(url);

  if (response.status() > 400) {
    console.log("Broken ");
  } else {
    console.log("Not Broken");
  }
});
