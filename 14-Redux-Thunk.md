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


**Notes**:  
* Components are generally responsible for fetching data they need by calling an action creator
* Action creators are responsible for making API requests (where redux-thunk comes into play)
* We get fetched data into a component by generating new state in our redux store, then getting that into our component through mapStateToProps

## Async Action Creator

**What's wrong with 'fetchPosts'?**
* Action creators must return plain JS objects with a type property - we are not!
  - it is because of the async/await syntax how it compiles to es5 with babel
  - action creator will return the request object (with methods) - no plain object (no type property)
* If we don't use async/await
  - by the time our action gets to a reducer, we won't have fetched our data!

```
export const fetchPosts = async () => {
  // Bad approach!!!!!
  const response = await jsonPlaceholder.get('/posts');

  return {
    type: 'FETCH_POSTS',
    payload: response
  };
};
```


## Middlewares in Redux

* Synchronous action
  - instantly returns an action with data ready to go

* Asynchronous action creator
  - Takes some amount of time for it to get its data ready to go (e.g. network request)


### Redux Cycle

To change state of our app, we call an...

* Action Creator (produces an...)
* Action (Gets fed to...)
* dispatch (Forwards action to...)
* Middleware (Sends action to...)
* Reducers (Creates new...)
* State (wait until we need to update state again)


### Middleware in Redux

* Function that gets called with every action we dispatch
* Has the ability to **STOP, MODIFY**, or otherwise mess around with actions
* Tons of open source middleware exist
* Most popular use of middleware is for dealing with async actions
* We are going to use a middleware called 'Redux-Thunk' to solve our async issues.


### Normal Rules
* Action Creators **must** return action objects
* Actions must have a type property
* Actions can optionally have a 'payload'


### Rules with Redux Thunk

* Action Creators **can** return action objects (as usual)
* or
* Action Creators **can** return functions!
* If an action object gets returned, it must have a type
* If a action object gets returned, it can optionally have a 'payload'


If redux thunk receives a functions:
* function invoked with 'dispatch'
* we wait for our request to finish
* Request complete, dispatch action manually


**With Redux thunk, we can manually dispatch an action at some point in the future**


## Hook up a middleware in Redux Store

**/src/index.js**:
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
   <App />
  </Provider>,
  document.querySelector('#root')
);
```


**/src/actions/index.js**:
```
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response })
}

// TOTALLY FINE!
export const selectPost = () => {
  return {
    type: 'SELECT_POST'
  }
};
```