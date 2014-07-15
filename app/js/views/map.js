define(['text!templates/map.html', 'ember'], function (MapTemplate) {
	var view;

	view = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(MapTemplate)
	});

	return view;
})