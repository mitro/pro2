define(['ember', 'ember-data'], function () {
	var miniMission,
		attr = DS.attr;

	miniMission = DS.Model.extend({
		name: attr('string')
	});

	return miniMission;
});