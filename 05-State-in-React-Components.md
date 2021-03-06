# State in React Components

## Rules of State
* Only usable with class components
* You will confuse props with state :(
* 'State' is a JS object that contains data relevant to a component
* Updating 'state' on a component causes the component to (almost) instantly rerender
* State must be initialized when a component is created
* State can **only** be updated using the function 'setState'

### Initializing the state
```
class App extends React.Component {
  constructor(props){
    super(props);

    this.state = { lat: null };
  }

  ...
}
```

The React.Component base class has a construstor function of it's own.

When we define the constructor inside the App class, **we are essentially overriding** or replacing **the constructor function** that is inside the **React.Component class**

But we still want to make sure, that all the code inside base class constructor function still gets called. For that to happen, we call super with props.

**super** is a reference to the parent's constructor function.

## Updating State Properties

We never ever want to initialize some work, or request from a call to the render method. Because the render method is going to be getting called all time.

**setState** is a function that gets put on our App component automatically when we extended React.Component.

## Conditionally Rendering Content

The combination of state that we can have:

Have latitude | No errorMessage --> Show latitude
No latitude | Have errorMessage ---> Show error
No latitude | No errorMessage ---> Show "loading"

```
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
  
    // THIS IS THE ONLY TIME we do direct assignment
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      position => {
        // we called setState!!!
        this.setState({ lat: position.coords.latitude });
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    );
  }

  // React says we have to define render!!
  render(){
    if(this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if(!this.state.errorMessage && this.state.lat){
      return <div>Latitude: {this.state.lat}</div>;
    }

    return <div>Loading!</div>;
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));
```
we will refactor it!