# Handling User Input with Forms and Events

* How do we get feedback from the user?
* How do we fetch data from some outside API or server?
* How do we show lists of records?


## Component Design

Building a search image app.

* App
  - SearchBar
  - ImageList

**Folder Structure**:
* src
  - components
    + App
    + SearchBar
  - index.js 

## Event Handler

```
import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event){
    console.log(event.target.value)
  }

  render(){
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input type="text" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar
```

or with **arrow function**:

```
<input type="text" onChange={(e) => console.log(e.target.value)} />
```

### Controlled vs Uncontrolled

**Controlled Element**:

```
class SearchBar extends React.Component {
  state = { term: '' };

  render(){
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input 
              type="text" 
              value={this.state.term} 
              onChange={(e) => this.setState({ term: e.target.value })} />
          </div>
        </form>
      </div>
    );
  }
}
```

**Flow Diagram of Controlled Element** of what is happening in our component:

User types in input  
|  
Callback get invoked  
|  
We call setState with the new value  
|  
Component rerenders  
|  
Input is told what its value is (coming from state)

### Why Controlled elements ?

* we do not want to store information inside of our html elements.

* we want the React side of our application to be what is driving all of the data that is flowing through our app.


## Handling Form Submittal


### this
Instance of SearchBar:
* state
* render
* onFormSubmit
* **this**

### How to determine this?

```
class Car {
  setDriveSound(sound){
    this.sound = sound;
  }

  drive(){
    return this.sound;
  }
}

const car = new Car();
car.setDriveSound('vroom');
car.drive();
```

**this** equals **car**.

We look at the function call to find out what **this** is.