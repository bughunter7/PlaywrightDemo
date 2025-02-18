class SuccessMessagePage{

    constructor(page){
        this.page = page;
        this.smessage = page.locator("div#common-success h1");
    }


    async getsuccessmessage(){
        return await this.smessage.textContent();;
    }

}

module.exports = {SuccessMessagePage};