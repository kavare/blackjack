(function() {
  'use strict';

  angular
    .module('blackjack')
    .controller('MainController', ['UserStorage', 'CardStorage', 'toastr', function(UserStorage, CardStorage, toastr) {
      var self = this;

      self.shuffle = function() {
        var shuffledDeck = CardStorage.shuffle;
        toastr.info(shuffledDeck);
      };

      self.deal = function() {
        CardStorage.deal(UserStorage.getConfig().playerNum);
      };
    }]);
})();
