(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Config', [function() {
      var config = JSON.parse(localStorage.getItem('blackjackConfig'));

      return {
        getConfig: getConfig,
        setConfig: setConfig,
        setMatch: setMatch,
        setBoard: setBoard,
        setPlayers: setPlayers
      };

      function getConfig() {
        return config;
      }

      function setConfig(match, board, players) {
        config = {};
        config.match = match;
        config.board = board;
        config.players = players;
        localStorage.setItem('blackjack', JSON.stringify(config));
      }

      function setMatch(match) {
        angular.merge(config, match);
        localStorage.setItem('blackjack', JSON.stringify(config));
      }

      function setBoard(board) {
        angular.merge(config, board);
        localStorage.setItem('blackjack', JSON.stringify(config));
      }

      function setPlayers(players) {
        angular.merge(config, players);
        localStorage.setItem('blackjack', JSON.stringify(config));
      }

    }]);
})();