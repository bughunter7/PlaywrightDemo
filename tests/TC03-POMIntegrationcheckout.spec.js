import { expect, test } from "@playwright/test";

import {POManager} from "../pageObjects/POManager";

test("To verify user is able to checkout with the products successfully", async ({
  page,
}) => {
  
    const pmanager = new POManager(page);
    let lp = pmanager.getLoginpage();
    let sp =pmanager.getSearchPage();
    let pp = pmanager.getProductdetailsPage();
    let cp = pmanager.getCartPage();
    let ckp = pmanager.getCheckoutPage();
    let sucp =pmanager.getSuccessmessagePage();


  await page.goto("https://ecommerce-playground.lambdatest.io/");

  const username = "pwfinal@test.com";
  const password = "Test@#6969";

  await lp.valiuserlogin(username, password);

  await sp.Searchfortheproduct("HTC");
  expect(await pp.verifyinstockstatus()).toBeVisible();
  await pp.addmyproducttocart();

  //cart page
  await cp.getproductname();

  
   await cp.gotocheckout();
  //checkout
  await ckp.proceedcheckout("tester", "lastnamer", "ad1", "mycity", "12345");

  //verify success message from success page

  let smessage = await sucp.getsuccessmessage();
  console.log(smessage);
  smessage = smessage.trim();
  console.log(typeof smessage);
  expect(smessage).toBe("Your order has been placed!");

  //await page.pause();

  //Quantity check assertions

  // let qno;

  // do{
  //     await page.locator("div#product-product button[data-spinner='up'] i").hover();
  //     await page.locator("div#product-product button[data-spinner='up'] i").click({force:true});;
  //     let qno = await page.locator("div#product-product input[name='quantity']").inputValue();
  //     await page.pause();
  //     console.log(qno);
  // }
  // while(qno=="2");

  // await page.pause();
});
