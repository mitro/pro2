var app,
	express = require('express'),
	path = require('path'),
	winston = require('winston'),
	routes = require('./routes'),
	config = require('./config'), //настройки вынесены в config.json
    mongoose = require('mongoose'),
    fs = require('fs'),
	port = config.get('port');

app = express();

app.use(express.json());//json parser
app.use(express.methodOverride());// put & delete методы для api

app.use(express.static('app'));

mongoose.connect(config.get('mongoose:url'));
db = mongoose.connection;

db.on('error', function (err) {
    console.log('error db connection - ' + err);
});

db.once('open', function callback () {
    console.log('db connected');
});

// Bootstrap models
var modelsPath = path.join(__dirname, 'models');
fs.readdirSync(modelsPath).forEach(function (file) {
    if (/(.*)\.(js$|coffee$)/.test(file)) {
        require(modelsPath + '/' + file);
    }
});

require('./fakedata');

routes.setup(app);

app.use('/js/libs/', express.static('bower_components/'));
app.use('/node_modules/', express.static('node_modules'));
app.use('/css/', express.static('public/css'));
app.use('/fonts/', express.static('public/fonts'));
app.use('/img/', express.static('public/img'));

app.use('/test', express.static('app_test/'));
app.use('/test', express.static('app'));


// обработка ошибок
app.use(function(err, req, res, next){
	console.log(err.name);
	if (err.name == "ValidationError"){
		res.send(400, err);
	} else {
		next(err);
	}
});

app.use(function(err, req, res/*, next*/){
	res.send(500, err);
});

app.listen(port, function(){
	winston.info('App running on port: ' + port);
});