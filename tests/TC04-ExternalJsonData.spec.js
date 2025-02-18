import { expect, test } from "@playwright/test";

import { POManager } from "../pageObjects/POManager";
import dataset from "../testdata/placeorder.json" assert { type: "json" };

test("To verify user is able to checkout with the products successfully", async ({
  page,
}) => {
  const pmanager = new POManager(page);
  let lp = pmanager.getLoginpage();
  let sp = pmanager.getSearchPage();
  let pp = pmanager.getProductdetailsPage();
  let cp = pmanager.getCartPage();
  let ckp = pmanager.getCheckoutPage();
  let sucp = pmanager.getSuccessmessagePage();

  await page.goto("https://ecommerce-playground.lambdatest.io/");



  const username = dataset.username;
  const password = dataset.password;

  await lp.valiuserlogin(username, password);

  await sp.Searchfortheproduct(dataset.productname);
  expect(await pp.verifyinstockstatus()).toBeVisible();
  await pp.addmyproducttocart();

  //cart page
  await cp.getproductname();

  await cp.gotocheckout();
  //checkout
  await ckp.proceedcheckout(dataset.firstname, dataset.lastname, dataset.addone, dataset.city, dataset.pincode);

  //verify success message from success page

  let smessage = await sucp.getsuccessmessage();
  console.log(smessage);
  smessage = smessage.trim();
  console.log(typeof smessage);
  expect(smessage).toBe(dataset.successmessage);
});

