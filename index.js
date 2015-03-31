'use strict'

/**
 * exports.
 */

module.exports = split

/**
 * Curried `String.prototype.split`.
 *
 * @param {String|RegExp} pattern
 * Pattern used to split string.
 *
 * @param {String} string
 * String to split.
 *
 * @return {Array}
 * List of split string parts.
 */

function split (pattern) {
  return arguments.length > 1
    ? splitter(pattern, arguments[1])
    : splitter.bind(null, pattern)
}

function splitter (pattern, string) {
  return string.split(pattern)
}
