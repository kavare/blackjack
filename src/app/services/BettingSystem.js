(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('BettingSystem', ['Rule', function(Rule) {
      var rules = [];

      return {
        register: regsiter,
        use: use
      };

      function register() {

      }

      function use() {

      }

      function Rule(name, func) {
        this.name = name;
        this.use = func;
      }
    }]);
})();