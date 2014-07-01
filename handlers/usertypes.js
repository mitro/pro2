var db = require('../libs/db'),
	modelName = 'usertype',
	handlers = require('../libs/crudHandlers')(modelName);

//можно перезаписать: 
// handlers.list = function() {
// 	...
// };

module.exports = handlers;