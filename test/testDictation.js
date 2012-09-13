var util = require('util');
var dictation = require('dictation');

var resourceModel = dictation.parse('An Offering is abstract\nhas a name which is not required and has allowed values Jim, Rachel, Ben, Beth and is encrypted');

console.log(util.inspect(resourceModel, false, 6));