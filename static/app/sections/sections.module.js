(function () {
  'use strict';

  angular
    .module('traefik.section', [
      'ui.router',
      'ui.bootstrap',
      'traefik.section.providers',
      'traefik.section.health'
     ]);

})();
