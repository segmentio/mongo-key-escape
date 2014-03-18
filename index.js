
/**
 * Expose `escape` and `unescape`.
 * http://docs.mongodb.org/manual/faq/developers/#faq-dollar-sign-escaping
 */
exports.escape = escape;
exports.unescape = unescape;

/**
 * Escapes the mongo `key`.
 *
 * @param {String} key
 * @return {String}
 */

function escape (key) {
  return key.replace(/\$/g, '\uFF04')
            .replace(/\./g, '\uFF0E');
}

/**
 * Unescapes the mongo `key`.
 *
 * @param {String} key
 * @return {String}
 */

function unescape (key) {
  return key.replace(/\uFF04/g, '$')
            .replace(/\uFF0E/g, '.');
}