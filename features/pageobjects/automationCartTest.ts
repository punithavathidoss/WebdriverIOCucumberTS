class AutomationCartTest {

    async selectionpage() { await browser.url("http://automationpractice.com/index.php?controller=my-account") }
    get womenelement() { return $("//a[@href='http://automationpractice.com/index.php?id_category=3&controller=category']") }
    get productContainer() { return $("//div[@class='product-container']//a[contains(text(),'Printed Chiffon Dress')]") }
    get addToCart() { return $("//a[@title='Add to cart' and @data-id-product='7']") }
    get cartValidate() { return $("//i[@class='icon-ok']/parent::h2") }
    get proceedCart() { return $("//a[@title='Proceed to checkout']") }
    get shoppingCartHeader() { return $("#cart_title") }
    get proceedSummary() { return $("//a[@href='http://automationpractice.com/index.php?controller=order&step=1']") }
    get addressHeader() { return $("//h1") }
    get proceedAddress() { return $("[name=processAddress]") }
    get shippingHeader() { return $("//h1[text()='Shipping']") }
    get checktnc() { return $("#cgv") }
    get proceedShipping() { return $("[name=processCarrier]") }
    get pageValidation() { return $("//h1") }
    get paymentOption() { return $("//a[@title='Pay by bank wire']") }
    get paymentHeader() { return $("//h1") }
    get confirmOrderbtn() { return $("//a[@class='button-exclusive btn btn-default']/following-sibling::button") }
    get ConfirmOrdervalidation() { return $("//h1") }

}

export default new AutomationCartTest()