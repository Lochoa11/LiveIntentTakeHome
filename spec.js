describe('test LiveIntent page', function() {
  
  let expectedConditions = protractor.ExpectedConditions;
  let correctHomeURL = 'https://www.liveintent.com/';
  let correctURL = 'https://www.liveintent.com/get-in-touch/';
  browser.waitForAngularEnabled(false);

  // 1. open LiveIntent wait till current url is correct or terminate
  it('should open home page ', function() {
    browser.get(correctHomeURL);
    let rightURL = expectedConditions.urlIs(correctHomeURL);
    browser.wait(rightURL, 2000);
  });
  
  // 2. verify Get Started button click if we have the right button
  it('should click on Get Started', function() {
    let getStartedBtn = element(by.className('white-border-btn'));
    let btnIsPresent = expectedConditions.presenceOf(getStartedBtn);
    let textMatches = expectedConditions.textToBePresentInElement(getStartedBtn.getText(), 'Get Started');
    let isClickable = expectedConditions.elementToBeClickable(getStartedBtn);
    let conditions = expectedConditions.and(btnIsPresent, textMatches, isClickable);
    browser.wait(conditions, 2000);
    getStartedBtn.click();
  });

  // 4. verify the new URL is right 
  it('should verify URL is right', function(){
    let rightURL = expectedConditions.urlIs(correctURL);
    browser.wait(rightURL, 2000);
  });

  // 5. Verify the presence of Contact Us button and that it is the right button
  it('should confirm presense of Contact Us button', function(){
    let contactUsBtn = element(by.className('mktoButton'));
    let btnIsPresent = expectedConditions.presenceOf(contactUsBtn);
    let textMatches = expectedConditions.textToBePresentInElement(contactUsBtn, 'Contact Us');
    let conditions = expectedConditions.and(btnIsPresent, textMatches);
    browser.wait(conditions, 2000);
    expect(contactUsBtn.getTagName()).toBe('button');
  });
});
