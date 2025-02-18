import {test} from "@playwright/test";
const fs = require('fs');;

test("To verify file upload and download ",async({page})=>{

    //Single upload
    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
    await page.setInputFiles("input[type='file']","customscreenshot/ele.png");

    await page.pause();

})

test("To verify multifileupload feature ",async({page})=>{

    await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

    await page.setInputFiles("input[type='file']",["customscreenshot/ele.png",
                                                    "customscreenshot/ss.png"
    ]);

    await page.pause();
})

test.only("To verify download of the files in Playwright", async ({ page }) => {
    await page.goto("https://www.learningcontainer.com/sample-pdf-files-for-testing/");
  
    const [download] = await Promise.all([
      page.waitForEvent("download"),
      page.locator("(//div[@class='w3eden'])[1]/descendant::a[contains(@class,'download')]").hover()
    ]);
  
    const filename = download.suggestedFilename();
    console.log("Downloaded File Name:", filename);

  
    const downloadPath = `downloads/${filename}`;
    await download.saveAs(downloadPath);
  
    if (fs.existsSync(downloadPath)) {
      console.log("File is verified.");
    } else {
      console.log("File is not verified.");
    }
  
    await page.pause();
  });