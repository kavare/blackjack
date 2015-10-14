(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Match', ['Config', 'System', 'Player', 'Board', 'Card', function(Conig, System, Player, Board, Card) {

      var id = new Date().getTime();
      var games = [];
      var playerNum;
      var players = [];

      return {
        setPlayerNum: setPlayerNum,
        setDealer: setDealer,
        setHuman: setHuman,
        setPlayers: setPlayers,
        start: start,
        resume: resume
      };

      function setPlayerNum() {

      }

      function setDealer() {

      }

      function setHuman() {

      }

      function setPlayers() {

      }

      function start() {

      }

      function resume() {

      }


      function Game(playerNum, players) {
        this.id = ++Game.id;
        this.playerNum = playerNum;
        this.players = players;
      }

      Game.id = 0;

      Game.prototype.start = function() {

      };

      Game.prototype.wager = function() {

      };

      Game.prototype.deal = function() {

      };

      Game.prototype.play = function() {

      };

      Game.prototype.exit = function() {

      };
    }]);
})();