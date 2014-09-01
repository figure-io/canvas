
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	Canvas = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'xfig-canvas', function tests() {
	'use strict';

	// SETUP //

	var canvas;

	// Any tasks to run before each test:
	beforeEach( function() {
		canvas = new Canvas();
	});


	// TESTS //

	it( 'should export a constructor', function test() {
		expect( Canvas ).to.be.a( 'function' );
	});

	describe( 'create', function tests() {

		it( 'should provide a method to create a canvas layer', function test() {
			expect( canvas.create ).to.be.a( 'function' );
		});

		it( 'should create a root layer element' );

	});

	describe( 'root', function tests() {

		it( 'should provide a method to return the root layer element', function test() {
			expect( canvas.root ).to.be.a( 'function' );
		});

		it( 'should return the root layer element' );

	});

	describe( 'parent', function tests() {

		it( 'should provide a method to return the parent DOMElement', function test() {
			expect( canvas.parent ).to.be.a( 'function' );
		});

		it( 'should return the parent DOMElement' );

	});

	describe( 'children', function tests() {

		it( 'should provide a method to get child layers', function test() {
			expect( canvas.children ).to.be.a( 'function' );
		});

		it( 'should return the layer children' );

	});

	describe( 'config', function tests() {

		it( 'should provide a method to get a layer configuration', function test() {
			expect( canvas.config ).to.be.a( 'function' );
		});

		it( 'should return the layer configuration' );

	});

});