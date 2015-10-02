(function() {
  'use strict';

  angular
    .module('blackjack')
    .controller('MainController', ['GameStorage', 'toastr', function(GameStorage, toastr) {
      var self = this;

      self.gameCount = GameStorage.getGameCount();

      self.newGame = function() {
        var game = GameStorage.create();
        self.gameCount = GameStorage.getGameCount();
        self.players = game.players;
        self.cards = game.deck;
      };
    }]);
})();
