# Building Lists of Records

## Rendering Lists of Components

Using **map** in a functional component:

```
const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <img src={image.urls.regular} />
  });
  
  return <div>{images}</div>;
}
```

## The Purpose of Keys in Lists

It is purely a performance consideration, that is gonna help React render/update lists more performantly. It is in your best interest to make sure that you include a **key** on every element that you render as **part of a list** (only for list elements)

* assign the key to the **root element** that we are returning from a list of records.

```
const ImageList = (props) => {
  const images = props.images.map(({ description, id, urls }) => {
    return <img alt={description} key={id} src={urls.regular}  />
  });

  return <div>{images}</div>;
}
```

