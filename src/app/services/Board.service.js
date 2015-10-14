(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Board', ['Config', 'Player', function(Config, Player) {
      var config = Config.getConfig();
      var recordBoard = config.board || [];

      return {
        setRecord: setRecord,
        getRecords: getRecords,
        clearRecords: clearRecords,
        getRecordByPlayer: getRecordByPlayer,
        getRecordByGame: getRecordByGame
      };

      function setRecord(game) {
        var record = new Record(game);
        recordBoard.push(record);
      }

      function getRecords() {

      }

      function clearRecords() {

      }

      function getRecordByPlayer() {

      }

      function getRecordByGame() {

      }


      function Record(game) {
        this.id = ++Record.id;
        this.matchId = config.match.id;
        this.gameId = game.id;
        this.players = Player.getPlayers();
      }

      Record.id = 0;

    }]);
})();