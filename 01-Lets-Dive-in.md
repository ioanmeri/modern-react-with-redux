## Our First App

[Codepen link](https://codepen.io/sgrider/pen/MxPKJE)

* Add JS libraries **react** and **react-dom**

### Add State and Methods
```
class App extends React.Component {
  state = { styleOne: {}, styleTwo: {}};

  onMouseMove = (event) => {
    this.setState({
      styleOne: transform(-event.clientX / event.clientY),
      styleTwo: transform(event.clientX / event.clientY),
    })
  }

  render(){
    return (
      <div onMouseMove={this.onMouseMove}>
        <div className="panel" style={this.state.styleOne} />
        <div className="panel" style={this.state.styleTwo} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
```

### HTML
```
<div id="root" />
```

### CSS
```
div {
  height: 100vh;
  width: 100vw;
}
.panel {
  position: absolute;
  box-shadow: 0 0 50px grey;
  // add pattern as background-image
}
```


## Critical Questions

### What is React and its purpose?
* React is a JavaScript Library
* React's ultimate purpose is to show content (HTML) to users and handle user interaction

### Why didn't we use Redux to make that app?
* React can work by itself
* but it can also work with a tremendous variety of other libraries, packages, servers and databases

### What was that 'class' thing?
* A Javascript 'class'
* React 'components' are made using either Javascript functions or classes

### What was the HTML looking stuff?
* JSX
* It looks like HTML and can be placed in Javascript code. Determines the content of our React app just like normal HTML.

### How did the screen change when we moved the mouse?
* An event handler
* Event handlers are used to detect user interaction and respond to it

### Why did we add two libraries (React and ReactDOM)?
* React is split into two separate libraries
* **React** knows what a component is and how to make components work together.
* **ReactDOM** knows how to take a component and make it show up in the DOM

## Workflow
* Install/Update Node JS
* Install create-react-app
* Generate a project
* Build project!

>The only supported method for generating a project is now:

```
npx create-react-app myapp
```

## Why Create React App?

Inside of this React project are a tone of different dependencies that will help us properly write our application. Babel (that converts any version of js to es5) constists of a tremendous number of packages and that partially explains why we see very large number of packages installed.

## Starting and Stoppping a React App

### Starting the app
```
npm start
```

### Stopping the React app

Press **Control+C** at the terminal


## Displaying Content with Functional Components
**src/index.js**

* Import the React and ReactDOM libraries
```
import React from 'react';
import ReactDOM from 'react-dom';
```
* Create a react component
```
const App = () => {
  return <div>Hi there!</div>;
};
```
* Take the react component and show it on the screen
```
ReactDOM.render(<App />, document.querySelector('#root'));
```

* a component is a **Function** or a **Class**
* that produces HTML to show to the user (using JSX)
* and handles feedback from the user (using Event Handlers)

