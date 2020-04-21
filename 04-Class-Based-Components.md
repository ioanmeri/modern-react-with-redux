# Class Based Components

**Functional Components**: Good for simple content

**Class Components**: Good for just about everything else

### Benefits of Class Components

* Easier code organization
* Can use 'state'
  - Easier to handle user input
* Understands lifecycle events
  - Easier to do things when the app first starts


## Application Overview
Detect if it's summer or winter based on user's location.

### App Challenges
* Need to get the users physical location
  - [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
* Need to determine the current month
* Need to change the text and styling based on location + month

### App Overview

**App** --> Has code to determine location + month

**SeasonDisplay** --> Shows different text/icons based on props



### Timeline of the application in User's Browser

 * JS file loaded by browser
 * App component gets created
 * We call geolocation service
 * App returns JSX, gets rendered to page as HTML
 * ...
 * We get result of geolocation!

With functional components, we don't have any good way of waiting till the success callback returns. That is why we need a Class Based Component.


### Timeline with Class Component
* JS file loaded by browser
* App component gets created
* We call geolocation service
* App returns JSX, gets rendered to page as HTML
* ...
* We get result of geolocation!
* Tell the component to rerender itself with this new information

## Rules of Class Components
* Must be a Javascript Class
* Must extend (subclass) React.Component
* Must define a 'render' method that returns some amount of JSX


