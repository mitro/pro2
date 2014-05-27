/**
 * Created by Дамир Имангулов on 26.05.2014.
 */
'use strict';

exports.create = function (req, res) {
    var newUser = new User(req.body);
    newUser.provider = 'local';
    newUser.save(function(err) {
        if (err) return res.json(400, err);

        req.logIn(newUser, function(err) {
            if (err) return next(err);

            return res.json(req.user.userInfo);
        });
    });
};
