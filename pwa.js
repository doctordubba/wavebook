/* Wavebook hosting support. No analytics, accounts, or network sync. */
(() => {
  if (!('serviceWorker' in navigator) || !window.isSecureContext || location.protocol === 'file:') return;
  const base = new URL('./', document.baseURI);
  window.addEventListener('load', async () => {
    try {
      await navigator.serviceWorker.register(new URL('sw.js', base), { scope: base.href, updateViaCache: 'none' });
      await navigator.serviceWorker.ready;
      document.documentElement.dataset.wavebookOffline = 'ready';
      window.dispatchEvent(new CustomEvent('wavebook-offline-ready'));
    } catch (error) {
      document.documentElement.dataset.wavebookOffline = 'unavailable';
      console.warn('Wavebook remains available online; offline caching did not initialize.', error);
    }
  });
})();
