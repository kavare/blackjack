(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Game', ['System', 'Player', 'Record', 'Card', function(System, Player, Record, Card) {
      var players = [];
      var series = 0;
      var gameId;

      return {
        start: start,
        wager: wager,
        deal: deal,
        play: play,
        clear: clear,
        next: next,
        exit: exit
      };

      function start() {

      }

      function wager() {

      }

      function deal() {

      }

      function play() {

      }

      function clear() {

      }

      function next() {

      }

      function exit() {

      }
    }]);
})();