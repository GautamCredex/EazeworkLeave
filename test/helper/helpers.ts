class Helper {
  public get forceLoginButton() {
    return $(`(//input[contains(@value,'Force Login')])[1]`);
  }
  public get acceptCookies() {
    return $(`//input[contains(@value,'ACCEPT & CONTINUE')]`);
  }
  public async forceLogin() {
    if (await this.forceLoginButton.isDisplayed()) {
      (await this.forceLoginButton).waitForClickable({ timeout: 20000 });
      (await this.forceLoginButton).click();
    } else {
      console.log("No need to force login");
    }
  }

  public async acceptCookiesAndContinue() {
    await browser.pause(3000);
    if (await this.acceptCookies.isDisplayed()) {
      (await this.acceptCookies).waitForClickable({ timeout: 20000 });
      (await this.acceptCookies).click();
    } else {
      console.log("No need to accept cookies");
    }
  }
}

export default new Helper();
