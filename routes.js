module.exports.setup = function(app){
    var megaMissions = require('./controllers/MegaMissions');
	app.get('/', function (req, res){
		res.render('index.html');
	});

	app.get('/test', function (req, res/*, next*/){
		res.render('test/index.html');
	});

	app.get('/api/megamissions', megaMissions.list);
};