define(['ember'], function () {
	var mapRoute;

	mapRoute = Ember.Route.extend({
		model: function () {
			return this.store.find('megaMission')
		}
	});

	return mapRoute;
});