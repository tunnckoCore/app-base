/*!
 * app-base <https://github.com/tunnckoCore/app-base>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

// var test = require('assertit')
var AppBase = require('./index').AppBase

/**
 * [Foo description]
 */
function Foo () {
  AppBase.call(this)
  this.foo = 123
  this.define('cache', {one: 123})
}

AppBase.extend(Foo, {
  isFoo: 'Foo'
})
AppBase.delegate(Foo.prototype, {
  isFooHidden: 'Foo'
})

/**
 * [Bar description]
 */
function Bar () {
  Foo.call(this)
  this.bar = 456
  this.define('options', {two: 456})
}

Foo.extend(Bar, {
  isBar: 'Bar'
})
Foo.delegate(Bar.prototype, {
  isBarHidden: 'Bar'
})

/**
 * [app description]
 * @type {Bar}
 */
var app = new Bar()

// Bar
console.log('=== Bar instance lookup =')
console.log(app) // => Bar { foo: 123, bar: 456 }
console.log(app.foo) // => 123
console.log(app.bar) // => 456
console.log(app.isFoo) // => 'Foo'
console.log(app.isFooHidden) // => 'Foo'
console.log(app.isBar) // => 'Bar'
console.log(app.isBarHidden) // => 'Bar'
console.log(app.cache) // => { one: 123 }
console.log(app.options) // => { two: 456 }

console.log(app._parent_) // => Foo { isFoo: 'Foo' }
console.log(app._parent_.foo) // => undefined
console.log(app._parent_.isFooHidden) // => 'Foo'
console.log(app._parent_.cache) // => undefined

console.log(app._parent_._parent_) // => AppBase {}
console.log(app._parent_._parent_._parent_) // => undefined

// Bar prototype methods
console.log('=== Bar prototype methods =')
console.log(app.delegate)
console.log(app.define)
console.log(app.visit)
console.log(app.isObject)

// Bar static methods
console.log('=== Bar static methods =')
console.log(Bar.delegate)
console.log(Bar.inherit)
console.log(Bar.define)

/**
 * [a description]
 * @type {Foo}
 */
var a = new Foo()
// Foo
console.log('=== Foo instance lookup =')
console.log(a) // => Foo { foo: 123 }
console.log(a.foo) // => 123
console.log(a.bar) // => undefined
console.log(a.isFoo) // => 'Foo'
console.log(a.isFooHidden) // => 'Foo'
console.log(a.isBar) // => undefined
console.log(a.isBarHidden) // => undefined
console.log(a.cache) // => { one: 123 }
console.log(a.options) // => undefined

console.log(a._parent_) // => AppBase {}
console.log(a._parent_.foo) // => undefined
console.log(a._parent_.isFooHidden) // => undefined
console.log(a._parent_.cache) // => undefined

// Bar prototype methods
console.log('=== Foo prototype methods =')
console.log(a.delegate)
console.log(a.define)
console.log(a.visit)
console.log(a.isObject)

// Bar static methods
console.log('=== Foo static methods =')
console.log(Foo.delegate)
console.log(Foo.inherit)
console.log(Foo.define)
