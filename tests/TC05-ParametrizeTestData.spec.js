import {test} from "@playwright/test";
const dataset = JSON.parse(JSON.stringify(require("../testdata/placeorder.json")));



for(const  data of dataset){

   test(`To data check ${data.username}`,async({page})=>{

    console.log(data.username);
   })

}

    


