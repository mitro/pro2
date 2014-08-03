define(['ember'], function () {
	var welcomeRoute;

	welcomeRoute = Ember.Route.extend({
		renderTemplate: function () {
			this.render({
				outlet: 'page'
			})
		}
	});

	return welcomeRoute;
});