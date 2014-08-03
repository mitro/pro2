define([
	'text!templates/megaMissionTemplate.html',
	'ember'
	],
	function (
		MegaMissionTemplate
	) {
	var view;

	view = Ember.View.extend({
        init: function () {
            this._super();
            this.set("controller", Pro2.MegaMissionController.create());
        },
		defaultTemplate: Ember.Handlebars.compile(MegaMissionTemplate)
	});

	return view;
})