define(['ember', 'ember-data'], function () {
	var megaMission,
		attr = DS.attr;

	megaMission = DS.Model.extend({
		name: attr('string'),
		status: attr('string'),
		miniMissions: DS.hasMany('miniMission')
	});

	return megaMission;
});