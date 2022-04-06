Feature: Verify if user gets error messages if all required data is not provided while adding new owner
    @firstname
    Scenario: Verify if user gets error messages if firstname field is empty
        Given User is entering new owner in petclinic application
        When User not provided firstname of new owner
        Then error messages gets dispayed below firstname field
    @lastname
    Scenario: Verify if user gets error messages if lastname field is empty
        Given User is entering new owner in petclinic application
        When User not provided lastname of new owner
        Then error messages gets dispayed below lastname field
    @address
    Scenario: Verify if user gets error messages if address field is empty
        Given User is entering new owner in petclinic application
        When User not provided address of new owner
        Then error messages gets dispayed below address field
    @city
    Scenario: Verify if user gets error messages if city field is empty
        Given User is entering new owner in petclinic application
        When User not provided city of new owner
        Then error messages gets dispayed below city field
    @telephone
    Scenario: Verify if user gets error messages if telephone field is empty
        Given User is entering new owner in petclinic application
        When User not provided telephone of new owner
        Then error messages gets dispayed below telephone field
# @telephonedigits
# Scenario: Verify if user gets error messages if telephone field is empty
#     Given User is entering new owner in petclinic application
#     When User enter non numeric value in telephone field
#     Then it shall display numeric error message
