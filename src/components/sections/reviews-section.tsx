import React from 'react';
import { Star, StarHalf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const reviews = [
  {
    name: 'Sarah J.',
    avatar: 'SJ',
    rating: 5,
    text: "I'm obsessed! It tastes just like the grape soda from my childhood but without the sugar crash. My gut has never been happier.",
  },
  {
    name: 'Mike R.',
    avatar: 'MR',
    rating: 5,
    text: "Finally, a soda I can feel good about drinking. The Cherry is my favorite, it's the perfect balance of sweet and tart.",
  },
  {
    name: 'Emily T.',
    avatar: 'ET',
    rating: 4.5,
    text: "I was skeptical at first, but Olipop is the real deal. The Lemon Ginger is so refreshing. It's my new afternoon pick-me-up.",
  },
];

const renderStars = (rating: number) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<Star key={i} className="w-5 h-5 text-primary fill-primary" />);
    } else if (i - 0.5 <= rating) {
      stars.push(<StarHalf key={i} className="w-5 h-5 text-primary fill-primary" />);
    } else {
      stars.push(<Star key={i} className="w-5 h-5 text-primary" />);
    }
  }
  return stars;
};

export default function ReviewsSection() {
  return (
    <section id="reviews" className="py-20 md:py-32">
      <div className="container mx-auto px-6 md:px-8 text-center">
        <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">DON'T JUST TAKE OUR WORD FOR IT</h2>
        <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight">Loved by Thousands of Soda Fans.</h3>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-secondary/50 border-border/50 text-left">
              <CardContent className="pt-6">
                <div className="flex mb-4">{renderStars(review.rating)}</div>
                <p className="mb-6 text-foreground/90">"{review.text}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={`https://i.pravatar.cc/40?u=${review.name}`} />
                    <AvatarFallback>{review.avatar}</AvatarFallback>
                  </Avatar>
                  <p className="font-bold text-foreground">{review.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
