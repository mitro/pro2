define(['ember'], function () {
	var mapRoute;

	mapRoute = Ember.Route.extend({
		renderTemplate: function () {
			this.render({
				outlet: 'page'
			})
		}
	});

	return mapRoute;
});