
# mongo-key-escape

  [Escape MongoDB keys](http://docs.mongodb.org/manual/faq/developers/#faq-dollar-sign-escaping) for characters `.` and `$`.

## Installation

    $ npm install mongo-key-escape

## Example

```js
var key = require('mongo-key-escape');

key.escape('event.thing');
// event\uFF0Ething
key.unescape('event\uFF0Ething');
// 'event.thing'

key.escape('event$thing');
// event\uFF04thing
key.unescape('event\uFF04thing');
// 'event$thing'

var object = {"10.0.5":"First.", "10.1.5":"Secund." }
key.jsonEscape(object)
// {"10uFF0E0uFF0E5":"First.", "10uFF0E1uFF0E5":"Secund." }
```

## License

MIT
