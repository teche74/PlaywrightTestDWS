Feature: Testing Login Functionality

Scenario Outline: User Login with valid Credentials
Given user is on Demo Web Shop Login Page
When user enter valid email as "<email>" and password as "<password>"
And select Remember me
And clicks on Log in button
Then user gets on home page and asserts his email "<email>" as accountname

Examples:
| email              | password  |
| testuser@gmail.com | Test@123  |