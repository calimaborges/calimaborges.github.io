---
layout:     post
date:       2017-07-20 22:45:00 -0300
title:      "JavaScript for Grownups"
subtitle:   "Part 3: better webpack"
author:     Carlos Augusto Borges
categories: javascript webpack
comments:   true
serie: javascript-adultswim
---

In this third part of the series we will dive into webpack's configuration file.

This post is better used as reference. To understand in a more complete way please refer to Webpack's "[Guide](https://webpack.js.org/guides/)" at [webpack site][webpack]

{% include posts/intro-javascript-adultswim.html %}

# Pre-requisits

* Node.js
* NPM

# [Webpack][webpack]

## Definition

Webpack is a module bundler for modern JavaScript applications.

## Output

Start with a better place to put the generated file

**file: webpack.config.js**
```javascript
var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  }
};
```

## Loaders

**file: webpack.config.js**
```javascript
var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
+   module: {
+     rules: [
+       {
+         test: /\.css$/,
+         use: [
+           'style-loader',
+           'css-loader'
+         ]
+       }
+     ]
+   }
};
```

[redux]: http://redux.js.org/
[state]: http://redux.js.org/docs/Glossary.html#state
[store]: http://redux.js.org/docs/Glossary.html#store
[action]: http://redux.js.org/docs/Glossary.html#action
[reducer]: http://redux.js.org/docs/Glossary.html#reducer
[egghead]: https://egghead.io/
[webpack]: https://webpack.js.org/
