import { Given, When, Then } from "@wdio/cucumber-framework";
import randomdata from "faker"
//import faker from "faker"
import signInTesting from "../pageobjects/signInTesting";
import signup from "../testdata/signup.json"

Given(/^I am in the online clothing home page$/, async () => {
    await signInTesting.pageurl();
});

When(/^I click on sign in element and it navigates to create an account page$/, async () => {
    await signInTesting.signInElement.click();
});
When(/^I validate the sign in page header$/, async () => {
    await expect(signInTesting.headerElement).toHaveTextContaining("AUTHENTICATION")
});

When(/^I enter a random mail Id$/, async () => {
    await signInTesting.mailId.setValue(randomdata.internet.email());
});

Then(/^I click on create an account for submission$/, async () => {
    await signInTesting.createaccountbtn.click();
});

Given(/^I am in the account creation page$/, async () => {
    await signInTesting.accounturl()
});
When(/^I check page header for validation$/, async () => {
    await expect(signInTesting.accountHeaderElement).toHaveTextContaining("CREATE AN ACCOUNT")
})

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
    // await signInTesting.state.click()
    // await signInTesting.state.selectByVisibleText('New York')
    await signInTesting.zipCode.setValue(signup.Address.Zipcode)
    await signInTesting.country.selectByAttribute("value", signup.Address.Country)
    // await signInTesting.country.click()
    // await signInTesting.country.selectByVisibleText('United States')
    await signInTesting.phoneNumber.setValue(signup.Address.Mobile)
    await signInTesting.addressAlias.setValue(signup.Address.AlisaAddress)
});

Then(/^I click on Register for account creation$/, async () => {
    await signInTesting.registerbtn.click()
    
});


