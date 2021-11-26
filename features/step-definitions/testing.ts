import { Given, When } from "@cucumber/cucumber";
import { Then } from "@wdio/cucumber-framework";

Given("I am on the Automation Demo register page", async ()=> {
   await browser.url("http://demo.automationtesting.in/Register.html");
   await browser.maximizeWindow()
})

Then("I should see a header text {string}", async (headertxt) => {
  
   let headerElement = $('//*[@id="header"]/div/div/div/div[2]/h1')
   expect(await headerElement).toHaveText(headertxt)
})