var app = angular.module('angularReact', []);

app.controller('AppController', function ($scope, $window) {
  'use strict';
  $scope.Clicker = $window.Clicker;
});

app.directive('ngReact', function () {
  'use strict';
  return {
    template: '<div id="ng-react" class="row"></div>',
    replace: true,
    scope: {
      component: '='
    },
    link: function (scope, element, attrs) {
      React.render(
        React.createElement(scope.component),
        element[0]
      );
    }
  };
});
