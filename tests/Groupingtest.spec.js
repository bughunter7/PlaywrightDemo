import {test} from "@playwright/test";


test.describe('Test GROUP 01 ',()=>{

    //Scoped Hooks

    test.beforeAll(()=>{
        console.log("I am executed first before all test starts ")
    })

    test.beforeEach(()=>{
        console.log("I am executed before each test ")
    })


    test.afterEach(()=>{
        console.log("I am executed after each test ")
    })
    
    test("test 1 ",()=>{
        console.log("test one ");
    })

    test("test 2 ",()=>{
        console.log("test two ");
    })


    test.afterAll(()=>{
        console.log("I am executed last after all tests ")
    })
})