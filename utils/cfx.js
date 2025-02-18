// import {test as base } from "@playwright/test";

// base.extend({torder : async({},use)=>{
//     const tdata ={user : "testuser"};

//     await use(tdata);
// }})


import  { test as base} from "@playwright/test";


export const tdata  =base.extend({
    torder  : async({},use)=>{

        const tdata = {username  :"uname "};
        await use(tdata);
    },


    

});