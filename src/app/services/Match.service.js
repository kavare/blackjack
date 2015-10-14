(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Match', ['Config', 'System', 'Player', 'Board', 'Card', function(Conig, System, Player, Board, Card) {

      var matchConfig = {};
      matchConfig.id = new Date().getTime();
      matchConfig.games = [];
      matchConfig.humanName = '';
      matchConfig.playerNum = 0;

      return {
        setHuman: setHuman,
        setPlayerNum: setPlayerNum,
        setPlayers: setPlayers,
        setDealer: setDealer,
        start: start,
        resume: resume
      };

      function setHuman(name) {
        return matchConfig.humanName = name;
      }

      function setPlayerNum(num) {
        return matchConfig.playerNum = num;
      }

      function setPlayers() {
        var name = Player.getNames();
        var i;
        Player.create(matchConfig.humanName, 'human');

        for (i = 1; i < playerNum; i++) {
          Player.create(name[i-1], 'computer');
        }
      }

      function setDealer(id) {
        var players = Player.getPlayers();

        angular.forEach(players, function(player) {
          if (player.id === id) player.role = 'dealer';
          return id;
        });

        return -1;
      }

      function start(name, num) {
        setHuman(name);
        setPlayerNum(num);
        setPlayers();
        setDealer(Math.ceil(Math.random() * 4));
      }

      function resume(name, num) {
        if (matchConfig === null) start(name, num);

        start(matchConfig.humanName, matchConfig.playerNum);
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