import { jsonStringifyAsciiText } from '../src/json-stringify-ascii-text.mjs'

test('replace \r with \\r', () => {
  expect(jsonStringifyAsciiText('\r')).toBe('\\r')
})

test('replace \n with \\n', () => {
  expect(jsonStringifyAsciiText('\n')).toBe('\\n')
})

test('replace \f with \\f', () => {
  expect(jsonStringifyAsciiText('\f')).toBe('\\f')
})

test('replace \t with \\t', () => {
  expect(jsonStringifyAsciiText('\t')).toBe('\\t')
})

test('replace " with \\"', () => {
  expect(jsonStringifyAsciiText('"')).toBe('\\"')
})

test('replace / with \\/', () => {
  expect(jsonStringifyAsciiText('/')).toBe('\\/')
})

test('replace \\ with \\\\', () => {
  expect(jsonStringifyAsciiText('\\')).toBe('\\\\')
})

test('replace \b with \\b', () => {
  expect(jsonStringifyAsciiText('\b')).toBe('\\b')
})

test('replace multiple occurrences in a multi-line string', () => {
  expect(jsonStringifyAsciiText('0:" 1:/ 2:\\ 3:\t 4:\b 5:\n 6:\r 7:\f 8:" 9:/ A:\\ B:\t C:\b D:\n E:\r F:\f'))
    .toBe('0:\\" 1:\\/ 2:\\\\ 3:\\t 4:\\b 5:\\n 6:\\r 7:\\f 8:\\" 9:\\/ A:\\\\ B:\\t C:\\b D:\\n E:\\r F:\\f')
})
