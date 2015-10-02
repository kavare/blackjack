(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('UserStorage', ['toastr', function(toastr) {
      var config = JSON.parse(localStorage.getItem('blackjackConfig'));

      var service = {
        initGame: initGame,
        continueGame: continueGame
      };

      return service;

      function initGame(data) {
        config = data;
        localStorage.setItem('blackjackConfig', JSON.stringify(data));
        toastr.success('Game Start! You are' + config.playerName + ' in a ' + config.playerNum + ' players game');
      }

      function continueGame() {
        if (config === null) {
          toastr.error('Sorry. We don\'t have your data. Please re-enter again >o<');
          return;
        }

        toastr.success('Game Start! You are' + config.playerName + ' in a ' + config.playerNum + ' players game');
      }
    }]);
})();