# [app-base][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Beating the boilerplate with elegance. Basic and common methods for your node.js application.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## That's temp fork of [app-base][]
> If you want to install it use the `user/repo` pattern that [npm][] provides.

```
npm i tunnckoCore/app-base --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const AppBase = require('app-base').AppBase

// or just use the instance
const app = require('app-base')

app.define('hello', function helloWorld (foo, world) {
  console.log('Hello', foo, world)
})
app.hello('bar', 'qux') // => 'Hello bar qux'
```

### Instance methods
> Using following libraries, they internally pass `this` (the instance) as first argument.

- [delegate-properties][] `app.delegate(obj)` - adds non-enumerable methods to `app` from `obj`
- [define-property][] `app.define(key, value)` - adds non-enumerable `key` to `app`

```js
console.log(app)           // => AppBase { AppBase: [Function: AppBase] }
console.log(app.delegate)  // => [Function: delegateProperties]
console.log(app.define)    // => [Function: defineProperty]
```

### Static methods
> Using following libraries:

- [delegate-properties][] `AppBase.delegate(Parent.prototype, proto)`
- [define-property][] `AppBase.define(Parent.prototype, key, value)`
- [static-extend][] `AppBase.extend(Parent)`

```js
console.log(AppBase)           // => [Function: AppBase]
console.log(AppBase.delegate)  // => [Function: delegate]
console.log(AppBase.define)    // => [Function: defineProperty]
console.log(AppBase.extend)    // => [Function: extend]
```

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/app-base/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[app-base]: https://github.com/tunnckocore/app-base
[delegate-properties]: https://github.com/jonschlinkert/delegate-properties
[define-property]: https://github.com/jonschlinkert/define-property
[static-extend]: https://github.com/jonschlinkert/static-extend
[npm]: https://docs.npmjs.com/

[npmjs-url]: https://www.npmjs.com/package/app-base
[npmjs-img]: https://img.shields.io/npm/v/app-base.svg?label=app-base

[license-url]: https://github.com/tunnckoCore/app-base/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/app-base
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/app-base.svg

[travis-url]: https://travis-ci.org/tunnckoCore/app-base
[travis-img]: https://img.shields.io/travis/tunnckoCore/app-base/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/app-base
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/app-base.svg

[david-url]: https://david-dm.org/tunnckoCore/app-base
[david-img]: https://img.shields.io/david/tunnckoCore/app-base.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

