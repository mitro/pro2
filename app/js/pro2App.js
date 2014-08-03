define([
	//routes
	'routes/mapRoute',	
	'routes/welcomeRoute',
	//controllers
	'controllers/mapController',	
	'controllers/megaMissionController',
	//models
	'models/megaMission',
	'models/miniMission',
	//views
	'views/mapView',
	'views/welcomeView',
    'views/megaMissionView',
    'views/miniMissionView',
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
		//controllers
		MapController,
        MegaMissionController,
		//models
		MegaMission,
		MiniMission,
		//views
		MapView,
		WelcomeView,
        MegaMissionView,
        MiniMissionView,
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
		//controllers
		MapController: MapController,
        MegaMissionController: MegaMissionController,
		//models
		MegaMission: MegaMission,
		MiniMission: MiniMission,
		//views
		MapView: MapView,
		WelcomeView: WelcomeView,
        MegaMissionView: MegaMissionView,
        MiniMissionView: MiniMissionView,
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