(function() {
  'use strict';

  angular
    .module('blackjack')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
