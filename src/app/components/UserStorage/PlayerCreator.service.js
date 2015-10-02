(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('PlayerCreator', [function() {
      var service = {
        create: create
      };

      return service;

      function create(config) {
        return new Player(config);
      }

      function Player(config) {
        this.name = config.name;
        this.money = config.money;
      }
    }]);
})();