import {expect, test} from  "@playwright/test"


test("To verify test info object test ",async({page} , testInfo)=>{

    await page.goto("https://www.google.com");
    console.log(`Running test: ${testInfo.title}`);
    console.log(`${testInfo.status}`);
    console.log(`${testInfo.duration}`)

    // Check if error exists before accessing it

    
  if (testInfo.error) {
    console.log(`Error message: ${testInfo.error.message}`);
  } else {
    console.log('No errors found in the test.');
  }


})