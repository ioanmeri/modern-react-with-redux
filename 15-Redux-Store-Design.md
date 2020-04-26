# Redux Store Design

Each reducer in seperate file in reducers directory.

* postsReducer
  - Maintains an array of all fetched posts

## Rules of Reducers
* Must return any value besides 'undefined'
* Produces 'state', or data to be used inside of your app using only previous state and the action
  - We have a cyclic action, where the reducer is getting called with its owned value that is returning over and over again.
* Must not return reach 'out of itself' to decide what value to return (reducers are pure)
  - no querySelector
  - no axios requests
  - only state and action
* Must not mutate its input 'state' argument
  - if you accidentally return the same state value, redux sees that nothing has changed and the React App does not need to rerender itself


## Safe State Updates in Reducers

### Arrays
**Bad**
```
state.pop()
state.push('hi')
state[0] = 'hi'
```

**Good**
```
state.filter(element => element !== 'hi')
[ ...state, 'hi']
state.map(el => el === 'hi' ? 'bye': el)
```

### Objects
**Bad**
```
state.name = 'Same' // Updating
state.age = 30 // Adding a property
delete state.name // Removing
```

**Good**
```
{...state, name: 'Same'}
{...state, age: 30}
{...state, age: undefined}
_.omit(state,'age')
```


## Application Flow

* Fetch Posts
* Show posts in PostList
* Each element in PostList show UserHeader
* UserHeader is given ID of user to show
* Each UserHeader attempts to fetch its user
* Fetch User - Fetch User - Fetch User
* Show users in each UserHeader


## Extracting Logic to MapStateToProps

**ownProps** is a reference to the props that they are about to be sent into the component. This is for precalculation steps so that we don't have to pass a ton of data directly to the component.


```
import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions'

class UserHeader extends React.Component {
  componentDidMount(){
    this.props.fetchUser(this.props.userId);
  }

  render(){
    const { user } = this.props;

    if(!user){
      return null;
    }

    return <div className="header">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find(user => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
```

## Avoid Overfetching

### Lodash Solution

```
npm install --save lodash
```


**/src/actions/index.js**
```
import _ from 'lodash';
export const fetchUser = (id) => dispatch => {
  _fetchUser(id, dispatch)
}; 

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data })
});
```

Downside: If you want to refetch a user, you won't be able to do it again with the same memoization function.

### Second Way

**fetchPostsAndUsers()**
* Call 'fetchPosts'
* Get list of posts
* Find all unique userId's from list of posts
* Iterate over unique userId's
* Call 'fetchUser' with each userId

**/src/actions/index.js**
```
import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'))
  userIds.forEach(id => dispatch(fetchUser(id)))
};

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts');

  dispatch({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: 'FETCH_USER', payload: response.data });
};
```

the same with lodash chain:

```
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
```
