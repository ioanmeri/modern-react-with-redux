# Navigation with React Router

```
npm install --save react-router-dom
```


## Libraries
react-router: core navigation lib - we don't install this manually  
react-router-dom: Navigation for dom-based apps (we want this!)  
react-router-native: Navigation for react-native apps  
react-router-redux: Bindings between Redux and React Router  


## Introducing React Router
```
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>PageOne</div>;
}

const PageTwo = () => {
  return (
    <div>
      <div>PageTwo</div>
      <button>Click Me!</button>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
}

export default App;
```


BrowserRouter on its own keeps track of the address bar in your browser (history object)

### How Paths Get Matched

Different routes can be matched by the same URL.

Address Bar: myapp:8000/ --> Extracted 'path': /

```
extractedPath.contains(path)
```
?
#### Route Definitions
```
<Route path="/" component={One} />
<Route path="/page" component={Two} />
<Route path="/page/5" component={Three} />
```

The Extracted 'path' **/page**:  
extractedPath.contains(path)  

matches both routes **/** and **/page**, so both components appear on the screen.

To override this behavior, we can add the prop **exact**.

## Navigating with React Router

```
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
}

const PageTwo = () => {
  return (
    <div>
      <div>PageTwo</div>
      <button>Click Me!</button>
      <Link to="/">Navigate to Page One</Link>
    </div>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </div>
    </BrowserRouter>
  );
}
```

### What We Want
* User wants to navigate to another page in our app
* User clicks a 'Link' tag
* React Router prevents the browser from navigating to the new page and fetching new index.html file!
* URL still changes
* 'History' sees updated URL, takes URL and sends it to BrowserRouter
* BrowserRouter communicates the URL to Route components