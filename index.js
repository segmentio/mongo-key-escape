
/**
 * Expose `escape` and `unescape`.
 * http://docs.mongodb.org/manual/faq/developers/#faq-dollar-sign-escaping
 */
exports.escape = escape;
exports.unescape = unescape;
exports.jsonEscape = jsonEscape;
exports.jsonUnescape = jsonUnescape;

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

/**
 * Escapes the mongo `key`.
 *
 * @param {Object} json
 * @return {String}
 */

function jsonEscape (json) {
  for(k in json){
    var temp =json[k];
    delete json[k];
    json[escape(k)] = temp
  }
  return json;
}

/**
 * Unescape the mongo `key`.
 *
 * @param {Object} json
 * @return {String}
 */

function jsonUnescape (json) {
  for(k in json){
    var temp =json[k];
    delete json[k];
    json[unescape(k)] = temp
  }
  return json;
}