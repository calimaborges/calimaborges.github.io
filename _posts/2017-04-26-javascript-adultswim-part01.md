---
layout:     post
date:       2017-04-26 13:30:00 -0300
title:      "JavaScript for Grownups"
subtitle:   "Part 1: node.js, npm, require, jest, pure functions"
author:     Carlos Augusto Borges
categories: javascript node jest npm pure functions
comments:   true
serie: javascript-adultswim
---

In this first part of the series we will learn about node.js, npm, require, jest and pure functions.

This post is better used as reference. To understand in a more complete way please refer to Dan Abramov's "[Getting Started with Redux](https://egghead.io/courses/getting-started-with-redux)"
course at [egghead][egghead] until lesson "[Pure and Impure Functions](https://egghead.io/lessons/javascript-redux-pure-and-impure-functions)".

{% include posts/intro-javascript-adultswim.html %}


# Pre-requisits

* Node.js
* NPM

# What is [Node.js][node]?

Runtime built on Chrome's V8 JavaScript engine.

# Hello World

**file: index.js**
```javascript
console.log('Hello World!');
```

**Command Line**
```bash
node index.js
rm index.js
```

# [NPM][npm]

**Command Line**
```bash
mkdir javascript-adultswim
cd javascript-adultswim
```

**file: README.md**
```markdown
# javascript-adultswim

Simple node.js script
```

**Command Line**
```bash
npm init --yes
```

**file: package.json**
```json
{
  "name": "javascript-adultswim",
  "version": "1.0.0",
  "description": "Simple node.js script",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

# jest

**Comand Line**
```bash
npm install --save-dev jest
```

**part of file: package.json**
```json
{
  "scripts": {
    "test": "jest"
  }
}
```

**counter.test.js**
```javascript
var counter = require('./counter');

test('should return initial state if state is undefined', function() {
  expect(counter(undefined, {})).toBe(0);
});

test('increment state', function() {
    expect(counter(0, { type: 'INCREMENT' })).toBe(1);
    expect(counter(1, { type: 'INCREMENT' })).toBe(2);
});

test('decrement state', function() {
  expect(counter(0, { type: 'DECREMENT' })).toBe(-1);
  expect(counter(1, { type: 'DECREMENT' })).toBe(0);
});

test('should return current state for unknown action', function() {
  expect(counter(1, { type: 'UKNOWN_TYPE' })).toBe(1);
});
```

**Command Line**
```bash
npm test -- --watch
```

**counter.js**
```javascript
module.exports = function counter(state, action) {
  if (state === undefined) return 0;
  switch (action.type) {
    case 'INCREMENT': return state + 1;
    case 'DECREMENT': return state - 1;
    default: return state;
  }
};
```

**index.js**
```javascript
var counter = require('./counter');

console.log(counter(0, { type: 'INCREMENT' })); // 1
console.log(counter(1, { type: 'DECREMENT' })); // 0
```

# Pure and impure functions

## Pure function

* no side effects (database or network calls)
* idempotent (return value always the same for the same arguments)
* immutable (can't change the argument received)

*ps: the previous example is pure*

## Impure function

* not pure :-)


[node]: https://nodejs.org/
[npm]: https://npmjs.com/
[egghead]: https://egghead.io/
