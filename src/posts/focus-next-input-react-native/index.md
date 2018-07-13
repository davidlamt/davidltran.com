---
title: "Focusing Next Input in React Native"
date: "2018-07-12"
tags: ["development"]
---

By default, the React Native [TextInput](https://facebook.github.io/react-native/docs/textinput.html) component does not automatically focus the next one once you hit "enter" on your virtual keyboard.

Let's say we have two input fields for a username and password. A pretty common design would be to automatically focus the password field once the user "finishes" typing in their username.

Note that this implementation will specifically be for React Native but you can apply the same idea in React.

## Solution

```jsx
// ...
render() {
    return (
    <TextInput 
      blurOnSubmit={false}
      onSubmitEditing={() => this.passwordRef.focus()}
      ref={ref => this.usernameRef = ref} 
    />
    <TextInput 
      ref={ref => this.passwordRef = ref} 
    />
  )
}
// ...
```

Here, we are only chaining together two inputs but you can use the same approach to chain as many inputs as you need.

## Analysis

We are using [refs](https://reactjs.org/docs/refs-and-the-dom.html) to keep _references_ to our text inputs. We provide a callback to the `ref` property that will receive the component instance (DOM node) and then assign it to our instance property.

Afterwards, we pass a callback to the [onSubmitEditing](https://facebook.github.io/react-native/docs/textinput#onsubmitediting) property that will focus our desired input field once a user "submits" their input. The [blurOnSubmit](https://facebook.github.io/react-native/docs/textinput#bluronsubmit) property will be useful if you want the keyboard to persist across multiple inputs.

## Abstraction

This is a work in progress but here is a (simplified) component I created for the purpose of chaining text inputs:

```jsx
class Field extends Component {
  static propTypes = {
    blurOnSubmit: PropTypes.bool,
    getRef: PropTypes.func,
    keyboardType: PropTypes.oneOf(['numeric']),
    label: PropTypes.string.isRequired,
    nextField: PropTypes.node,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    blurOnSubmit: false,
    getRef: null,
    keyboardType: 'numeric',
    placeholder: '',
    nextField: null,
  };

  setInputRef = ref => {
    this.inputRef = ref;

    const { getRef } = this.props;

    if (getRef) {
      getRef(ref);
    }
  };

  render() {
    const {
      blurOnSubmit,
      keyboardType,
      label,
      nextField,
      placeholder,
    } = this.props;

    return (
      <View>
        <Text onPress={() => this.inputRef.focus()}>{label}</Text>
        <TextInput
          blurOnSubmit={blurOnSubmit}
          keyboardType={keyboardType}
          onSubmitEditing={() => nextField && nextField.focus()}
          placeholder={placeholder}
          ref={this.setInputRef}
        />
      </View>
    );
  }
}
```

This component also contains a "label" that will focus the text input when clicked on. Some improvements include adding props for handling submit and setting the value.

Here is an example of the `Field` component being used:

```jsx
// ...
render() {
  const { passwordRef } = this.state;

  return (
    <View>
      <Field 
        label="Username"
        nextField={passwordRef}
        placeholder="test@test.com"
      />
      <Field 
        label="Password"
        placeholder="password"
        getRef={ref => this.setState({ passwordRef: ref })}
      />
    </View>
  )
}
// ...
```

## Closing Thoughts

Using `refs` for focusing inputs is pretty useful. The implementation becomes a bit more difficult as you have child components but the abstraction improves future maintainability.

To be honest, `refs` were a confusing concept for me that I avoided. Not to state that I fully understand it now but being put in a situation where I had to understand it enough was a great learning experience.

A bit philosophical but **we tend grow the most during times of discomfort**.
