'use strict';

angular.module('pro2App')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
