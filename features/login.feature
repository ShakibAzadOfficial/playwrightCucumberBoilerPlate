Feature: Login Page

    As a user 
    I want to test
    All basic scenarios for login Page
    
    @demo
    Scenario: Login with valid credentials
      Given I am on the login screen
      When I fill the login form with valid credentials
      Then I should be able to see the home screen
