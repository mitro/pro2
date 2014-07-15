'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    
/**
 * Thing Schema
 */
var MiniMissionSchema = new Schema({
  name: String
});

mongoose.model('MiniMission', MiniMissionSchema);
