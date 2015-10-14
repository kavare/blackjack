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
        getRecordByGame: getRecordByGame,
        save: save,
        load: load
      };

      function setRecord() {

      }

      function getRecords() {

      }

      function clearRecords() {

      }

      function getRecordByPlayer() {

      }

      function getRecordByGame() {

      }

      function save() {

      }

      function load() {

      }

      function Record(match, game) {
        this.id = ++Record.id;
        this.matchId = match.id;
        this.gameId = game.id;
        this.players = match.players;
      }

      Record.id = 0;

    }]);
})();