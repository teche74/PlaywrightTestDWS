Feature: Testing Registeration Functionality

Scenario Outline: Successful Register with valid data Scenarios
Given I am on Demo WebShop register page
When user enters valid personal details having gender as "<gender>" , firstname as "<firstname>" , lastname as "<lastname>" and email as "<email>"
And user fills Your Password section with valid credentials for password as "<password>" and confirm password as "<confirmpassword>" 
And clicks register button 
Then user redirects to home page and asserts his email "<email>" as accountname

Examples:

    | gender | firstname | lastname | email                     | password     | confirmpassword |
    | Male   | Ujjwal    | Bisht    | ujjwal1@testmail.com      | Test@123     | Test@123        |
    | Female | Riya      | Sharma   | riya.sharma@testmail.com  | Pass@456     | Pass@456        |
    | Male   | Aman      | Verma    | aman.verma@testmail.com   | Demo@123     | Demo@123        |
    | Female | Neha      | Gupta    | neha.gupta@testmail.com   | Demo@456     | Demo@456        |
    | Male   | Rahul     | Singh    | rahul.singh@testmail.com  | Rahul@123    | Rahul@123       |