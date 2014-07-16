var app,
	bootable = require('bootable'),
	bootableEnv = require('bootable-environment'),
	express = require('express'),
	winston = require('winston'),
	//routes = require('./routes'),
	config = require('./config'), //настройки вынесены в config.json
	port = config.get('port');

app = bootable(express());

app.phase(bootable.initializers('setup/initializers/'));

app.phase(function(){ require('./fakedata'); });

app.phase(bootableEnv('setup/environments'));

app.phase(bootable.routes('routes/index.js'));

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

app.boot(function(err) {
	if (err) { throw err; }
	app.listen(port, function(){
		winston.info('App running on port: ' + port);
	});
});

