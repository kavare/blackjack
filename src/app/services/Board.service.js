(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Board', ['Player', 'Game', function(Player, Game) {
      var recordBoard = [];

      return {
        setRecord: setRecord,
        getRecords: getRecords,
        clearRecords: clearRecords,
        getRecordByPlayer: getRecordByPlayer,
        getRecordByGame: getRecordByGame
      };

      function setRecord() {

      }

      function getRecords() {

      }

      function clearRecords() {

      }

      function getRecordByPlayer() {

      }

      function getRecordByGameId() {

      }

      function Record(game) {
        this.gameId = game.id;
        this.gameSeries = game.series;
        this.players = game.players;
      }

    }]);
})();