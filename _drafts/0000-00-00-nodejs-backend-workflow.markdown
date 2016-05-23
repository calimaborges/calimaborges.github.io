---
layout: post
title:  "Node.js Backend Workflow"
date:   2016-05-01 21:07:16 -0300
author: Carlos Augusto Borges
categories: node javascript workflow
comments: true
abstract: In this post I talk about Node.js and a very simple workflow.
---

# pre-requisits

It is assumed some knowledge in programming and node.js with npm (http://nodejs.org) installed. The versions used are:

```
node.js 5.5.0
npm 3.3.12
```

The code is available at https://github.com/calimaborges/hello-world.

# why node.js

One of my favorite things about node.js is the possibility to start from nothing and grow the project according to your needs. To demonstrate this capability let’s create a basic web project called hello-world.

So start creating the project folder:

```
$ mkdir hello-world
$ cd hello-world
```

# npm init

`npm init` will create and fill a new `package.json` file inside de current directory. To use it execute`npm init --yes` in the project folder. This will create a `package.json` file inside the folder and fill it with some basic information.

```json
{
	"name": "hello-world",
	"version": "1.0.0",
	"description": "",
	"main": "index.js",
	"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1"
	},
	"keywords": [],
	"author": "",
	"license": "ISC"
}
```

# start with a test
I like to test most part of my code automatically. So the first thing I usually do is install `mocha` and create a basic test.

## install mocha
So let’s install `mocha` and save it as project development dependency. Development because `mocha` is not used im the production app. Access the file `package.json` to see that it added `mocha` newest version to `devDependencies`.

```
$ npm install mocha --save-dev
```

## make npm run tests
Let’s make npm run the tests. To do this open your `package.json` file and replace

```
"scripts": {
	"test": "echo \"Error: no test specified\" && exit 1"
},
```

with:

```
"scripts": {
	"test": “mocha”
},
```

Use `npm test` to run the tests. They will probably give an error informing that no tests were specified.

## create your first test
To create your first test you need to create the `test` folder inside your project.

```
$ mkdir test
```

Now create your test file inside `test/server.js` with the following content:

```javascript
'use strict';

const assert = require('assert');

describe('hello world web app', () => {
	it('should always pass', () => {
		assert(true);
	});
});
```

Use `npm test` to run the tests. They should pass.

## the first fail
Since our objective is to make a web server we should start it before test anything in it. To do this it is necessary to require your future web server file. So let’s start our test with this. Add the following to the top of your tests file (`test/server.js`)

```javascript
const server = require('../server.js');
```

Well that should be enough to get you started with your program since the require will fail. So let's run our tests with `npm test` and see them fail with `Error: Cannot find module '../server.js'`.

## fixing the fail
To fix this let's create the `server.js` file inside the project root directory which should be enough to fix the test. Try it with `npm test` and see your test succeed.

# creating the web server

## start the server inside test
Let's begin by starting and closing our web server inside our tests file. To do this add the following statements  inside `describe('hello world web app')` function in `test/server.js` file.

```javascript
let testServer;
before( done => {
	testServer = server(() => {
		done();
	});
});

after( () => {
	testServer.close();
});
```

The `before` function is executed before test starts. `after`, as expected, is executed after.

Now let's run the test again and it should say that is not a function. So let's fix that. Inside the project root's `server.js` add the following code.

```javascript
'use strict';

module.exports = (callback) => {
	if (callback) callback();
};
```

Now test again and it should pass.

* Não passa por conta do after

## install and use superagent to test webserver
[superagent] is a library used to make web requests. Let's install it  as development dependency since it is used by our test only.

```
$ npm install superagent --save-dev
```

Now let's use superagent to check if our web server is returning `Hello World` text as it should. To do this open your `test/server.js` file and add the require statement for superagent:

```javascript
const request = require('superagent');
```

Then replace:

```javascript
it('should always pass', () => {
	assert(true);
});
```

with:

```javascript
it('should get hello world inside /', (done) => {
	request.get('http://localhost:1337/', (err, res) => {
		assert.ifError(err);
		assert.equal(res.text, 'Hello World');
		done();
	});
});
```

Is it clear enough? We just changed the `should always pass` with `should get hello world inside /`. The new test use `superagent` as request and do a `GET` in the server we started in the `before` method. Then it takes the response and check if text matches what we expected. We have to call `done()` inside the callback to notify `mocha` that the test is done.

Now let's run the test and watch it fail with `Error: connect ECONNREFUSED 127.0.0.1:1337`.

## install and use express to create a web server
To create our web server we will use [express]. Let’s use install it and save it as a dependency inside our `package.json`.

```
$ npm install express --save
```

## create hello world web server
Other thing I love about node.js is the fact that the developer has complete control over the web server since the developer is the one responsible to implement it. So let’s do this. Now change  the `server.js` file and create a express server inside it. To do this add the following require statement.

```javascript
let express = require('express');
```

Now add the following code inside the existing function before `if (callback) callback();` statement.

```javascript
let app = express();

app.get('/', (req, res) => {
	res.send('Hello People');
});

app.listen(1337, callback);
```

Ok. Now let's run our test and watch it fail with `Uncaught AssertionError: 'Hello People' == 'Hello World'`. Replace `Hello People` with `Hello World`, run the test again and watch it pass. Ok! Great success!

## run the server and visualize it in the browser
Ok, so now we saw that the automated tests are working but haven't seen anything inside a web browser where it should be.

### create index.js
To start the web server we will create the `index.js` file in the root directory and fill it with the following content.

```javascript
'use strict';

const server = require('./server.js');

server(() => {
	console.log("web server started in http://localhost:1337/");
});
```

### start web server with npm
Let's use npm to run our web server. To do this just add `"start": "node index.js"` inside inside the `scripts` property of the `package.json` file. `scripts` property should now look like the following lines of code.

```
"scripts": {
	"test": "mocha",
	"start": "node index.js"
},
```

### start and view the web server
Start the web server with `npm start` and open your web browser and point it to [http://localhost:1337/](http://localhost:1337/).


# conclusion
Well this is the first part of tutorial. We created a node.js hello world web server and tested it. It looks a little bit overwhelming but most of the overwhelming part is due to the automated tests.  In future lessons we will make this server serve static html pages and create a yeoman skeleton to make the process easier.

# simple react.js fronted

# browserify introduction

# browserify, babel and react.

[superagent]:   https://github.com/visionmedia/superagent
[express]:      http://expressjs.com/
