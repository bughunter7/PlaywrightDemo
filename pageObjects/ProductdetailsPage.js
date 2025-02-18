class ProductdetailsPage
{
    constructor(page){

      this.page = page;
      this.instock =  page.locator("span[class*='badge-success']");
      this.addtocart =  page.locator("div#product-product button[title='Add to Cart']");
      this.cart =  page.locator("div.toast-body div.form-row a[href*='cart']");

    }

   async  verifyinstockstatus(){

        //await this.page.pause();
        await this.instock.waitFor();
        return await this.instock;
    }


   async  addmyproducttocart(){
        await this.addtocart.click();
        await this.cart.click();
        }


}

module.exports = {ProductdetailsPage}