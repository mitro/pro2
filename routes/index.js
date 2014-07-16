'use strict';

/**
* Module dependencies.
*/
/*var log = require('winston-wrapper')(module);
var config = require('nconf');*/

var requireTree = require('require-tree');
var controllers = requireTree('../controllers');
var mustAuthenticatedMw = require('../helpers/must-authenticated');
var megaMissions = require('../controllers/MegaMissions');
var express = require('express');
// End of dependencies.


module.exports = function() {

	this.use('/js/libs/', express.static('bower_components/'));
	this.use('/node_modules/', express.static('node_modules'));
	this.use('/css/', express.static('public/css'));
	this.use('/fonts/', express.static('public/fonts'));
	this.use('/img/', express.static('public/img'));

	this.use('/test', express.static('app_test/'));
	this.use('/test', express.static('app'));

	this.get('/', function (req, res){
		res.render('index.html');
	});

	this.get('/test', function (req, res/*, next*/){
		res.render('test/index.html');
	});

	this.get('/api/megamissions', megaMissions.list);

	// Auth controllers
	this.post('/login', controllers.users.login);
	this.post('/register', controllers.users.register);
	this.get('/logout', controllers.users.logout);

};
