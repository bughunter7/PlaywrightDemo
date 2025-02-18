import { test as base } from "@playwright/test";

export const customtest = base.extend({
  testdatafororder: async ({}, use) => {
    const testData = {
      username: "pwfinal@test.com",
      password: "Test@#6969",
      productname: "HTC",
      firstname: "tester",
      lastname: "lastnamer",
      addone: "ad1",
      city: "mycity",
      pincode: "12345",
      successmessage: "Your order has been placed!"
    };
    await use(testData);
  },

  testdataforpayment: async ({}, use) => {
    const paymentData = {
      cardnumber: "4111 1111 1111 1111",
      expirydate: "12/25",
      cvv: "123",
      cardholdername: "John Doe"
    };
    await use(paymentData);
  }
});
