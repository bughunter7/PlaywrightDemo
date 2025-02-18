class Checkout{

constructor(page){

    this.page = page;
    this.newaddress = page.locator("#input-payment-address-new");
    this.firstname = page.locator("#input-payment-firstname");
    this.lastname = page.locator("#input-payment-lastname");
    this.addressone = page.locator("#input-payment-address-1");
    this.city = page.locator("#input-payment-city");
    this.pincode =page.locator("#input-payment-postcode");

    this.agree = page.locator("//input[@id='input-agree']");
    this.save = page.locator("#button-save");
    this.confirm  = page.locator("button#button-confirm");

}

async proceedcheckout(fname , lname , addone , city ,pincode){

    await this.newaddress.click({force : true});
    await this.firstname.fill(fname);
    await this.lastname.fill(lname);
    await this.addressone.fill(addone);
    await this.city.fill(city);
    await this.pincode.fill(pincode);

    await this.agree.click({force:true});
    await this.save.click();
    await this.confirm.click();

}

}

module.exports = {Checkout};