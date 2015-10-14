(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Match', ['Config', 'BettingSystem', 'Player', 'Board', 'Card', function(Config, BettingSystem, Player, Board, Card) {

      var matchConfig = Config.getConfig().match;
      if (!matchConfig) {
        matchConfig = {
          games: [],
          humanName: '',
          playerNum: 0,
          dealer: null
        };

        matchConfig.id = new Date().getTime();
      }

      return {
        setHuman: setHuman,
        setPlayerNum: setPlayerNum,
        setPlayers: setPlayers,
        setdealer: setDealer,
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

        for (i = 1; i < matchConfig.playerNum; i++) {
          Player.create(name[i-1], 'computer');
        }
      }

      function setDealer() {
        var players = Player.getPlayers();
        var dealerId = matchConfig.dealer || Math.ceil(Math.random() * 4);

        angular.forEach(players, function(player) {
          if (player.id === dealerId) {
            player.role = 'dealer';
            matchConfig.dealer = id;
          }
        });
      }

      function start(name, num) {
        setHuman(name);
        setPlayerNum(num);
        setPlayers();
        setDealer();
        BettingSystem.use();
        Config.setMatch(matchConfig);
      }

      function resume(name, num) {
        if (Config.getConfig() === null) {
          start(name, num);
          return;
        }

        Player.setPlayers(Config.getConfig().players);
        BettingSystem.use();
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