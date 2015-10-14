(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('Player', [function() {
      var playerList = [];
      var nameList = ['Socrtes', 'Plato', 'Aristotle', 'Thales'];

      return {
        create: create,
        udpate: update,
        remove: remove,
        get: get,
        getPlayers: getPlayers,
        getNames: getNames,
        setPlayers: setPlayers
      };

      function create(name, role) {
        var gamer = new Gamer(name, role);
        playerList.push(gamer);
        return gamer;
      }

      function update(id, info) {
        var user = get(id);
        return angular.extend({}, user, info);
      }

      function remove(id) {
        angular.forEach(playerList, function(player, index) {
          if (playerList[id] === id) playerList.splice(index, 1);

          return -1;
        });
      }

      function get(id) {
        angular.forEach(playerList, function(player) {
          if (playerList[id] === id) return player;
        });

        throw new Error('Can not find player with this id.');
      }

      function getPlayers() {
        return playerList;
      }

      function getNames() {
        return nameList;
      }

      function setPlayers(players) {
        return playerList = players;
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