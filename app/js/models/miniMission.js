define(['ember', 'ember-data'], function () {
	var miniMission,
		attr = DS.attr;

	miniMission = DS.Model.extend({
		type: attr('string'),
		name: attr('string'),
        status: attr('string')
	});

	return miniMission;
});