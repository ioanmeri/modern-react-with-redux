# Async Actions with Redux Thunk

[JSON placeholder API](https://jsonplaceholder.typicode.com/)

Posts from an API project.

Post
* userId


Users
* id

2 seperate end point to get all the info that we need to show the list of blog posts.

```
npm install --save redux react-redux axios redux-thunk
```


## General Data Loading with Redux

* Component gets rendered onto the screen
* Component's 'componentDidMount' lifecycle method gets called
* We call action creator from 'componentDidMount'
* Action creator rus code to make an API request
* API responds with data
* Action creator returs an 'action' with the fetched data on the 'payload' property
* Some reducer sees the action, returns the data off the 'payload'
* Because we generated some new state object, redux/react-redux cause our React app to be rerendered