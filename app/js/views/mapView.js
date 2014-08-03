define([
	'text!templates/mapTemplate.html', 
	'ember'
	], 
	function (
		MapTemplate
	) {
	var view;

	view = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(MapTemplate)
	});
	
	return view;
})