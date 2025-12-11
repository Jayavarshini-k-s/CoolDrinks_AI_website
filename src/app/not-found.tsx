import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <h1 className="text-9xl font-black text-primary tracking-tighter">404</h1>
      <h2 className="text-4xl font-bold tracking-tight mt-4">Page Not Found</h2>
      <p className="mt-4 text-lg text-muted-foreground">
        Oops! The page you are looking for does not exist.
      </p>
      <Button asChild className="mt-8 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 text-base font-bold">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}
