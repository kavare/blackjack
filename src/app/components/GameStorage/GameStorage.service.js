(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('GameStorage', ['UserStorage', 'CardStorage', function(UserStorage, CardStorage) {

      /**
       * [GameStorage private attributes]
       */
      var gameCount = 0;

      var service = {
        create: create,
        getGameCount: getGameCount
      };

      return service;

      function create() {
        gameCount++;
        return new Game();
      }

      function getGameCount() {
        return gameCount;
      }

      function Game() {
        this.players = UserStorage.getPlayers();
        this.deck = CardStorage.shuffle();
        CardStorage.deal();
      }
    }]);
})();