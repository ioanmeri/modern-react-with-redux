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

