# Using Ref's for DOM Access

## Masonry-like grid with CSS grid

### Flow 

* Let the ImageCard render itself and its image
* Reach into the DOM and figure out the height of the image
* Set the image height on state to get the component to rerender
* When rerendering, assign a 'grid-row-end' to make sure the image takes up the appropriate space

## Accessing the DOM with Refs

When we want to access DOM elements directly with React, we make use of the Ref system.

### React Refs
* Gives access to a single DOM element
* We create refs in the constructor, assign them to instance variables, then pass to a particular JSX element as props


```
class ImageCard extends React.Component {
  constructor(props){
    super(props);

    this.imageRef = React.createRef();
  }

  render(){
    const { description, urls } = this.props.image

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
```

## Callbacks on Image Load

```
class ImageCard extends React.Component {
  constructor(props){
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount(){
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.current.clientHeight)
  }

  render(){
    const { description, urls } = this.props.image

    return (
      <div>
        <img ref={this.imageRef} alt={description} src={urls.regular} />
      </div>
    );
  }
}
```