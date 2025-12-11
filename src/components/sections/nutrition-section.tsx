import React from 'react';
import { Separator } from '@/components/ui/separator';

export default function NutritionSection() {
  return (
    <section id="nutrition" className="py-20 md:py-32 bg-black">
      <div className="container mx-auto px-6 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="max-w-md mx-auto border-4 border-white p-4 font-mono text-white">
            <h2 className="text-4xl font-black tracking-tighter">Nutrition Facts</h2>
            <Separator className="my-2 bg-white h-1" />
            <p>1 serving per container</p>
            <p className='font-bold'>Serving size <span className="float-right">1 can (12oz)</span></p>
            <Separator className="my-2 bg-white h-2" />
            <p className='font-bold'>Amount per serving</p>
            <p className='text-5xl font-black tracking-tighter'>Calories <span className="float-right">35</span></p>
            <Separator className="my-2 bg-white h-1" />
            <p className="text-right font-bold">% Daily Value*</p>
            <Separator className="my-1 bg-white/50" />
            <p><b>Total Fat</b> 0g <span className="float-right"><b>0%</b></span></p>
            <Separator className="my-1 bg-white/50" />
            <p><b>Sodium</b> 35mg <span className="float-right"><b>2%</b></span></p>
            <Separator className="my-1 bg-white/50" />
            <p><b>Total Carbohydrate</b> 16g <span className="float-right"><b>6%</b></span></p>
            <Separator className="my-1 bg-white/50" />
            <p className="pl-4">Dietary Fiber 9g <span className="float-right"><b>32%</b></span></p>
            <Separator className="my-1 bg-white/50" />
            <p className="pl-4">Total Sugars 2-5g</p>
            <Separator className="my-1 bg-white/50" />
            <p className="pl-8">Includes 0g Added Sugars <span className="float-right"><b>0%</b></span></p>
            <Separator className="my-2 bg-white h-2" />
            <p className="text-xs">*The % Daily Value (DV) tells you how much a nutrient in a serving of food contributes to a daily diet. 2,000 calories a day is used for general nutrition advice.</p>
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">THE HEALTHY UPGRADE</h2>
            <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white">All The Flavor, None of The Guilt.</h3>
            <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto md:mx-0">
              Compared to traditional sodas that pack over 39g of sugar, Olipop keeps it light with only 2-5g. Plus, with 9g of fiber, you're not just drinking a soda—you're supporting your gut health with every sip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
