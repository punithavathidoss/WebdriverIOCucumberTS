Feature: online clothing home page

  Scenario: Sign up and Accont Creation
    Given I am in the online clothing home page
    When I click on sign in element
    Then I validate the sign in page header
    When I enter a random mail Id and click for submission
    Then I check page header for validation with text "CREATE AN ACCOUNT"
    When I start to fill the required credentials for registration
    And I click on Register for account creation
    Then I should see header text as "MY ACCOUNT" for validation

  Scenario: Product cart validation
    Given I am in clothing selection page
    When I enter into women selection
    And Adding product to the cart
    Then I validate wheather the product is added to cart
    When I proceed for checkout
    Then I validate the page name containing "SHOPPING-CART SUMMARY"
    When I proceed for checkout in summary page
    Then I am to validating with delivery address header
    When I am clicking proceed for checkout
    Then I am validating header of the shipping page with "SHIPPING"
    When I click terms and conditions check box
    Then Again I proceed for checkout in shipping page
    Then I check for the page validation with header text
    When I choose payment option
    Then I validate payment page header and
    Then I click on confirm my order in payment page
    Then I validate the order confirmation page with header text "ORDER CONFIRMATION"


