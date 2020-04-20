# Communicating with Props

## Three Tenets of Components

**Component Nesting**: A component can be shown inside of another

**Component Reusability**: We want to make components that can be easily reused through out application

**Component Configuration**: We should be able to configure a component when it is created


## Specifying images in JSX

```
npm install --save faker
```

then in our project:
```
import faker from 'faker';

...

<img alt="avatar" src={faker.image.avatar()}
```


## Creating a Reusable, Configurable Component
* Identify the JSX that appears to be duplicated
* What is the purpose of that block of JSX? Think of a **descriptive name** for what it does
* Create a **new file** to house this new component - it should have the **same name as the component**
* Create a new component in the new file, paste the JSX into it
* Make the new component configurable by using React's 'props' system

## Component Nesting
Render the ComponentDetail component inside our App.

* place an **export statement** inside of the **CommentDetails**
```
export default CommentDetail;
```
* add an **import statement** inside the index.js file
```
import CommentDetail from './CommentDetail';
```
and then:
```
const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail />
    </div>
  );
};
```

## React's Props System

System for passing data from a **parent** component to a **child** component.

Goal is to customize or configure a child component.


### Providing props from parent to child

````
<CommentDetail author="Sam" />
````

### Consuming props inside child

```
const CommentDetail = (props) => {
  console.log(props)
  return (
      <a href="/" className="author">
        {props.author}
      </a>
  );
}

```

### Showing Custom Children

With props. We are passing the CommentDetail as a prop down to ApprovalCard
```
<ApprovalCard>
  <CommentDetail 
    author="Sam" 
    timeAgo="Today at 4:45PM" 
    content="Nice blog 1" 
    avatar={faker.image.avatar()}
  />
</ApprovalCard>
```

and inside ApprovalCard we can access the prop component like so:
```
const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      ...
    </div>
  );
};
```