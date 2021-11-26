Feature: Landing page of Herokuapp

  Scenario: As a user validating landing page header

    Given I am on the landing page of Herokuapp
    Then I should see a header text "Welcome to the-internet"


  Scenario: Validate checkbox
    Given I am on the landing page of Herokuapp
    When I click on checkbox menu
    Then I should be navigated to checkbox page
    Then I validate checkbox 2 is selected

  Scenario: Validate Disappearing element
    Given I am on the landing page of Herokuapp
    When I click on Disappearing element menu
    Then I should be navigated to Disappearing element page
    And  I click on home button to validate

  Scenario: Validate drop down
    Given I am on the landing page of Herokuapp
    Then I click on drop down menu
    And click on dropdown list
    Then I select option 2 from the drop down list
