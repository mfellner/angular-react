var angular = require('angular');
var React   = require('react');
var Clicker = require('../react/clicker.jsx');

var app = angular.module('angularReact', []);

app.controller('AppController', function ($scope) {
  // We need to put 'Clicker' into the controller's scope.
  $scope.Clicker = Clicker;
});

// Include the directive.
require('./ng-react');

module.exports = app;
