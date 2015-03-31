# string-split

[![Code Climate](https://codeclimate.com/github/wilmoore/string-split.js/badges/gpa.svg)](https://codeclimate.com/github/wilmoore/string-split.js) [![Build Status](http://img.shields.io/travis/wilmoore/string-split.js.svg)](https://travis-ci.org/wilmoore/string-split.js) [![NPM version](http://img.shields.io/npm/v/string-split.svg)](https://www.npmjs.org/package/string-split) [![NPM downloads](http://img.shields.io/npm/dm/string-split.svg)](https://www.npmjs.org/package/string-split) [![LICENSE](http://img.shields.io/npm/l/string-split.svg)](license) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/feross/standard)

> String.prototype.split as a curried function.

    $ npm install string-split --save

## API Examples & Inspiration

###### Require

    var split = require('string-split');

###### Equivalent to "example.com".split(".")

    split(".", "example.com");
    //=> ["example", "com"]

###### Transform a list with a custom split pattern

    var transform = split("::");
    var foodtypes = ["Entree::Seafood", "Entree::Chicken"];

    foodtypes.map(transform);
    //=> [ ["Entree", "Seafood"], ["Entree", "Chicken"] ]

## License

  [MIT](license)

