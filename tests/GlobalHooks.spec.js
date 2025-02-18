import {test} from "@playwright/test";

import {setuphooks} from "../utils/globalhooks";


setuphooks();

test("test",()=>{
    console.log("test 1 ")
})

test("test2 ",()=>{
    console.log("test 2")
})