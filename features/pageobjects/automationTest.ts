class SignInTesting {

    async pageurl() { await browser.url("http://automationpractice.com/index.php") }
    get signInElement() { return $(".login") }
    get headerElement() { return $(".page-heading") }
    get mailId() { return $('//input[@id="email_create"]') }
    get createaccountbtn() { return $('//*[@name="SubmitCreate"]') }

    async accounturl() { await browser.url("http://automationpractice.com/index.php?controller=authentication&back=my-account#account-creation") }
    get accountHeaderElement() { return $("//h1[text()='Create an account']") }
    get genderradio() { return $('//input[@id="id_gender2"]') }
    get fName() { return $('//input[@id="customer_firstname"]') }
    get lName() { return $('//input[@id="customer_lastname"]') }
    get password() { return $('//input[@id="passwd"]') }
    get dobdate() { return $('#days') }
    get dobmonth() { return $('#months') }
    get dobyear() { return $('#years') }
    get checkedbox() { return $('//input[@id="optin"]') }
    get firstName() { return $('//input[@id="firstname"]') }
    get lastName() { return $('//input[@id="lastname"]') }
    get companyvalue() { return $('//input[@id="company"]') }
    get address1() { return $('//input[@name="address1"]') }
    get address2() { return $('//input[@name="address2"]') }
    get city() { return $('//input[@name="city"]') }
    get state() { return $('//select[@name="id_state"]') }
    get zipCode() { return $('//input[@name="postcode"]') }
    get country() { return $('//select[@name="id_country"]') }
    get phoneNumber() { return $('//input[@name="phone_mobile"]') }
    get addressAlias() { return $('//input[@id="alias"]') }
    get registerbtn() { return $('//button[@name="submitAccount"]') }
    get headtext() { return $("//h1[text()='My account']") }
}

export default new SignInTesting()