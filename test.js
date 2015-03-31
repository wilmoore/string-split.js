'use strict'

/*!
 * imports.
 */

var test = require('tape')

/*!
 * imports (local).
 */

var split = require('./')

/*!
 * tests.
 */

test('full application', function (t) {
  t.plan(1)
  t.deepEqual(split('.', 'example.com'), ['example', 'com'])
})

test('higher order', function (t) {
  t.plan(1)
  t.assert(typeof split(',') === 'function', 'function returned')
})

test('function returned', function (t) {
  t.plan(1)
  t.assert(split(',').length === 1, 'with arity of 1')
})

test('map', function (t) {
  t.plan(1)

  var mapper = split(',')
  var header = ['id,code,name', 'name,age']

  t.deepEqual(header.map(mapper), [
    ['id', 'code', 'name'],
    ['name', 'age']
  ])
})
