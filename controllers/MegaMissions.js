'use strict';

require('../models/MegaMission');
var mongoose = require('mongoose'),
    MegaMission = mongoose.model('MegaMission');

/**
 * Get awesome things
 */
exports.list = function(req, res) {
  MegaMission.find(function (err, missions) {
    if (!err) {
      return res.json(missions);
    } else {
      return res.send(err);
    }
  });
};