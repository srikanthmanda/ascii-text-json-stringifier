export { jsonStringifyAsciiText }

const JSON_ESCAPE_CHARS_REGEX = /"|\n|\r|\f|\t|\\|\/|[\b]/g
// const JSON_ESCAPE_CHARS_REGEX = /\r/g
// const JSON_ESCAPE_CHARS_REGEX = new RegExp('\r', 'g')

const JSON_ESCAPE_CHARS_MAP = {
  '"': '\\"',
  '\n': '\\n',
  '\r': '\\r',
  '\f': '\\f',
  '\t': '\\t',
  '\\': '\\\\',
  '/': '\\/',
  '\b': '\\b'
}

function escapeChars (match) {
  return JSON_ESCAPE_CHARS_MAP[match]
}

function jsonStringifyAsciiText (input) {
  // Following code was used for debugging while developing the utility
  // console.log(`JSON_ESCAPE_CHARS_REGEX.test(input): ${JSON_ESCAPE_CHARS_REGEX.test(input)}`)
  // const iterator = input[Symbol.iterator]()
  // let theChar = iterator.next()
  // while (!theChar.done) {
  //   console.log(`Char: ${theChar.value} \t CharCode: ${theChar.value.charCodeAt(0)}`)
  //   theChar = iterator.next()
  // }

  return input.replaceAll(JSON_ESCAPE_CHARS_REGEX, escapeChars)
}
