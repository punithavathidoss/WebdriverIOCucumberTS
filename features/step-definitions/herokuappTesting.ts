import { Given, Then, When } from "@cucumber/cucumber";

Given("I am on the landing page of Herokuapp", async () => {
    await browser.url("https://the-internet.herokuapp.com");
    browser.maximizeWindow();
})

Then("I should see a header text {string}", async (headertxt) => {
    let headerElement = $('.heading');
    await expect(headerElement).toHaveText(headertxt)
})

When(/^I click on checkbox menu$/, async () => {
    let checkbox = $("//a[text()='Checkboxes']");
    await checkbox.click();
});

Then(/^I should be navigated to checkbox page$/, async () => {
    let checkboxheader = $("//h3");
    await expect(checkboxheader).toBeDisplayed();
    await expect(browser).toHaveUrlContaining("checkboxes");
});

Then(/^I validate checkbox 2 is selected$/, async () => {
    let checkboxelement = $("*//*[@id='checkboxes']/input[2]");
    await expect(checkboxelement).toBeSelected()
});

When(/^I click on Disappearing element menu$/, async () => {
    let dElement = $("//a[text()='Disappearing Elements']");
    await dElement.click();
});

Then(/^I should be navigated to Disappearing element page$/, async () => {
    let Disappearingelement = $("//h3");
    await expect(Disappearingelement).toBeDisplayed();
    await expect(browser).toHaveUrlContaining("disappearing_elements");
});

Then(/^I click on home button to validate$/, async () => {
    let delement = $("//*[@id='content']/div/ul/li[1]/a")
    await delement.click();
});

Then("I click on drop down menu", async () => {
    let dd = $("//a[text()='Dropdown']");
    await dd.click();
})

Then(/^click on dropdown list$/, async () => {
    let selectbox = $('#dropdown')
    await selectbox.click()
    
});
Then(/^I select option 2 from the drop down list$/, async () => {
    let selectbox = $("//select[@id='dropdown']")
    await selectbox.selectByVisibleText('Option 2') 
});