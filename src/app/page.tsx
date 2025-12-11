'use client';

import React, { useMemo } from 'react';
import { drinkVariants } from '@/lib/drink-data';
import useImagePreloader from '@/hooks/use-image-preloader';

import LoadingScreen from '@/components/sections/loading-screen';
import Header from '@/components/layout/header';
import HeroSection from '@/components/sections/hero-section';
import ProductSection from '@/components/sections/product-section';
import IngredientsSection from '@/components/sections/ingredients-section';
import NutritionSection from '@/components/sections/nutrition-section';
import ReviewsSection from '@/components/sections/reviews-section';
import FaqSection from '@/components/sections/faq-section';
import FinalCtaSection from '@/components/sections/final-cta-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  const initialVariant = useMemo(() => drinkVariants[0], []);
  const { progress, images, loaded } = useImagePreloader(initialVariant.sequence.urls);
  
  if (!loaded) {
    return <LoadingScreen progress={progress} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection initialImages={images} />
        <ProductSection />
        <IngredientsSection />
        <NutritionSection />
        <ReviewsSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
