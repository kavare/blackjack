(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('BetStorage', [function() {

      var service = {
        bet: bet,
        win: win,
        lose: lose
      };

      return service;

      function bet() {

      }

      function win() {

      }

      function lose() {

      }
    }]);
})();