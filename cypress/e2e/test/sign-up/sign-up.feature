Feature: Sign Up, Log In and Log Out

  Scenario: User registers, logs in, and logs out
    Given They visit the home page
    When They go to the sign-up page
    When They enter valid registration details
    When They submit the form
    Then The account should be created successfully

  Scenario: Successful Log In and Out
    Given They visit the home page
    When They log in using valid credentials
    Then They should see the username on the header
    When They log out
    Then They expect the log in button in the header