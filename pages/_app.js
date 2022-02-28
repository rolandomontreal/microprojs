import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [deferredPrompt, setDeferredPromt] = useState(null);
  
  useEffect(() => {
    console.log('SW');
    if ('serviceWorker' in navigator) {
      console.log('Service worker available, installing...');
      navigator.serviceWorker
        .register('./sw.js')
        .then(sw => {
          console.log('service worker registered: ', sw);
        })
        .catch(err => {
          console.log('ERROR registering sw: ', err);
        });
    }
    else {
      console.log('Service worker not available, doing nothing...');
    }

    window.addEventListener('beforeinstallprompt', (event) => {
      console.log('before install prompt triggered');
      setDeferredPromt(event);
      // event.preventDefault(); <-- If you don't want to show at this stage
      return false;
    });
  }, []);

  return <Component {...pageProps} />
}

export default MyApp
