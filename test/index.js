
var assert = require('assert');
var key = require('..');

describe('mongo-key-escape', function () {

  describe('#escape', function () {
    it('should escape "."', function () {
      assert.deepEqual(key.escape('.hel.lo ..'), '\uFF0Ehel\uFF0Elo \uFF0E\uFF0E');
    });

    it('should escape "$"', function () {
      assert.deepEqual(key.escape('$hel$lo $$'), '\uFF04hel\uFF04lo \uFF04\uFF04');
    });
  });

  describe('#unescape', function () {
    it('should unescape "."', function () {
      assert.deepEqual(key.unescape('\uFF0Ehel\uFF0Elo \uFF0E\uFF0E'), '.hel.lo ..');
    });

    it('should unescape "$"', function () {
      assert.deepEqual(key.unescape('\uFF04hel\uFF04lo \uFF04\uFF04'), '$hel$lo $$');
    });
  });
});