Feature: online clothing home page

    Scenario: Sign in and validating webpage
    Given I am in the online clothing home page
    When I click on sign in element and it navigates to create an account page
    And I validate the sign in page header
    And  I enter a random mail Id
    Then I click on create an account for submission

    Scenario: Account Registration
    Given I am in the account creation page
    When I check page header for validation
    And I start to fill the required credentials for registration
    Then I click on Register for account creation

