(function() {
  'use strict';

  angular
    .module('blackjack')
    .controller('MainController', ['CardStorage', 'toastr', function(CardStorage, toastr) {
      var self = this;

      self.shuffle = function() {
        var shuffledDeck = CardStorage.shuffle;
        toastr.info(shuffledDeck);
      };
    }]);
})();
