(function() {
  'use strict';

  angular
    .module('blackjack')
    .directive('acmeNavbar', [function() {
      var directive = {
        restrict: 'E',
        templateUrl: 'app/components/navbar/navbar.html',
        scope: {
            creationDate: '='
        },
        controller: NavbarController,
        controllerAs: 'vm',
        bindToController: true
      };

      return directive;

      function NavbarController() {
        var vm = this;

      }
    }]);

})();
