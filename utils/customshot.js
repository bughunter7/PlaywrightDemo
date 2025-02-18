class customshot{

    async myscreenshot(testname , page){

        let filename = `custom+${testname.replace(/\s+/g,"_")}.png`;
        await page.screenshot({path : filename , fullPage : false});

    }
}

export {customshot}
