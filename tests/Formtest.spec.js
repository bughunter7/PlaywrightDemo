import { test } from "@playwright/test";
import { Console } from "console";
import { title } from "process";

test("To verify form data ", async ({ page }) => {
  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php"
  );
  await page.locator("input#name").fill("tsetusername");
  await page.locator("input#email").fill("fssdf@sdfds.com");
  await page.locator("input#gender").check();
  await page.locator("#mobile").fill("123456789");
  await page.locator("#subjects").fill("testsub");

  await page.locator("input[type='checkbox']").nth(1).check();

  let fileUpload = await page.locator("input[type='file']");

  await page.setInputFiles("input[type='file']", ["customscreenshot/ele.png"]);

  //await page.pause();
});

test("To handle nested frames ", async ({ page }) => {
  await page.goto("https://ui.vision/demo/webtest/frames/");
  let f3 = await page.frameLocator("frame[src='frame_3.html']");

  let nframe = await f3.frameLocator(
    "iframe[src*='https://docs.google.com/forms/d/1yfUq-GO9BEssafd6TvHhf0D6QLDVG3q5InwNE2FFFFQ/viewform?embedded=true']"
  );

  await nframe.locator("div#i9").click();

  f3.locator("input[name='mytext3']").fill("test test ");

  console.log(await page.url());
  //await page.pause();
});

test("To handle multiple windows Simple way ", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();
  await page.goto("https://the-internet.herokuapp.com/windows");

  let [page2] = await Promise.all([
    context.waitForEvent("page"),
    page.locator("a[href*='windows']").click(),
  ]);

  console.log(await page2.url());
});

test("To handle multiple windows myway ", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto("https://the-internet.herokuapp.com/windows");

  await page.locator("a[href*='windows']").click();
  await page.waitForTimeout(2000);

  let multiplepages = await context.pages();

  for (let page of multiplepages) {
    let title = await page.title();

    if (title.includes("New")) {
      let h3 = await page.locator("h3").textContent();
      // await page.bringToFront();
      console.log(h3);
    }
  }

  console.log(await page.title());

  await page.locator("a[href*='windows']").click();
  await page.pause();
});

test("To handle multi window message test", async ({ browser }) => {
  let context = await browser.newContext();
  let page = await context.newPage();

  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/browser-windows.php"
  );

  await page.locator("div.container h1+button+button+button").click();

  await page.waitForTimeout(2000);

  let mtabs = await context.pages();

  for (let tab of mtabs) {
    let title = await tab.title();

    if (title.includes("Tables")) {
      await tab.bringToFront();

      let txt = await tab.locator("div.container>div").textContent();
      console.log(txt);
    } else {
      console.log("Error occured ");
    }
  }

  await page.bringToFront();
  console.log(await page.title());
  await page.pause();
});

test("To verify alert handling ", async ({ page }) => {
  await page.goto(
    "https://www.tutorialspoint.com/selenium/practice/alerts.php"
  );

  await page.on("dialog", (dialog) => dialog.accept());

  await page
    .locator("div.d-flex.justify-content-between.mt-4>button")
    .nth(0)
    .click();

  await page.pause();
});

test("To verify prompt alert test ", async ({ page }) => {
  await page.goto(
    "https://www.hyrtutorials.com/p/alertsdemo.html#google_vignette"
  );

  //   page.on("dialog", (dialog) => dialog.accept("shubham"));

  // page.on("dialog", async (dialog) => {
  //   console.log(dialog.message());
  //   await dialog.accept("shubham");
  // });
  // await page.locator("button#promptBox").click();

 
});

test("To verify multiple upload ", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  await page.setInputFiles("input[type='file']", [
    "customscreenshot/ele.png",
    "customscreenshot/ss.png",
  ]);
});
