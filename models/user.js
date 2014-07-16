'use strict';

/**
* Module dependencies.
*/
//var log = require('winston-wrapper')(module);
var mongoose = require('mongoose');

// End of dependencies.


var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  books: []
});

mongoose.model('user', UserSchema);
