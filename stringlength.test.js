const stringLength = require('./str-function');

const stringlength = stringLength.stringLength
const reversestring = stringLength.reverseString

describe('theString', () =>{
test('length is 5', () =>
  expect(stringlength('Jorum')).toBe(5)
)
test('length is empty', () =>
  expect(stringlength('')).toBe('empty string')
)

test('lengtth is greater than 10', () =>
  expect(stringlength('Hi I am glad to join microverse')).toBe('More than 10 characters')
)

test('reverse string -Jorum', () =>{
  expect(reversestring("Jorum")).toBe('muroJ')
})
})



