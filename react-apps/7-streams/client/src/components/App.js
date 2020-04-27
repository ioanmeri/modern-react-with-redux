import React from 'react';
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

export default App;