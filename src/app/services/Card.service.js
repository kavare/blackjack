(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Card', [function() {
      var deckStore = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      ];

      var suitStore = ['s', 'h', 'd', 'c'];
      var deck = angular.copy(deckStore);
      var shuffledDeck = [];

      return {
        shuffle: shuffle
      };

      function shuffle() {
        var cardsLeft = 52;
        var suit = null;
        var suitLength = 4;
        var suitCardsLeft = null;
        var rank = null;
        var pick = '';

        deck = angular.copy(deckStore);
        shuffledDeck = [];

        while (cardsLeft) {
          suit = Math.floor(Math.random() * suitLength);
          suitCardsLeft = deck[suit].length;

          if (!suitCardsLeft) {
            deck.splice(suit, 1);
            suitLength--;
            continue;
          }

          pick = '';
          rank = Math.floor(Math.random() * suitCardsLeft) + 1;
          pick = suitStore[suit] + deck[suit].splice(rank - 1, 1);
          shuffledDeck.push(pick);

          cardsLeft--;
        }

        return shuffledDeck;
      }

    }]);
})();