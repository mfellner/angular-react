/**
 * AngularJS application
 */

var app = angular.module('angularReact', []);

app.controller('AppController', function ($scope, $window) {
  'use strict';
  // In this example 'Clicker' is global variable but Angular's scopes
  // are isolated. So we need to put 'window' into the scope manually.
  $scope.window = $window;
});

app.directive('ngReact', function () {
  'use strict';
  return {
    controller: 'AppController',
    template: '<div id="ng-react" class="row"></div>',
    replace: true,
    scope: {
      component: '='
    },
    link: function (scope, element, attrs) {
      // React renders the given component with the directive's attrs as properties.
      React.render(
        React.createElement(scope.component, attrs),
        element[0]
      );
    }
  };
});
