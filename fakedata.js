var mongoose = require('mongoose');
var MegaMission = mongoose.model('MegaMission');

var mission1 = new MegaMission({name:'Миссия 1'});
mission1.save(function (err) {
    if (err)
    {
        console.log(mission1.name + ' не сохранена');
    }
});