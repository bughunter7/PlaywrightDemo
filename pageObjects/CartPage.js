class CartPage{

    constructor(page){
        this.page = page;
        this.table = page.locator("table.table.table-bordered");
        this.chck =page.locator("a[class*='primary']:has-text('Checkout')")
        


    }

    async getproductname(){
        this.table = await this.table.nth(0);
        this.pname  =await this.table.locator("tbody td a").nth(1).textContent();
        console.log(this.pname);
    }

    async gotocheckout(){
        await this.chck.click();;
    }
}

module.exports = {CartPage};