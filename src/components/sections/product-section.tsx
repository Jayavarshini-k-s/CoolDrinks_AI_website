import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { placeholderImages } from '@/lib/placeholder-images.json';

const ctaImage = placeholderImages.find(p => p.id === "grape-cta");

export default function ProductSection() {
  return (
    <section id="product" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">A SODA, REINVENTED</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">The New School of Soda.</h3>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto md:mx-0">
              Olipop is a new kind of soda. One that’s delicious, refreshing, and actually good for you. We took the classic soda flavors you know and love and reimagined them with plant-based ingredients, prebiotics for gut health, and a fraction of the sugar. It’s the perfect blend of nostalgic taste and modern wellness.
            </p>
          </div>
          <div>
            <Card className="bg-gradient-to-br from-primary/20 to-transparent border-primary/30 aspect-square overflow-hidden rounded-2xl shadow-2xl shadow-primary/10">
              <CardContent className="p-0">
                {ctaImage ? (
                    <Image
                      src={ctaImage.imageUrl}
                      alt={ctaImage.description}
                      data-ai-hint={ctaImage.imageHint}
                      width={600}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                      <p>Product Image</p>
                    </div>
                  )
                }
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
