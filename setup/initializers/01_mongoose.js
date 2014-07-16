'use strict';

var path = require('path');
var mongoose = require('mongoose');
var express = require('express');
var fs = require('fs');
var config = config = require('../../config');
var requireTree = require('require-tree');
var models = requireTree('../../models/');

var rootDir = process.env.PWD;

module.exports = function(done) {
	mongoose.connect(config.get('mongoose:url'));
	var db = mongoose.connection;
	console.log('hello');
	db.on('error', function (err) {
	    console.log('error db connection - ' + err);
	    done(err);
	});

	db.once('open', function callback () {
	    console.log('db connected');
	    done();
	});

	// Bootstrap models
/*	var modelsPath = rootDir + '/models';
	console.log(modelsPath);
	fs.readdirSync(modelsPath).forEach(function (file) {
	    if (/(.*)\.(js$|coffee$)/.test(file)) {
	        require(modelsPath + '/' + file);
	    }
	});*/
};
