const stringLength = require('./str-function');

const stringlength = stringLength.stringLength;
const reversestring = stringLength.reverseString;
const add = stringLength.addition;
const subtract = stringLength.subtraction;
const multiply = stringLength.multiplication;
const divide = stringLength.division;

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

describe('Calculator functions', () =>{

  test('Addition', () =>
    expect(add(1,2)).toBe(3)
  )

  test('Subtraction', () =>
    expect(subtract(3,2)).toBe(1)
  )

  test('Multiplication', () =>
    expect(multiply(3,2)).toBe(6)
  )

  test('Division', () => {
    expect(divide(10,2)).toBe(5)
  })
})

