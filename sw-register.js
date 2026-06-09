(function() {
  'use strict';

  if (!('serviceWorker' in navigator)) {
    return;
  }

  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js')
      .then(function(registration) {
        console.log('[TypeRush] Service Worker registered');
      })
      .catch(function(error) {
        console.warn('[TypeRush] Service Worker registration failed:', error.message);
      });
  });

  // When a new SW activates and takes control, reload so users get the latest version
  navigator.serviceWorker.addEventListener('controllerchange', function() {
    window.location.reload();
  });
})();
