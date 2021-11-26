import { Given, Then, When } from "@wdio/cucumber-framework";

Given(/^I am on the ProtoCommerce home page$/, async () => {
    await browser.url("https://rahulshettyacademy.com/angularpractice/")
    browser.maximizeWindow();
});

Then(/^I should see a header text \"([^\"]*)\"$/, async (HeaderText) => {
    let header = $("//h1")
    await expect(header).toHaveText(HeaderText);
});

Then(/^I pass credentials for login$/, async () => {
    await $("//input[@name='name']").setValue('Poo');
    await $("//input[@name='email']").setValue('poo123@gmail.com')
    await $("//input[@id='exampleInputPassword1']").setValue('Foo123@')

    let checkboxelement = $("#exampleCheck1")
    await checkboxelement.click()
    await expect(checkboxelement).toBeSelected()

    let selectbox = $("//select[@id='exampleFormControlSelect1']")
    await selectbox.click()
    await selectbox.selectByVisibleText('Female')

    await $("//input[@id='inlineRadio1']").click()
    await $("//input[@name='bday']").setValue('10-10-2020')

});

Then(/^I click submit for the submission of the details$/, async () => {
    await $(".btn.btn-success").click();
});

