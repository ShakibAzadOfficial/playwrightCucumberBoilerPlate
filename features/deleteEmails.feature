Feature: This is to delete those annoying emails
    As a user 
    I want to be able to login to gmail 
    and delete all my spam emails
    #Enter your username & password on your .env file

    @demo
    Scenario: Delete Spam Inbox
    Given I go to gmail website
    When I login to gmail webpage
    Then I go to my spam Inbox
    And I select all files and click on delete