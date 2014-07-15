var app,
	express = require('express'),
	path = require('path'),
	winston = require('winston'),
	routes = require('./routes'),
	config = require('./libs/config'), //настройки вынесены в config.json
	db = require('./libs/db'),
	handlers,
	port = config.get('port');

app = express();

app.use(express.json());//json parser
app.use(express.methodOverride());// put & delete методы для api

app.use(express.static('app'));

app.use('/js/libs/', express.static('bower_components/'));
app.use('/node_modules/', express.static('node_modules'));
app.use('/css/', express.static('public/css'));
app.use('/fonts/', express.static('public/fonts'));
app.use('/img/', express.static('public/img'));

app.use('/test', express.static('app_test/'))
app.use('/test', express.static('app'))


// обработка ошибок
app.use(function(err, req, res, next){
	console.log(err.name);
	if (err.name == "ValidationError"){
		res.send(400, err);
	} else {
		next(err);
	}
});

app.use(function(err, req, res, next){
	res.send(500, err);
});

//обработчики роутеров
handlers = {
	userTypes: require('./handlers/usertypes')
};

// настройка роутеров
routes.setup(app, handlers);

app.listen(port, function(){

	winston.info('App running on port: ' + port);	
	
	//загрузка схем моделей
	db.init(path.join(__dirname, 'models'), function(err, data){
		winston.info('All models are initialized');
	});

});