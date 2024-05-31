import helper from "../helper/helpers.ts";
import Page from "./page.ts";

class eazeworkleavePage extends Page{
  public get corpUrl() {return $("//input[@id='txtCorpURL']");}
  get username() {return $("#txtLogin");}
  get password() {return $("#Password");}
  get btnLogin() {return $("#btnLogin");}
  public get appuserName() {return $(`//span[contains(text(),'Abhishek')]`);}
  get quickTaskDropdown() {return $(".dripicons-view-apps.noti-icon");}
  get leave_requestBtn() {return $('//li/a[@href="../ESS/leave_request.aspx?FromPage=MENU"]');}
  get leaverequestIsPresent() {return $("#lblTitle");}
  get selectleaveDropdown() {return $("#ddlLeaveType");}

  get startDateCalendarIcon() {return $("#spanStartDate .input-group-append .uil-calendar-alt");}
  get dateToSelect() {return $("//div[contains(@class, 'datepicker-days')]//td[@class='day' and text()='28']");}
  // fill End date
  get endDateSelect() {return $("#spanEndDateRow .input-group-append .uil-calendar-alt");}
  get endDateElement() {return $('//div[contains(@class, "datepicker-days")]//td[@class="day" and text()="30"]');}

  get draftIsSaved() {return $("#btnSave");}
  get draftSavedNotification() {return "//div[@data-notify='container' and contains(@class, 'alert-success') and contains(., 'Draft saved.')]";}
// Reports saved
  public get reports(){return $("//a[span[text()='Reports']]")}
  public get Attendance(){return $("//ul[@id='navReportView']/li[a[text()='Attendance ']]")};
  public get attendanceCalendarBtn() {return $("//div[@class='card-body']//a[@href='../ess/rptattcalendar.aspx']")};
  public get selectCompanyNameInDropdown() {return $('//*[@id="ddlCompanyName"]')};
  public get generateReport() {return $('//*[@id="btnSubmit"]')};
 public get statusActive() {return $('//span[@title="Active"]')};

  //login Eazework
  async openLoginPage(urlpath:any) {
    await browser.maximizeWindow();
    await browser.url(urlpath);
  }
  public async logintoEazework(url: any, username: any, password: any) {
    await this.corpUrl.waitForClickable({ timeout: 20000 });
    await this.corpUrl.setValue(url);

    await this.username.waitForDisplayed();
    await this.username.setValue(username);

    await this.password.waitForDisplayed();
    await this.password.setValue(password);

    await this.btnLogin.waitForClickable();
    await this.btnLogin.click();
    await helper.forceLogin();
  }
  public async verifyUserNameOnHomePage() {
    (await this.appuserName).waitForDisplayed({ timeout: 15000 });
    await expect((await this.appuserName).isDisplayed()).toBeTruthy();
    await helper.acceptCookiesAndContinue();
  }

  public async fillLeaveRequest() {
    (await this.quickTaskDropdown).waitForClickable();
    (await this.quickTaskDropdown).click();
    (await this.quickTaskDropdown).waitForDisplayed({ timeout: 2000 });
    (await this.leave_requestBtn).waitForClickable();
    (await this.leave_requestBtn).click();
    // await expect(this.leaverequestIsPresent).toBeDisplayed();
    //(await this.leaverequestIsPresent).waitForDisplayed({ timeout: 3000 });
    await (await this.selectleaveDropdown).waitForDisplayed({ timeout: 2000 });
    (await this.selectleaveDropdown).selectByVisibleText("Privilege Leave");
    // click calendar start Icon
    (await this.startDateCalendarIcon).waitForClickable();
    (await this.startDateCalendarIcon).click();
    (await this.startDateCalendarIcon).waitForDisplayed({ timeout: 2000 });
    (await this.dateToSelect).waitForClickable();
    (await this.dateToSelect).click();

    // fill end date
    (await this.endDateSelect).waitForClickable();
    (await this.endDateSelect).click();

    (await this.endDateElement).waitForClickable();
    (await this.endDateElement).click();
  }
  

   
  public async saveDraftBtn() {
    (await this.draftIsSaved).waitForClickable();
    (await this.draftIsSaved).click();
    // (await this.draftIsSaved).waitForDisplayed({ timeout: 500 });
    // await expect( this.draftSavedNotification).toBeDisplayed();
  }

  // Attendance Report Function
  public async generateAttendanceReport(){
    // click the Report sidebar
    (await this.reports).waitForClickable();
    (await this.reports).click();
    await (await this.Attendance).waitForClickable();
    await (await this.Attendance).click();
    //(await this.quickTaskDropdown).waitForDisplayed({ timeout: 1000 });

    // click Attendance Report body
    (await this.attendanceCalendarBtn).waitForClickable();
    (await this.attendanceCalendarBtn).click();
    (await this.attendanceCalendarBtn).waitForDisplayed({ timeout: 1000 });
    // select Company Name in Dropdown
    await (await this.selectCompanyNameInDropdown).waitForDisplayed();
    (await this.selectCompanyNameInDropdown).selectByVisibleText("Credex Technology");
    (await this.selectCompanyNameInDropdown).waitForDisplayed({ timeout: 2000 });
    // Generate Report Btn Click
    (await this.generateReport).waitForClickable();
    (await this.generateReport).waitForClickable();
    await expect((await this.statusActive).isDisplayed()).toBeTruthy();
 

  }


}

export default new eazeworkleavePage();
