Feature: Add new Owner
    Scenario: Verify user is able to add new owner in petclinic application
        Given User is entering new owner in petclinic application
        When User clicks on Add new dropdown menu from owners menu
        And User enters all required fields
        Then owner information screen gets dispalyed with all entered details

    