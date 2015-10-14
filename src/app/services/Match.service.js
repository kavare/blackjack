(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Match', ['Config', 'BettingSystem', 'Player', 'Board', 'Card', function(Config, BettingSystem, Player, Board, Card) {
      var config = Config.getConfig();
      var players = config.players;
      var matchConfig = config.match;
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
        resume: resume,
        createGame: createGame
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

        players = Player.getPlayers();
      }

      function setDealer() {
        if (matchConfig.dealer !== null) return;
        var dealerId = Math.ceil(Math.random() * 4);

        angular.forEach(players, function(player) {
          if (player.id === dealerId) {
            player.role = 'dealer';
            matchConfig.dealer = player;
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
        createGame(num, players);
      }

      function resume(name, num) {
        if (Config.getConfig() === null) {
          start(name, num);
          return;
        }

        Player.setPlayers(players);
        BettingSystem.use();
        createGame(num, players);
      }

      function createGame(num, players) {
        var game = new Game(num, players);
        matchConfig.games.push(game);
        Config.setMatch(matchConfig);
        game.play();
      }


      function Game(playerNum, players) {
        this.id = ++Game.id;
        this.playerNum = playerNum;
        this.players = players;
        this.deck = Card.shuffle();
      }

      Game.id = 0;

      Game.prototype.wager = function(stack) {
        angular.forEach(this.players, function(player) {
          switch (player.role) {
            case 'human':
              player.bet(stack);
              break;
            case 'dealer':
              break;
            default:
              player.bet(10);
          }
        });
      };

      Game.prototype.deal = function() {
        angular.forEach(this.players, function(player) {
          player.cards.push(this.deck.pop());
          player.cards.push(this.deck.pop());
        });
      };

      Game.prototype.play = function() {

      };

      Game.prototype.autoPlay = function() {
        var dealer = this.dealer;

        angular.forEach(this.players, function(player) {
          player.points = this.calculate(player.cards);

          while (player.points < 15) {
            player.hit();
            this.calculate(player.cards);
          }

          player.stand();

          dealer.points = this.calculate(dealer.cards);
          while (dealer.points < 17) {
            dealer.hit();
            this.calculate(dealer.cards);
          }

          dealer.stand();
        });
      };

      Game.prototype.complete = function() {
        var dealer = this.dealer;

        /**
         * [CASE1: Dealer get 21 points]
         */
        if (dealer.points === 21) {
          angular.forEach(this.players, function(player) {
            if (player.role === 'dealer') return;
            player.status = 'lose';
            player.bonus = -player.stack;
            player.money += player.bonus;
          })
        }

        /**
         * [CASE2: Normal Scheme]
         */
        angular.forEach(this.players, function(player) {
          if (player.role === 'dealer') return;
          if (player.points > dealer.poins) {
            palyer.status = 'win';
            player.bonus = player.stack;
          } else if (player.points < dealer.poins) {
            palyer.status = 'lose';
            player.bonus = -player.stack;
          } else {
            palyer.status = 'tie';
            player.bonus = 0;
          }

          player.money += player.bonus;
        });

        Board.setRecord(this);
      };

      Game.prototype.calculate = function(cards) {
        var points = 0;
        angular.forEach(cards, function(card) {
          points += parseInt(card.slice(1), 10);
        });

        return points;
      };

      Game.prototype.exit = function() {

      };
    }]);
})();