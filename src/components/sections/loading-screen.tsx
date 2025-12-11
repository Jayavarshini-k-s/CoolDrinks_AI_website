import React from 'react';
import { Progress } from '@/components/ui/progress';

interface LoadingScreenProps {
  progress: number;
}

export default function LoadingScreen({ progress }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background fade-in-out">
      <div className="text-center">
        <h1 className="text-4xl font-black tracking-tighter text-foreground">OLIPOP</h1>
        <div className="w-48 mx-auto mt-8">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-2">Loading {Math.round(progress)}%</p>
        </div>
      </div>
    </div>
  );
}
