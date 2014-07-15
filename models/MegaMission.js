'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var MegaMissionSchema = new Schema({
  name: String
});

module.exports = mongoose.model('MegaMission', MegaMissionSchema);
