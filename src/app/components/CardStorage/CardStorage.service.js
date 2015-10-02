(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('CardStorage', ['toastr', function(toastr) {

      /**
       * [CardStorage private attributes]
       * @deckstore {Array} The original source of deck
       * @suitStore {Array} The original source of suits
       * @deck {Array} The deck which would be used
       * @shuffledDeck {Array} The shuffeled deck
       */
      var deckStore = [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
      ];

      var suitStore = ['s', 'h', 'd', 'c'];
      var deck = angular.copy(deckStore);
      var shuffledDeck = [];

      /**
       * [CardStorage API]
       * @type {Object}
       */
      var service = {
        shuffle: shuffle,
        deal: deal,
        stick: stick,
        hit: hit
      };

      return service;

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

      function deal(playerNum) {
        toastr.info('deal');
      }

      function stick() {

      }

      function hit() {

      }

    }]);
})();