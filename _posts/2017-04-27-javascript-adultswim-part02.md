---
layout:     post
date:       2017-04-27 13:30:00 -0300
title:      "JavaScript for Grownups"
subtitle:   "Part 2: redux and webpack"
author:     Carlos Augusto Borges
categories: javascript webpack redux
comments:   true
serie: javascript-adultswim
---

In this second part of the series we will learn about redux and webpack. 

This post is better used as reference. To understand in a more complete way please refer to Dan Abramov's "[Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)"
course at [egghead][egghead] until lesson "[React Counter Example](https://egghead.io/lessons/javascript-redux-react-counter-example)". Also read Webpack's "[Get Started](https://webpack.js.org/guides/get-started/)" at [webpack site][webpack]

{% include posts/intro-javascript-adultswim.html %}

# Prerequisites

* Node.js
* NPM

# What is [Redux][redux]?

Redux is a predictable state container for JavaScript apps.

## Principles

* **Single source of truth**: The [state][state] of your whole application is stored in an object tree within a single [store][state].
* **State is read-only**: The only way to change the state is to emit an [action][action], an object describing what happened.
* **Changes are made with pure functions**: To specify how the state tree is transformed by actions, you write pure [reducers][reducer].


## The reducer function

* Has to be pure
* Used to describe state mutations
* Input:
  * Previous state of the app
  * Action being dispatched
* Output:
  * Next state of the app

## The store

### Definition

Binds together the three principles of redux. It holds the current application state object. It let's you dispatch actions. And when you create it you need to specify the reducer that tells how state is updated with actions.

### Methods

* **getState()**: retrieves the current state of redux store.
* **dispatch(*action*)**: dispatch action to change the state of the application.
* **subscribe(*callback*)**: it let's you register a callback that the redux store will call anytime a action has been dispatched. Returns unsubscribe function.

## Code

**Command Line**
```bash
npm install --save redux
```

**file: index.js**
```javascript
var counter = require('./counter');
var createStore = require('redux').createStore;

var store = createStore(counter);

store.subscribe(function() {
  console.log(store.getState());
});

store.dispatch({ type: 'INCREMENT' }); // 1
store.dispatch({ type: 'INCREMENT' }); // 2
store.dispatch({ type: 'DECREMENT' }); // 1
store.dispatch({ type: 'DECREMENT' }); // 0
```

# [Webpack][webpack]

## Definition

Webpack is a module bundler for modern JavaScript applications.

## Concepts

* **Entry**: contextual root or the first file to kick off your app.
* **Output**: tells webpack how to treat bundled code.
* **Loaders**: At a high level, they have two purposes in your webpack config.
  * Identify what files should be transformed by a certain loader. (test property)
  * Transform that file so that it can be added to your dependency graph (and eventually your bundle).
* **Plugins**: webpack provides flexible and powerful customization api in the form of plugins.

## Hands on

**Command Line**
```bash
npm install --save-dev webpack
```

**part of file: package.json**
```json
{
  "scripts": {
    "test": "jest",
    "build": "webpack index.js bundle.js"
  }
}
```

**file: index.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Adult Swim</title>
  </head>
  <body>
    <script src="bundle.js" charset="utf-8"></script>
  </body>
</html>
```

* Run the build script `npm run build`
* Open the `index.html` in our browser and open the debug console.
* See how you node.js code is compatible with the browser :-D

# All together

## Redux with HTML

**index.js**
```javascript
var counter = require('./counter');
var createStore = require('redux').createStore;

var store = createStore(counter);

var incrementButton = document.getElementById("increment");
var decrementButton = document.getElementById("decrement");
var counterInput = document.getElementById("counter");

counterInput.value = store.getState();

incrementButton.onclick = function() {
  store.dispatch({ type: 'INCREMENT' });
}

decrementButton.onclick = function() {
  store.dispatch({ type: 'DECREMENT' });
}

store.subscribe(function() {
  counterInput.value = store.getState();
});
```

**index.html**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript Adult Swim</title>
  </head>
  <body>
    <input type="text" id="counter" readonly />
    <button type="button" id="increment">+</button>
    <button type="button" id="decrement">-</button>
    <script src="bundle.js" charset="utf-8"></script>
  </body>
</html>
```

**Command Line**
```
npm run build
```

* Open `index.html` in your browser and *click*, *click*, *click*...

## Start using webpack configuration file

**file: webpack.config.js**
```javascript
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  }
}
```

**part of file: package.json**
```json
{
  "scripts": {
    "test": "jest",
    "build": "webpack"
  }
}
```

[redux]: http://redux.js.org/
[state]: http://redux.js.org/docs/Glossary.html#state
[store]: http://redux.js.org/docs/Glossary.html#store
[action]: http://redux.js.org/docs/Glossary.html#action
[reducer]: http://redux.js.org/docs/Glossary.html#reducer
[egghead]: https://egghead.io/
[webpack]: https://webpack.js.org/
