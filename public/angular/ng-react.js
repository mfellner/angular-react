var angular = require('angular');

var ngReact = angular.module('angularReact').directive('ngReact', function () {
  return {
    controller: 'AppController',
    template: '<div id="ng-react"></div>',
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

module.exports = ngReact;
