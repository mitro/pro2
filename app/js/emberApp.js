define(['ember'], function(Ember){

	var emberApp = Ember.Application.create({
		ready: function(){
			console.log('ember app runnning');
		}
	});

	return emberApp;

});