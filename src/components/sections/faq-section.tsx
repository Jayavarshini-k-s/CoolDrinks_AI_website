import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Olipop?',
    answer: 'Olipop is a new kind of soda that\'s made with natural ingredients, contains prebiotics and plant fiber for gut health, and has way less sugar than traditional sodas.',
  },
  {
    question: 'How much sugar is in a can?',
    answer: 'Each can of Olipop contains only 2-5 grams of sugar, compared to 30-40 grams in a typical can of soda.',
  },
  {
    question: 'Is Olipop vegan and gluten-free?',
    answer: 'Yes! All of our products are non-GMO, vegan, gluten-free, Paleo, and Keto-friendly. We use no artificial sweeteners, colors, flavors, or preservatives.',
  },
  {
    question: 'Where can I buy Olipop?',
    answer: 'Olipop is available at major retailers nationwide, including Whole Foods, Target, Sprouts, and Kroger. You can also order directly from our website.',
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">QUESTIONS? WE HAVE ANSWERS.</h2>
          <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white">Frequently Asked Questions</h3>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b-white/20">
                <AccordionTrigger className="text-left text-lg md:text-xl font-bold text-white hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-white/80 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
