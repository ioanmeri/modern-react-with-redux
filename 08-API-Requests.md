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