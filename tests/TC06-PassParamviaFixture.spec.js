import { customtest } from "../utils/customfx";

customtest("To verify test data from fixture", async ({ testdatafororder, testdataforpayment }) => {
  console.log(`Username: ${testdatafororder.username}`);
  console.log(`Card Number: ${testdataforpayment.cardnumber}`);
});
