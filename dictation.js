var parser = require('./lib/parser');

exports.parse = function(_dictation)
{
	return parser.parse(_dictation);
};
