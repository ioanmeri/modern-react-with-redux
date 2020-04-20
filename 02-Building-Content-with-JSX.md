# Building Content with JSX

## What is JSX?

Babel is also used to process that JSX as well. JSX is turned to a **function call** to React.createElement(). The entire purpose of JSX is just to be able to allow us write these different function calls in a much easier to understart/read format.

* Special dialect of JS (is not HTML!)
* Browsers don't understand JSX code! We write JSX then run tools to turn it into normal JS
* Very similar in form and function to HTML with a couple differences

## Converting HTML to JSX

* Any time that you return some amount of JSX you have to make sure that the **opening tag is on the same line as the return** statement.
* The convention is every time you have a **multi line segnment of JSX, wrap the JSX inside parenthesis**.

* Adding custom styling to an element uses different syntax
* Adding a class to an element uses different synxtax
* JSX can reference JS variables

### Inline Styling with JSX

**HTML**
```
<div style="background-color: red;"></div>
```

**JSX**
```
<div style={{ backgroundColor: 'red' }}></div>
```

**Community Convention**, with JSX we use:
* double quote any time that we want to indicate a string
* for any non-JSX property we make use of single quotes

### Class vs ClassName
We are not suppose to use the keyword class inside a JSX element. Instead we use **className**. We do that to avoid collision with the class based component's **class** keyword.


### Referencing JS Variables in JSX

```
const App = () => {
  const buttonText = 'Click Me';
  return (
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
    </div>
  );
};
```

or even more complicated:
```
function getButtonText(){
  return 'Click on me!'
}
const App = () => {
  return (
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {getButtonText()}
      </button>
  );
};
```


### Values JSX Can't show
React doesn't know how to deal with JS objects inside its components, specifically as text. 

We are **not allowed** to:
```
const App = () => {
  const buttonText = { text: 'Click me' };
  return (
      <button style={{ backgroundColor: 'blue', color: 'white' }}>
        {buttonText}
      </button>
  );
};
```

we can easily fix this by adding:
```
{buttonText.text}
```

We can use JS objects, but not as text. This is valid:
```
const App = () => {
  const buttonText = { text: 'Click me' };
  const style = { backgroundColor: 'blue', color: 'white' };

  return (
    <div>
      <label className="label" for="name">Enter name:</label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
};
```

### Finding Forbidden Property Names

There are a couple other differences between JSX and HTML.

Valid JSX for label's **for** attribute:
```
<label className="label" htmlFor="name">{labelText}</label>
```