import eazeworkPage from "../pageobjects/eazework.page.js";
// import credentails from "../data/crdentails.json" assert {type:"json"};
import params from '../params.ts';
describe('Feature: Leave Request Save in Draft', () => {
    const {corpUrl,base_url,username,pwd} = params;
    beforeEach(async () => {
        try {
            await eazeworkPage.openLoginPage(base_url);
        } catch (error) {
            console.error("Error during page navigation:", error);
        }
    });

    it('should save leave request in draft successfully', async () => {
        await eazeworkPage.logintoEazework(corpUrl,username,pwd);
        await eazeworkPage.verifyUserNameOnHomePage()
        await eazeworkPage.fillleaveRequest();
        await eazeworkPage.saveDraftBtn();
   
    });
});
