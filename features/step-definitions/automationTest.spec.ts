import { Given, When, Then } from "@wdio/cucumber-framework";
import randomdata from "faker"
import automationCartTest from "../pageobjects/automationCartTest";
//import faker from "faker"
import signInTesting from "../pageobjects/automationTest";
import signup from "../testdata/signup.json"

Given(/^I am in the online clothing home page$/, async () => {
    await signInTesting.pageurl();
    browser.maximizeWindow()
});

When(/^I click on sign in element$/, async () => {
    await signInTesting.signInElement.click();
});
Then(/^I validate the sign in page header$/, async () => {
    await expect(signInTesting.headerElement).toHaveTextContaining("AUTHENTICATION")
});

When(/^I enter a random mail Id and click for submission$/, async () => {
    await signInTesting.mailId.setValue(randomdata.internet.email());
    await signInTesting.createaccountbtn.click();
});

Then(/^I check page header for validation with text \"([^\"]*)\"$/, async (createAccountText) => {
    await expect(signInTesting.accountHeaderElement).toHaveTextContaining(createAccountText)
});

When(/^I start to fill the required credentials for registration$/, async () => {
    await signInTesting.fName.setValue(signup.firstname)
    await signInTesting.lName.setValue(signup.lastname)
    await signInTesting.password.setValue(signup.password)
    await signInTesting.dobdate.selectByAttribute("value", signup.DateOfBirth.day)
    await signInTesting.dobmonth.selectByAttribute("value", signup.DateOfBirth.month)
    await signInTesting.dobyear.selectByAttribute("value", signup.DateOfBirth.year)
    await signInTesting.checkedbox.click()
    await signInTesting.firstName.setValue(signup.firstname)
    await signInTesting.lastName.setValue(signup.lastname)
    await signInTesting.companyvalue.setValue('Puma')
    await signInTesting.address1.setValue(signup.Address.address1)
    await signInTesting.address2.setValue(signup.Address.address2)
    await signInTesting.city.setValue(signup.Address.city)
    await signInTesting.state.selectByAttribute("value", signup.Address.State)
    await signInTesting.zipCode.setValue(signup.Address.Zipcode)
    await signInTesting.country.selectByAttribute("value", signup.Address.Country)
    await signInTesting.phoneNumber.setValue(signup.Address.Mobile)
    await signInTesting.addressAlias.setValue(signup.Address.AlisaAddress)
});

When(/^I click on Register for account creation$/, async () => {
    await signInTesting.registerbtn.click()

});

Then(/^I should see header text as \"([^\"]*)\" for validation$/, async (myaccount) => {
    await expect(signInTesting.headtext).toHaveTextContaining(myaccount)
});


Given(/^I am in clothing selection page$/, async () => {
    await automationCartTest.selectionpage()
});

When(/^I enter into women selection$/, async () => {
    await automationCartTest.womenelement.click()
});

When(/^Adding product to the cart$/, async () => {
    // await automationCartTest.productContainer.waitForDisplayed()
    await automationCartTest.productContainer.scrollIntoView()
    await automationCartTest.productContainer.moveTo()
    await automationCartTest.productContainer.waitForClickable()
    await automationCartTest.addToCart.click()
});

Then(/^I validate wheather the product is added to cart$/, async () => {
    await expect(automationCartTest.cartValidate).toHaveText("Product successfully added to your shopping cart")
});
When(/^I proceed for checkout$/, async () => {
    await automationCartTest.proceedCart.click()
});

Then(/^I validate the page name containing \"([^\"]*)\"$/, async (shoppingcartsummary) => {
    await expect(automationCartTest.shoppingCartHeader).toHaveTextContaining(shoppingcartsummary)
});
When(/^I proceed for checkout in summary page$/, async () => {
    await automationCartTest.proceedSummary.click()
});
Then(/^I am to validating with delivery address header$/, async () => {
    await expect(automationCartTest.addressHeader).toHaveTextContaining("ADDRESSES")
});

When(/^I am clicking proceed for checkout$/, async () => {
    await automationCartTest.proceedAddress.click()
});

Then(/^I am validating header of the shipping page with \"([^\"]*)\"$/, async (shipping) => {
    await expect(automationCartTest.shippingHeader).toHaveTextContaining(shipping)
});
When(/^I click terms and conditions check box$/, async () => {
    await automationCartTest.checktnc.click()
});

Then(/^Again I proceed for checkout in shipping page$/, async () => {
    await automationCartTest.proceedShipping.click()
});

Then(/^I check for the page validation with header text$/, async () => {
    await expect(automationCartTest.pageValidation).toHaveTextContaining("PLEASE CHOOSE YOUR PAYMENT METHOD")
});
When(/^I choose payment option$/, async () => {
    await automationCartTest.paymentOption.click()
});

Then(/^I validate payment page header and$/, async () => {
    await expect(automationCartTest.paymentHeader).toHaveTextContaining("ORDER SUMMARY")
});

Then(/^I click on confirm my order in payment page$/, async () => {
    await automationCartTest.confirmOrderbtn.click()
});

Then(/^I validate the order confirmation page with header text \"([^\"]*)\"$/, async (orderconfirmation) => {
    await expect(automationCartTest.ConfirmOrdervalidation).toHaveTextContaining(orderconfirmation)
});




