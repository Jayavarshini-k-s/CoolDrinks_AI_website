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
    setImages([]);

    let loadedCount = 0;
    const totalCount = urls.length;
    const imageElements: HTMLImageElement[] = [];

    urls.forEach((url, index) => {
      const img = new Image();
      imageElements[index] = img;
      img.onload = () => {
        loadedCount++;
        setProgress((loadedCount / totalCount) * 100);
        if (loadedCount === totalCount) {
          setImages(imageElements);
          setLoaded(true);
        }
      };
      img.onerror = () => {
        // Handle error: maybe count it as loaded to not block the app
        loadedCount++;
        setProgress((loadedCount / totalCount) * 100);
        if (loadedCount === totalCount) {
          setImages(imageElements);
          setLoaded(true);
        }
      };
      img.src = url;
    });

  }, [urls]);

  return { progress, images, loaded };
}
