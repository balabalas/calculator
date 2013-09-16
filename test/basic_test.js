
var cal = require('../lib/basic');
var should = require('should');

it('add test', function(){
  var res = cal.add(3, 4);
  res.should.equal(7);
});

