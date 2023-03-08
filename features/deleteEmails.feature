Feature: This is to delete those annoying emails

    #Enter your username & password on your .env file

    @delete
    Scenario: Delete Spam Inbox
    Given I go to gmail website
    When I login to gmail webpage
    Then I go to my spam Inbox
    And I select all files and click on delete