import React from 'react';
import Link from 'next/link';
import { Twitter, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-muted-foreground py-12 px-6 md:px-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col gap-4">
          <Link href="/" className="text-2xl font-bold tracking-tighter text-white">
            OLIPOP
          </Link>
          <p className="text-sm max-w-xs">A modern functional soda brand inspired by classic flavors but made with better ingredients.</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-white">Links</h3>
          <Link href="#product" className="hover:text-white transition-colors">About</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-white">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><Instagram size={20} /></a>
            <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center mt-12 border-t border-gray-800 pt-8">
        <p className="text-sm">&copy; {new Date().getFullYear()} Olipop Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}
