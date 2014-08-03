define([
	'text!templates/welcomeTemplate.html', 
	'ember'
	], 
	function (
		WelcomeTemplate
	) {
	var view;

	view = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(WelcomeTemplate),
		didInsertElement: function () {
			console.log('welcome rendered');
		}
	});

	return view;
})