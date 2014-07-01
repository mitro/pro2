module.exports.setup = function(app, handlers){
	
	app.get('/', function (req, res, next){
		res.render('index.html');
	});

	app.get('/test', function (req, res, next){
		res.render('test/index.html');
	});


	app.get('/api/usertypes', handlers.userTypes.list);
	app.get('/api/usertypes/:id', handlers.userTypes.get);
	app.post('/api/usertypes', handlers.userTypes.create);
	app.put('/api/usertypes/:id', handlers.userTypes.update);
	app.delete('/api/usertypes/:id', handlers.userTypes.remove);


};