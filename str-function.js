
function stringLength(str) {
  if(str.length === 0) {return 'empty string';}
  if(str.length > 10) {return 'More than 10 characters'}
  return str.length;
}

function reverseString(str) {
  return str.split("").reverse().join("");
}

function addition(a,b){
  return a+b;
}

function subtraction(a,b){
  return a-b;
}
function multiplication(a,b){
  return a*b;
}

function division(a,b){
  return a/b;
}

module.exports = {stringLength, reverseString , addition , subtraction, multiplication, division}

