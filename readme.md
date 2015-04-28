# string-split
> String.prototype.split as a curried function.

[![Build Status](http://img.shields.io/travis/wilmoore/string-split.js.svg)](https://travis-ci.org/wilmoore/string-split.js) [![Code Climate](https://codeclimate.com/github/wilmoore/string-split.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/string-split.js) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

```shell
npm install string-split --save
```

###### npm stats

[![npm](https://img.shields.io/npm/v/string-split.svg)](https://www.npmjs.org/package/string-split) [![NPM downloads](http://img.shields.io/npm/dm/string-split.svg)](https://www.npmjs.org/package/string-split) [![Dependency Status](https://gemnasium.com/wilmoore/string-split.js.svg)](https://gemnasium.com/wilmoore/string-split.js)

## API Examples & Inspiration

###### Require

```js
var split = require('string-split');
```

###### Equivalent to "example.com".split(".")

```js
split(".", "example.com");
//=> ["example", "com"]
```

###### Transform a list with a custom split pattern

```js
var transform = split("::");
var foodtypes = ["Entree::Seafood", "Entree::Chicken"];

foodtypes.map(transform);
//=> [ ["Entree", "Seafood"], ["Entree", "Chicken"] ]
```

## License

[![GitHub license](https://img.shields.io/github/license/wilmoore/string-split.js.svg)]()
