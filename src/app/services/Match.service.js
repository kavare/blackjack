(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Match', ['Config', 'Game', function(Conig, Game) {
      var playerNum;

      return {
        setDealer: setDealer,
        setCurrentPlayer: setCurrentPlayer,
        start: start,
        resume: resume
      };

      function setDealer() {

      }

      function setCurrentPlayer() {

      }

      function start() {

      }

      function resume() {

      }
    }]);
})();