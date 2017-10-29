---
layout:     post
date:       2017-04-27 13:30:00 -0300
title:      "Configuring Jest, Travis and Coveralls"
author:     Carlos Augusto Borges
categories: javascript jest node coveralls travis
comments:   true
---

Easy steps to use travis, jest and coveralls.

# Pre-requisits

* [GitHub account](http://github.com)
* [Travis CI account](http://travis-ci.org)
* [Coveralls account](http://coveralls.io)
* [Node.js](http://nodejs.org)
* [NPM](http://npmjs.com)

# Start the project

```bash
mkdir cover-project
cd cover-project
npm init --yes
```

# Create your first test

## Install Jest

```bash
npm install --save-dev jest
```

## Configure `package.json`

**part of file: package.json**
```json
"scripts": {
  "test": "jest --coverage"
}
```
## Edit a test file

**file: src/index.test.js**
```javascript
const greeter = require(".");
test("should return hello message", () => {
  expect(greeter()).toBe("Hello, world!");
});
```

## Make your test pass

**file: src/index.js**
```javascript
module.exports = () => "Hello, world!";
```

# Coveralls

## Install coveralls node package

```bash
npm install --save-dev coveralls
```

# Travis CI

## Add travis configuration

**file: .travis.yml**
```yml
language: node_js
node_js:
        - "8"

after_script:
  - cat ./coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js
```

# Git

## Create .gitignore

**file: .gitignore**
```
coverage
node_modules
```

## Init git project

```
git init
git add --all
git commit --message="First commit"
```

## Push git project to GitHub

```
git remote add origin https://github.com/<user>/<project>
git push -u origin master
```

## Register projects

* Register repository at travis
* Register repository at coveralls

# Done!

* Copy your badges to your `README.md` and be happy :-)

* Example:
  * [https://travis-ci.org/calimaborges/cover-project](https://travis-ci.org/calimaborges/cover-project)
  * [https://coveralls.io/github/calimaborges/cover-project](https://coveralls.io/github/calimaborges/cover-project)
  * [https://github.com/calimaborges/cover-project](https://github.com/calimaborges/cover-project)