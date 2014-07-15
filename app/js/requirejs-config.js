requirejs.config({
  baseUrl: '/js',

  paths: {
  	//libs
  	'jquery': 'libs/jquery/jquery',
    'ember': 'libs/ember/ember',
    'ember-data': 'libs/ember-data/ember-data',
    'handlebars': 'libs/handlebars/handlebars',
    'text': 'libs/requirejs-text/text',
    'hbs': 'libs/requirejs-ember-handlebars/ehbs',
  },

  hbs: {
    disableI18n: true,
    templateExtension: 'html'
  },

  shim: {
    'ember': {
      deps: ['handlebars', 'jquery'],
      exports: 'Ember'
    },
    'ember-data':{
        deps:[ 'ember'],
        exports:'DS'
    }
  }
});

requirejs(['app']);