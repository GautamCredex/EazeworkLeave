import eazeworkPage from "../pageobjects/eazework.page.js";
import params from "../params.ts";

describe('feature Generate Attendance Report', () => {
    const {corpUrl,base_url,username,pwd} = params;
    beforeEach(async () => {
        try {
            await eazeworkPage.openLoginPage(base_url);
        } catch (error) {
            console.error("Error during page navigation:", error);
        }
    });
    it('Attendance Report should be valid', async() => {
        await eazeworkPage.logintoEazework(corpUrl,username,pwd);
        await eazeworkPage.verifyUserNameOnHomePage()
        await eazeworkPage.generateAttendanceReport();
    });
});