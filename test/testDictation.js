var util = require('util');
var parser = require('../lib/parser');

var resourceModel = parser.parse('An Offering is abstract\nhas a name which is not required and has allowed values Jim, Rachel, Ben, Beth and is encrypted');

console.log(util.inspect(resourceModel, false, 6));