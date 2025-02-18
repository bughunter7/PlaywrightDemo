import { test } from "@playwright/test";

test("To handle windows and tabs ( Traditional Simple method ) ", async ({
  browser,
}) => {
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/browser-windows.php"
  );

  let [page2] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "New Tab" }).click(),
  ]);

  console.log(await page2.locator("h1").nth(0).textContent());

  //await page.pause();
});

test ("To handle windows Dynamic method ", async ({browser}) => {
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/browser-windows.php"
  );

  await page.getByRole("button", { name: "New Tab" }).click(),

  await page.waitForTimeout(2000);

  let tabs  =   context.pages();
  let ogpage  = page;
  let targetTab ; 

  for(let tab of tabs){

        let title  = await tab.title();

        if(title.includes("Tables")){
            targetTab  = tab;
            await tab.bringToFront();
            break;
        }
  }

  if (targetTab) {
    // Perform actions on the target tab
    const headingText = await targetTab.locator("h1").nth(0).textContent();
    console.log(`Heading Text: ${headingText}`);
  } else {
    console.log("Target tab not found");
  }

  console.log(await page.title());


});
