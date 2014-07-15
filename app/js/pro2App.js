define([
	//routes
	'routes/map',	
	'routes/welcome',	
	//models
	'models/megaMission',
	'models/miniMission',
	//views
	'views/map',
	'views/welcome',
	//fixtures
	'fixtures/megaMissions',
	'fixtures/miniMissions',
	//libs
	'ember',
	'ember-data'
	], 
	function(
		//routes
		MapRoute,
		WelcomeRoute,
		//models
		MegaMission,
		MiniMission,
		//views
		MapView,
		WelcomeView,
		//fixtures
		FixtureMegaMissions,
		FixtureMiniMissions
	){
	var pro2App; 

	MegaMission.FIXTURES = FixtureMegaMissions;
	MiniMission.FIXTURES = FixtureMiniMissions;

	pro2App = Ember.Application.create({
		//routes
		MapRoute: MapRoute,
		WelcomeRoute: WelcomeRoute,
		//models
		MegaMission: MegaMission,
		MiniMission: MiniMission,
		//views
		MapView: MapView,
		WelcomeView: WelcomeView,
		//store
		Store: DS.Store.extend({
			adapter: DS.FixtureAdapter.extend()
		}),
		
		ready: function(){
			console.log('pro2 running!');
		}
	});

	pro2App.Router.map(function () {
		this.resource('map', { path: '/map' });
		this.resource('welcome', { path: '/' });
	});

	return pro2App;

});