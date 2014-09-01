Canvas Layer
============
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Factory to create canvas layers.

Defines a canvas `layer` generator and its associated methods.



## Installation

``` bash
$ npm install xfig-canvas
```

## Usage

To create a new canvas layer generator,

``` javascript
var Canvas = require( 'xfig-canvas' );

var canvas = new Canvas();
```

A layer generator has the following methods...


#### canvas.create()

This method creates a new canvas layer.

``` javascript
// example
``` 

#### canvas.root()

This method returns the root `DOMElement` of the canvas layer. To get the layer root,

``` javascript
canvas.root();
```


#### canvas.parent()

This method returns the parent `DOMElement` of the canvas layer.

``` javascript
canvas.parent();
```


#### canvas.children()

This method returns the canvas layer children. The children are returned in an `object` store. To get the layer children,

``` javascript
canvas.children();
```

Note: initially, this is an empty object. As layers are appended to the canvas layer, the children object is updated.


#### canvas.config()

This method returns the canvas configuration as a JSON blob. To get the layer configuration,

``` javascript
canvas.config();
```

Note: initially, this is an empty object. As layers are appended to the canvas layer, the configuration object is updated to include all child configurations.


## Examples

``` javascript
var Canvas = require( 'xfig-canvas' );

// Example
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Notes




## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.



[npm-image]: http://img.shields.io/npm/v/xfig-canvas.svg
[npm-url]: https://npmjs.org/package/xfig-canvas

[travis-image]: http://img.shields.io/travis/figure-io/canvas/master.svg
[travis-url]: https://travis-ci.org/figure-io/canvas

[coveralls-image]: https://img.shields.io/coveralls/figure-io/canvas/master.svg
[coveralls-url]: https://coveralls.io/r/figure-io/canvas?branch=master

[dependencies-image]: http://img.shields.io/david/figure-io/canvas.svg
[dependencies-url]: https://david-dm.org/figure-io/canvas

[dev-dependencies-image]: http://img.shields.io/david/dev/figure-io/canvas.svg
[dev-dependencies-url]: https://david-dm.org/dev/figure-io/canvas

[github-issues-image]: http://img.shields.io/github/issues/figure-io/canvas.svg
[github-issues-url]: https://github.com/figure-io/canvas/issues