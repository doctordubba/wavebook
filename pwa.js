/* Wavebook hosting support. No analytics, accounts, or network sync. */
(() => {
  if (!('serviceWorker' in navigator) || !window.isSecureContext || location.protocol === 'file:') return;
  const base = new URL('./', document.baseURI);
  window.addEventListener('load', async () => {
    try {
      const registration = await navigator.serviceWorker.register(new URL('sw.js', base), { scope: base.href, updateViaCache: 'none' });
      const worker = registration.installing || registration.waiting;
      if (worker && worker.state !== 'activated') await new Promise((resolve, reject) => {
        const check = () => {
          if (worker.state === 'activated') { worker.removeEventListener('statechange', check); resolve(); }
          else if (worker.state === 'redundant') { worker.removeEventListener('statechange', check); reject(new Error('Offline bundle installation did not complete.')); }
        };
        worker.addEventListener('statechange', check);
        check();
      });
      await navigator.serviceWorker.ready;
      document.documentElement.dataset.wavebookOffline = 'ready';
      window.dispatchEvent(new CustomEvent('wavebook-offline-ready'));
    } catch (error) {
      document.documentElement.dataset.wavebookOffline = 'unavailable';
      window.dispatchEvent(new CustomEvent('wavebook-offline-ready'));
      console.warn('Wavebook remains available online; offline caching did not initialize.', error);
    }
  });
})();
