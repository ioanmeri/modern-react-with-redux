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
* OAuth can be used for (1) **user identification** in our app and (2) our app **making actions on behalf of user**


## OAuth for Servers vs Browser Apps

### OAuth for Servers
* Results in a 'token' that a server can use to make requests on behalf of the user
* Usually used when we have an app that needs to access user data **when they are not logged in**
* Difficult to setup because we need to store a lot of info about the user

### OAuth for JS Browser Apps
* Results in a 'token' that a browser app can use to make requests on behalf of the user
* Usually used when we have an app that only needs to access user data **while they are logged in**
* Very easy to set up thanks to Google's JS lib to automate flow

#### Flow

User's Browser 
* User click 'Login with Google' button
* We use google's JS lib to initiate OAuth process 

Google's Servers
* Google's JS lib makes auth request to Google
* Google displays confirmation screen to user in popup window
* User accepts
* Popup window closes

User's Browser
* Google's JS lib invokes a callback in our React/Redux app
* Callback provided with 'authorization' token and profile info for user

### Steps for Setting Up OAuth
* Create a new project at console.developers.google.com
* Set up an OAuth confirmation screen
* Generate an OAuth Client ID
* Install Google's API library, initialize it with the OAuth Client ID
* Make sure the lib gets called any time the user clicks on the 'Login with Google' button

[Gapi Documentation](https://developers.google.com/identity/sign-in/web/reference#authentication)


### Auth Component
* Get a reference to the 'auth' object after it is initialized
* Figure out if the user is currently signed in
* Print their authentication status on the screen