# Integrating React with Redux

**Dependencies**:  
* React
* Redux
* React-Redux

```
npm install --save redux react-redux
```

## How React-Redux Works

**Provider** and **Connect** are implemented by react-redux library.

We will show the App inside of the Provider.
* provider is going to have an internal reference to the store

Provider == provides information to all our different components inside of our app


**Store**:
* Reducers
  - Song list reducer
  - Selected song reducer

Provider  
|  
v  
App  
|  
v  
Connect  
|  
v  
SongList (Component that needs access to Store)

* Connect Component Communicates with the 'Provider' via the Context System (not props)


## Redux Project Structure

* /src
  - /actions  --> Contains files related to action creators
  - /components  --> Files related to components
  - /reducers --> Files related to reducers
  - index.js --> set up both the react and redux sides


**/src/actions/index.js**:
```
// Action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

```


**/src/reducers/index.js**:
```
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ]
};

const selectedSongReducer = (selectedSong=null, action) => {
  if(action.type === 'SONG_SELECTED'){
    return action.payload
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
```

**/src/index.js**
```
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <Provider store={createStore(reducers)} >
    <App />
  </Provider>, 
  document.querySelector('#root')
);
```

now any component in our app can make use of the connect component.

## The Connect Function

Always:
* import connect
* the component
* mapStateToProps
* export default connect

```
import React, { Component } from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
  render(){
    console.log(this.props)
    return <div>SongList</div>;
  }
}

const mapStateToProps = state => {
  return { songs: state.songs };
}

export default connect(mapStateToProps)(SongList);
```

