(function() {
  'use strict';

  angular
    .module('blackjack')
    .factory('BettingSystem', [function() {
      var rules = [];

      return {
        register: register,
        use: use
      };

      function register(name, func) {
        var rule = new Rule(name, func);
        rules.push(rule);
      }

      function use() {
        angular.forEach(rules, function(rule) {
          rule();
        });
      }

      function Rule(name, func) {
        this.name = name;
        this.use = func;
      }
    }]);
})();