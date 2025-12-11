export interface DrinkVariant {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  themeColor: string;
  sequence: {
    urls: string[];
    frameCount: number;
  };
}

const generateFrameUrls = (
  base: string,
  frameCount: number,
  pad: number,
  start: number = 1
): string[] => {
  const urls: string[] = [];
  for (let i = start; i < start + frameCount; i++) {
    const frameNum = i.toString().padStart(pad, '0');
    urls.push(base.replace('{frame}', frameNum));
  }
  return urls;
};

export const drinkVariants: DrinkVariant[] = [
  {
    id: 'cherry',
    name: 'Cherry',
    subtitle: 'Soda',
    description: 'A modern take on a classic soda with a perfect blend of sweet and tart, full of nostalgic flavor.',
    themeColor: 'hsl(350 85% 60%)', // A vibrant cherry red
    sequence: {
      urls: generateFrameUrls(
        'https://omqaodalyvzbrvckcumi.supabase.co/storage/v1/object/public/assets/soda-cherry/frame_{frame}.webp',
        240,
        4
      ),
      frameCount: 240,
    },
  },
  {
    id: 'grape',
    name: 'Grape',
    subtitle: 'Soda',
    description: 'A modern functional soda brand inspired by classic flavors but made with better ingredients.',
    themeColor: 'hsl(289 44% 53%)', // Vibrant grape purple
    sequence: {
      urls: generateFrameUrls(
        'https://omqaodalyvzbrvckcumi.supabase.co/storage/v1/object/public/assets/soda2/frame_{frame}.webp',
        240,
        4
      ),
      frameCount: 240,
    },
  },
  {
    id: 'lemon-ginger',
    name: 'Lemon',
    subtitle: 'Ginger Soda',
    description: 'Bright and refreshing citrus soda with natural lemon spark and crisp bubbles.',
    themeColor: 'hsl(55 90% 60%)', // A bright lemon yellow
    sequence: {
      urls: generateFrameUrls(
        'https://omqaodalyvzbrvckcumi.supabase.co/storage/v1/object/public/assets/soda-lemon/frame_{frame}.webp',
        240,
        4,
        0
      ),
      frameCount: 240,
    },
  },
];
