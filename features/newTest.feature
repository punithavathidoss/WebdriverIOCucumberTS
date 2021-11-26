Feature: Testing and Validating the Web Page

    Scenario: Validation of Proto Commerce page

        Given I am on the ProtoCommerce home page
        Then I should see a header text "Protractor Tutorial"
        And I pass credentials for login
        Then I click submit for the submission of the details