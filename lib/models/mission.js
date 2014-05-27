/**
 * Created by Дамир Имангулов on 26.05.2014.
 */
/**
 * Mission Schema
 */
var mongoose = require('mongoose');
var MissionSchema = new mongoose.Schema({
    name: String,
    type: { type: String, lowercase: true }
    //todo etc
});

MissionSchema
    .path('name')
    .validate(function(name) {
        return name == undefined || name == '';
    }, 'Необходимо указать название миссии');

module.exports = mongoose.model('Mission', MissionSchema);