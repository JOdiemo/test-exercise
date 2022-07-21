
function stringLength(str) {
  if(str.length === 0) {return 'empty string';}
  if(str.length > 10) {return 'More than 10 characters'}
  return str.length;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString("hello");

module.exports = {stringLength, reverseString }

