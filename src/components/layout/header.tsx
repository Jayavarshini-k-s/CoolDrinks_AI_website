'use client';

import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
    {children}
  </a>
);

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 p-6 md:p-8">
      <nav className="w-full flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter text-foreground">
          OLIPOP
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <NavLink href="#product">Product</NavLink>
          <NavLink href="#ingredients">Ingredients</NavLink>
          <NavLink href="#nutrition">Nutrition</NavLink>
          <NavLink href="#reviews">Reviews</NavLink>
          <NavLink href="#faq">FAQ</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}
