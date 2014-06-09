/**
 * Created by Дамир Имангулов on 26.05.2014.
 */
'use strict';

var mongoose = require('mongoose'),
    Mission = mongoose.model('Mission');

/**
 * Get awesome things
 */
exports.getMissions = function(req, res) {
    if (!req.query.scopeId) res.send("Не указана предметная область");
    return Mission.find({scopeId : req.query.scopeId},function (err, things) {
        if (!err) {
            return res.json(things);
        } else {
            return res.send(err);
        }
    });
};
