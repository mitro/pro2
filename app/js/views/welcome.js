define(['text!templates/welcome.html', 'ember'], function (WelcomeTemplate) {
	var view;

	view = Ember.View.extend({
		defaultTemplate: Ember.Handlebars.compile(WelcomeTemplate)
	});

	return view;
})