# Redux

## What is Redux ?
* State management library
* Makes creating complex applications easier
* Not required to create a React app!
* Not explicitly designed to work with React!


### Redux Cycle

Action Creator -> Action -> dispatch -> Reducers -> State

* **action creator**: a function that is going to create a POJO
* **action**: describes some change that we want to make to the data, the POJO
* **dispatch**: takes in an action, makes copies of that object and passes it off to a banch of different places inside of our app.
* **reducers**: is a function that is responsible for taking in an action, and some existing amount of data. It's going to process that action and make some change to the data and then return it.
* **state**: central repository of all information


#### Mapping Insurance Company Analogy to Redux

Person dropping off the form -> the form -> form receiver -> departments -> compiled department data

## Modeling with Redux

**Action creator**: 

```
const createPolicy = (name, amount) => {
  return { // Action (a form in our analogy)
    type: 'CREATE_POLICY',
    payload: {
      name: name,
      amount: amount,
    }
  };
};
```

**Reducers**:
```
// Reducers (Departments)
const claimsHistory = (oldListOfClaims = [], action) => {
  if(action.type === 'CREATE_CLAIM'){
    // we care about this action (FORM!)
    return [...oldListOfClaims, action.payload];
  }
  
  // we don't care the action (form!!)
  return oldListOfClaims;
}

```

**push** vs **array spread**:
with spread, we get a new array! With reducers we always avoid modifying existing data structure. Never push inside of our reducer.

* when the reducer is called for the first time, we need to default the value of that first argument to an empty array

### Rules of Reducers
* make sure that we do not modify the array that gets passed in
* make sure that we always return some value


## Store in Redux

A collection of different reducers, and action creators.

```
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

console.log(store)
```

The store object represents the entire Redux Application. It contains references to all our reducers and all data produced by those reducers (state).

### Testing Our Example

```
const { createStore, combineReducers } = Redux;

const ourDepartments = combineReducers({
  accounting: accounting,
  claimsHistory: claimsHistory,
  policies: policies
});

const store = createStore(ourDepartments);

store.dispatch(createPolicy('Alex', 20));
store.dispatch(createPolicy('Jim', 30));
store.dispatch(createPolicy('Bob', 40));

store.dispatch(createClaim('Alex', 120));
store.dispatch(createClaim('Jim', 50));

store.dispatch(deletePolicy('Bob'));

console.log(store.getState());
```

[Codepen](https://codepen.io/ioanmeri/pen/eYpvxer?editors=0110)
