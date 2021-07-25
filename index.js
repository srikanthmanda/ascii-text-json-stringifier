import { jsonStringifyAsciiText } from './src/json-stringify-ascii-text.mjs'

export function stringifyText () {
  const asciiText = document.getElementById('ascii_text').value
  console.log(`asciiText: ${asciiText}`)
  try {
    document.getElementById('json_string').value = jsonStringifyAsciiText(asciiText)
  } catch (e) {
    console.log(`Error: ${e}`)
    alert('Sorry, some error occured.')
  }
}

document.getElementById('json_stringify_ascii_text').addEventListener('click', stringifyText)

function copyToClipboard () {
  const jsonString = document.getElementById('json_string')
  jsonString.select()
  document.execCommand('copy')
}

document.getElementById('copy_json_string').addEventListener('click', copyToClipboard)

function clearInputField () {
  document.getElementById('ascii_text').value = ''
}

document.getElementById('clear_input_text').addEventListener('click', clearInputField)
