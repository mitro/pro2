define(['ember', 'ember-data'], function () {
	var megaMission,
		attr = DS.attr;

	megaMission = DS.Model.extend({
		type: attr('string'),
		name: attr('string'),
        code: attr('string'),
		status: attr('string'),
		miniMissions: DS.hasMany('miniMission')
	});

	return megaMission;
});