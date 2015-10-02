(function() {
  'use strict';

  angular
    .module('blackjack')
    .directive('loginForm', ['UserStorage', function(UserStorage) {

      var directive = {
        restrict: 'AE',
        templateUrl: 'app/components/loginForm/loginForm.html',
        scope: {

        },
        controller: loginFormController,
        controllerAs: 'vm',
        bindToController: true,
        link: linkFunc
      };

      return directive;

      function loginFormController() {
        var vm = this;

        vm.initGame = function(data) {
          UserStorage.initGame(data);
        };

        vm.continueGame = function() {
          UserStorage.continueGame();
        };
      }

      function linkFunc(scope, element, attrs) {

      }
    }]);
})();