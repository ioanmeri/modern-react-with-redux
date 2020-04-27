# Handling Authentication with React

## OAuth-Based Authentication

### Email/Password Authentication
* We store a record in a database with the user's email and password
* When the user tries to login, we compare email/pw with whats stored in DB
* A user is 'logged in' when they enter the correct email/pw

### OAuth Authentication
* User authenticates with outside service provider (Google, Linkedin, Facebook)
* User authorizes our app to access their information
* Outside provider tells us about the user
* We are trusting the outside provider to correctly handle identification of a user
* OAuth can be used for (1) user identification in our app and (2) our app making actions on behalf of user