# JSON Stringify ASCII Text

[![Node.js CI](https://github.com/srikanthmanda/ascii-text-json-stringifier/actions/workflows/node.js.yml/badge.svg)](https://github.com/srikanthmanda/ascii-text-json-stringifier/actions/workflows/node.js.yml)

Convert ASCII text to JSON String by escaping appropropriate characters.

_Note_: Since ASCII characters are a subset of Unicode characters and none have `u <hex> <hex> <hex> <hex>` format,
this utility doesn't handle characters like Emoji though they are covered in JSON spec.

## Why?

To quickly convert ASCII text, like contents of Base64 encoded files, to JSON string format.
E.g.: X.509 __public__ certificates of PEM format.

## BEWARE

Do no trust external websites with any private or confidential or secret data or information.

## What is a JSON String?

Excerpt from [Introducing JSON](https://www.json.org/json-en.html):
> A string is a sequence of zero or more Unicode characters, wrapped in double quotes, using [backslash escapes](#json-backslash-escape-characters).
> A character is represented as a single character string. A string is very much like a C or Java string.

### JSON backslash escape characters

+ Quotation mark: `"`
+ Reverse solidus: `\`
+ Solidus: `/`
+ Backspace: `b`
+ Formfeed: `f`
+ Linefeed: `n`
+ Carriage return: `r`
+ Horizontal tab: `t`
+ 4 hex digits (unicode characters beyond ASCII): `u hex hex hex hex`

## Resources
+ `String.prototype.replaceAll()`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
+ Can I use replaceAll ?: https://caniuse.com/?search=replaceAll
