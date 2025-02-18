import { expect, test } from "@playwright/test";

test("To handle drpdown test ", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  let drpdwn = await page.locator("select#dropdown-class-example");

  await drpdwn.selectOption("option2");

  console.log(await drpdwn.inputValue());
  expect(await drpdwn.inputValue()).toBe("option2");

  await page.pause();
});

test.only("To handle multiselect dropdown option test ", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  let sdrp = await page.locator("#colors");

  await sdrp.selectOption(["Red", "Green"]);
  // Alternative method to get selected values
  const selectedValues = await page.evaluate(() => {
    const select = document.querySelector("#colors");
    return Array.from(select.selectedOptions).map(option => option.value);
  });

  console.log("Selected Options:", selectedValues);

  await page.pause();
});

