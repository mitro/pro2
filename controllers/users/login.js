'use strict';

/**
* Module dependencies.
*/
/*var log = require('winston-wrapper')(module);
var config = require('nconf');*/

var passport = require('passport');

// End of dependencies.


module.exports = function(req, res, next) {

  //log.info('someone trying to login');
  console.log(req.body);
  passport.authenticate('local',
    function(err, user, info) {
      //log.info('user:', user);
      return err
        ? next(err)
        : user
          ? req.logIn(user, function(err) {
              return err
                ? next(err)
                : res.json({ success: true });
            })
          : res.status({success: false, message: 'Incorrect login/password'});
    }
  )(req, res, next);

};
