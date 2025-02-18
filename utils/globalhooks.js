import {test} from "@playwright/test";


const setuphooks =(()=>{

    test.beforeEach(()=>{
        console.log("Executed Before each test ")
    })
    
    
    test.afterEach(()=>{
        console.log("Executed After each test ")
    })
});



module.exports  ={setuphooks};