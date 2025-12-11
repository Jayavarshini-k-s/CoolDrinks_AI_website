'use client';

import { useState, useEffect } from 'react';

export default function useImagePreloader(urls: string[]) {
  const [progress, setProgress] = useState(0);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!urls || urls.length === 0) {
      setLoaded(true);
      return;
    };

    setLoaded(false);
    setProgress(0);
    
    const imagePromises = urls.map((url, index) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = url;
        img.onload = () => {
            setProgress(prev => prev + (100 / urls.length));
            resolve(img);
        };
        img.onerror = () => {
            // Resolve even on error to not block the app
            setProgress(prev => prev + (100 / urls.length));
            resolve(img);
        };
      });
    });

    Promise.all(imagePromises).then(loadedImages => {
      setImages(loadedImages.filter(img => img.complete && img.naturalHeight !== 0));
      setLoaded(true);
      setProgress(100);
    });

  }, [urls]);

  return { progress, images, loaded };
}
