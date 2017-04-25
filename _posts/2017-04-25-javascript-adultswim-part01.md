---
layout:     post
date:       2017-04-25 13:30:00 -0300
title:      "JavaScript para gente grande"
subtitle:   "Parte 1: node.js, npm, require, jest, publish"
author:     Carlos Augusto Borges
categories: javascript node jest npm
comments:   true
serie: javascript-adultswim
---

# Pré-Requisitos

* Node.js 7.x
* NPM 4.x

# O que é [Node.js][node]?

Um runtime de JavaScript baseado na Engine V8 do Chrome. (https://nodejs.org/)

# Hello World

```javascript
// index.js
console.log('Hello World!');
```

```bash
node index.js
rm index.js
```

# [NPM][npm]

```bash
mkdir javascript-adultswim-01
cd javascript-adultswim-01
```

```markdown
<!-- README.md -->
# javascript-adultswim-01

Simple node.js script
```

```bash
npm init --yes
```

```javascript
{
  "name": "javascript-adultswim-01",
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

# require

```bash
npm install --save chalk
```

```javascript
// index.js
var chalk = require('chalk');

console.log(chalk.green('Hello green world!'));
```

# jest

```bash
npm install --save-dev jest
```

```javascript
"scripts": {
  "test": "jest"
}
```

```javascript
// index.test.js
var killAccents = require('./index.js');

test('should remove accent from a', function() {
    expect(killAccents('á')).toBe('a');
});
```

```javascript
// index.js

module.exports = function killAccents(string) {
  return 'a';
};
```

```bash
npm test
```

# more tests

```javascript
// index.test.js
var killAccents = require('./index.js');

test('should remove accents', function() {
    expect(killAccents('áçãéíóúàão')).toBe('acaeiouaao');
});
```

# Pronto

Pronto! Seu código já possui um teste automatizado que não é lá essas coisas, mas
já é um começo.

[node]:                 https://nodejs.org/
[npm]:                  http://npmjs.com/
