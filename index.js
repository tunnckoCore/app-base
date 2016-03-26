/*!
 * app-base <https://github.com/tunnckoCore/app-base>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var extend = require('static-extend')
var define = require('define-property')
var delegate = require('delegate-properties')

function AppBase () {
  if (!(this instanceof AppBase)) {
    return new AppBase()
  }
}

delegate(AppBase.prototype, {
  delegate: function delegateProperties (provider) {
    delegate(this, provider)
    return this
  },
  define: function defineProperty (key, value) {
    define(this, key, value)
    return this
  }
})

delegate(AppBase, {
  delegate: delegate,
  define: define
})

define(AppBase, 'extend', extend(AppBase, function (Child) {
  delegate(Child, {
    delegate: delegate,
    define: define
  })
}))

/**
 * Expose `AppBase` instance
 *
 * @type {AppBase}
 * @private
 */

module.exports = new AppBase()

/**
 * Expose `AppBase` constructor
 *
 * @type {AppBase}
 * @private
 */

module.exports.AppBase = AppBase
