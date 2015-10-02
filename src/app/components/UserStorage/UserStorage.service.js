(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('UserStorage', ['PlayerCreator', 'toastr', function(PlayerCreator, toastr) {
      var config = JSON.parse(localStorage.getItem('blackjackConfig'));
      var playerNames = ['Socrtes', 'Plato', 'Aristotle', 'Thales'];
      var playerList = [];

      var service = {
        initGame: initGame,
        continueGame: continueGame,
        getConfig: getConfig,
        getPlayers: getPlayers
      };

      return service;

      function initGame(data) {
        var playerConfig = {};
        var currentPlayer;
        var player;

        config = {};
        config.playerName = data.playerName;
        config.playerNum = data.playerNum;

        currentPlayer = new PlayerCreator.create({
          name: config.playerName,
          money: 1000
        });

        playerList.push(currentPlayer);

        for (var i = 0; i < data.playerNum - 1; i++) {
          playerConfig = {};
          playerConfig.name = playerNames[i];
          playerConfig.money = 1000;

          player = new PlayerCreator.create(playerConfig);
          playerList.push(player);
        }

        config.playerList = playerList;

        localStorage.clear();
        localStorage.setItem('blackjackConfig', JSON.stringify(config));
        toastr.success('Game Start! You are' + config.playerName + ' in a ' + config.playerNum + ' players game');
      }

      function continueGame() {
        if (config === null) {
          toastr.error('Sorry. We don\'t have your data. Please re-enter again >o<');
          return;
        }

        toastr.success('Game Start! You are' + config.playerName + ' in a ' + config.playerNum + ' players game');
      }

      function getPlayers() {
        return config.playerList;
      }

      function getConfig() {
        return config;
      }
    }]);
})();