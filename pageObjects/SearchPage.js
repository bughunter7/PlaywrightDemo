class SearchPage{

    constructor(page){

      this.page = page;
      this.searchbar =  page.locator("div#main-header input[name='search']");
      this.searchbutton =  page.locator("button.type-text");
      this.productsgrid =  page.locator("div.product-thumb h4")

    }

    async Searchfortheproduct(product){

        await this.searchbar.fill(product);
        await this.searchbutton.click();
       
        await this.productsgrid.nth(1).click();
    }

}

module.exports = {SearchPage};