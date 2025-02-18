class LoginPage{

    constructor(page){

        this.page = page;
        this.hvrele = page.locator("i.icon.fas.fa-user+div>span");
        this.loginoption = page.locator("ul[class*='show'] a[href*='login']");
        this.inputemail = page.locator("#input-email");
        this.password = page.locator("#input-password");
        this.loginbutton = page.locator("input[value='Login']");
        this.editbutton = page.locator("div[class*='list'] a[href*='edit']");
        

    }

    async valiuserlogin(username,password){

        await this.hvrele.hover();
        await this.loginoption.click();
        await this.inputemail.fill(username);
        await this.password.fill(password);
        await this.loginbutton.click();


    }
    async navigatetoeditbutton(){

        await this.editbutton.click();

    }

    async getuserdetails(){

        return this.inputemail.inputValue();

    }




}

module.exports ={LoginPage};