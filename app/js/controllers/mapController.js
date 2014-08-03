define(['ember'], function () {
	var controller;

	controller = Ember.ArrayController.extend({
		megaMissions: function () {
			return this.store.find('megaMission');
		}.property()
	});

	return controller;
})