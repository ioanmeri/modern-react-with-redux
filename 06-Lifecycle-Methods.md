# Understanding Lifecycle Methods

## Introducing Lifecycle Methods

A component lifecycle method, is a function that we can optionally define inside of our Class based Component. They will be called automatically by React at certain points, during a component's lifecyle.

### Component Lifecycle

constructor  
|  
render  
|  
componentDidMount  
|  
componentDidUpdate  
|  
componentWillUnmount  

* the **render** method is the one that **we have to define**.
* **componentDidMount** is called, immediately after a component shows up on the screen
* **componentDidUpdate** is called, when we update the state.
* **componentWillUnmount** when we want to make some cleanup.

```
class App extends React.Component {
  constructor(props){
    super(props);

    ...
  }

  componentDidMount(){
    console.log('My component was rendered on the screen.');
  }

  componentDidUpdate(){
    console.log('My component was just updated - it rerendered!');
  }

  render(){
    ...
  }
}
```

## Why Lifecyle Methods?

constructor -->  Good place to do one-time setup (state initilization)  
|  
render  --> Avoid doing anything besides returning JSX  
|  
componentDidMount --> Good place to do data-loading (api request)!  
|  
componentDidUpdate  --> Good place to do more data-loading 
                        when state/props change  
|  
componentWillUnmount  --> Good place to do cleanup 
                          (especially for non-React stuff)


**Other lifecycle methods (rarely used)**
shouldComponentUpdate  
getDerivedStateFromProps  
getSnapshotBeforeUpdate  

## Alternate State Intitilization

No constructor!
```
class App extends React.Component {
  state = { lat: null, errorMessage: '' };

  ...
}
```

## Passing State as Props

```
class App extends React.Component {
  state = { lat: null, errorMessage: '' };
  ...
  
  render(){
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />
    }
}
```