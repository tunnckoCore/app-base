/*!
 * app-base <https://github.com/tunnckoCore/app-base>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var cu = require('class-utils')
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
  },
  isObject: cu.isObject
})

delegate(AppBase, {
  delegate: delegate,
  inherit: cu.inherit,
  define: define
})

define(AppBase, 'extend', cu.extend(AppBase, function extend (Child) {
  delegate(Child, {
    delegate: delegate,
    inherit: cu.inherit,
    define: define
  })
}))

/**
 * Expose `AppBase` constructor and instance
 * @type {AppBase}
 */

module.exports = new AppBase()
module.exports.AppBase = AppBase
