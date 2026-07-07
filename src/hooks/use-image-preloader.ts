
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

    let isMounted = true;
    setLoaded(false);
    setProgress(0);
    
    const imagePromises = urls.map((url) => {
      return new Promise<HTMLImageElement>((resolve) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.src = url;
        img.onload = () => {
          if (isMounted) {
            setProgress(prev => prev + (100 / urls.length));
          }
          resolve(img);
        };
        img.onerror = () => {
          if (isMounted) {
            setProgress(prev => prev + (100 / urls.length));
          }
          resolve(img);
        };
      });
    });

    Promise.all(imagePromises).then(loadedImages => {
      if (!isMounted) return;
      const validImages = loadedImages.filter(img => img.complete && img.naturalHeight !== 0);
      setImages(validImages);
      setLoaded(true);
      setProgress(100);
    });

    return () => {
      isMounted = false;
    };
  }, [urls]);

  return { progress, images, loaded };
}
