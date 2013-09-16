
/***
 *
 * Basic operations
 *
 * Add Subtract Multiply Divide
 *
 * **/

var util = require('util');

var cal = {};

function checkNumbers(a, b){
  if(!util.isNumber(a) || !util.isNumber(b)) {
    throw new Error('This function needs two number!');
  }
}

cal.add = function(a, b) {
  checkNumbers(a, b);
  return a + b;
};

cal.sub = function(a, b) {
  checkNumbers(a, b);
  return a - b;
};

cal.multi = function(a, b) {
  checkNumbers(a, b);
  return a * b;
};

cal.div = function(a, b) {
  checkNumbers(a, b);
  return a / b;
};

module.exports = cal;
