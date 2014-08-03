define([
	'text!templates/miniMissionTemplate.html',
	'ember'
	], 
	function (
		MiniMissionTemplate
	) {
	var view;

	view = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(MiniMissionTemplate)
	});
	
	return view;
})