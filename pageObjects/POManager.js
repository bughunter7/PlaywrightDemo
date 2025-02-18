import { LoginPage } from "./LoginPage";
import { ProductdetailsPage } from "./ProductdetailsPage";
import { SearchPage } from "./SearchPage";
import { CartPage } from "./CartPage";
import { Checkout } from "./CheckoutPage";
import { SuccessMessagePage } from "./SuccessMessagePage";




class POManager{

    constructor(page){

       
        this.LoginPage = new LoginPage(page);
        this.ProductdetailsPage =new ProductdetailsPage(page);
        this.SearchPage = new SearchPage(page);
        this.CartPage = new CartPage(page);
        this.Checkout = new Checkout(page);
        this.SuccessMessagePage = new SuccessMessagePage(page);

    }

    getLoginpage(){
        return this.LoginPage;
    }

    getProductdetailsPage(){
        return this.ProductdetailsPage;
    }

    getSearchPage(){
        return this.SearchPage;
    }

    getCartPage(){
        return this.CartPage;
    }

    getCheckoutPage(){
        return this.Checkout;
    }

    getSuccessmessagePage(){
        return this.SuccessMessagePage;

    }
}

module.exports={POManager};