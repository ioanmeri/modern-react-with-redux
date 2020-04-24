# Making API Requests with React

React App   
-> AJAX Client -----> Send me data about pics for 'cars'  
             |
             <------ Here you go                          


Libraries frequently used in React Apps for managing network requests:

* **axios** (3rd party package)
* fetch (build into modern browsers)

### Install 
```
npm install --save axios
```

### Flow
* Component renders itself one time with no list of images
* onSearchSubmit method called
* Request made to unspash
* ...wait...
* Request complete
* Set image data on state of App component
* App component rerenders and shows images

## Async Await Request
**src/api/unsplash**:

Axios custom client:
```
import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ...'
  }
});
```

**src/components/App.js**:

```
import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'

class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async (term) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
    });
    
    this.setState({ images: response.data.results })
  }

  render(){
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App
```


