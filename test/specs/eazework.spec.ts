import eazeworkPage from "../pageobjects/eazework.page.js";
import credentails from "../data/crdentails.json" assert {type:"json"};

describe('Feature: Leave Request Save in Draft', () => {
    beforeEach(async () => {
        await browser.url("https://www.eazework.com/Login/");
        await browser.maximizeWindow();
    });

    it('should log in successfully', async () => {
       
         await eazeworkPage.logintoEazework("credex","Abhishek.gautam","#abhishek@123");
         console.log("I am Console file",credentails);  
        
       // await eazeworkPage.logintoEazework(credentails.url,credentails.username,credentails.password);
        await eazeworkPage.verifyUserNameOnHomePage()
        await eazeworkPage.fillleaveRequest();
        await eazeworkPage.saveDraftBtn();
   
    });
});
