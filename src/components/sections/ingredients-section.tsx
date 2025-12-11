import React from 'react';
import { Leaf, Bot, Stethoscope } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const ingredients = [
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    name: 'Plant Fiber',
    description: 'Each can contains 9g of dietary fiber to support digestive health and keep you feeling full.',
  },
  {
    icon: <Bot className="w-8 h-8 text-primary" />,
    name: 'Prebiotics',
    description: 'Our blend of prebiotics like cassava root and chicory root feeds the good bacteria in your gut.',
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    name: 'Botanicals',
    description: 'We use real ingredients like calendula, marshmallow root, and nopal cactus for a unique, delicious taste.',
  },
];

export default function IngredientsSection() {
  return (
    <section id="ingredients" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">WHAT'S INSIDE</h2>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Good for Your Gut. Great for Your Taste Buds.</h3>
        <p className="mt-6 text-lg text-foreground/80 max-w-3xl mx-auto">
          We ditched the spoonfuls of sugar and artificial junk. Instead, we packed our sodas with nutrient-dense, gut-friendly ingredients that your body will love.
        </p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {ingredients.map((ingredient, index) => (
            <Card key={index} className="text-left bg-secondary/50 border-border/50">
              <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                <div className="bg-primary/10 p-3 rounded-lg">{ingredient.icon}</div>
                <CardTitle className="text-2xl font-bold tracking-tight">{ingredient.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{ingredient.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
