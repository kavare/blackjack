(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Player', [function() {
      var playerList = [];

      return {
        create: create,
        udpate: update,
        remove: remove,
        get: get
      };

      function create() {

      }

      function update() {

      }

      function remove() {

      }

      function get() {

      }

      function Gamer(name, role) {
        this.id = ++Gamer.id;
        this.name = name;
        this.role = role;
        this.stack = 0;
        this.status = 'new';
        this.bonus = 0;
        this.cards = [];
      }

      Gamer.id = 0;
      Gamer.prototype.bet = function() {

      };

      Gamer.prototype.stick = function() {

      };

      Gamer.prototype.hit = function() {

      };

      Gamer.prototype.split = function() {

      };

    }]);
})();