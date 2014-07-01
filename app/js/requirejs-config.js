requirejs.config({
  baseUrl: '/js',

  paths: {
  	//libs
  	'jquery': 'libs/dist/jquery.min',
    'ember': 'libs/ember',
    'handlebars': 'libs/handlebars',
    'moment': 'libs/min/moment.min',
    //modules
    'emberApp': 'emberApp'
    //routes

  	//models

   	//controllers

   	//views

  },

  shim: {
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    }
  }
});

requirejs(['app']);