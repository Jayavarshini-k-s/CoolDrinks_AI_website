import React from 'react';
import { Button } from '@/components/ui/button';

export default function FinalCtaSection() {
  return (
    <section id="contact" className="py-20 md:py-40">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight max-w-4xl mx-auto">Ready to Taste the Difference?</h2>
        <p className="mt-6 text-lg text-foreground/80 max-w-2xl mx-auto">
          Join the soda revolution and treat your taste buds (and your gut) to something better. Find your new favorite flavor today.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-bold">
            SHOP NOW
          </Button>
          <Button variant="outline" size="lg" className="rounded-full border-2 hover:bg-foreground hover:text-background h-12 px-8 text-base font-bold">
            FIND IN STORE
          </Button>
        </div>
      </div>
    </section>
  );
}
