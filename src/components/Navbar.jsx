import Link from 'next/link';
import config from '../data/config.json';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black primary-color" style={{ fontFamily: "'Playfair Display', serif" }}>
          {config.businessName}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 items-center">
          <li><Link href="/" className="text-sm font-medium hover:text-primary transition">Home</Link></li>
          <li><Link href="/services" className="text-sm font-medium hover:text-primary transition">Services</Link></li>
          <li><Link href="/about" className="text-sm font-medium hover:text-primary transition">About</Link></li>
          <li><Link href="/team" className="text-sm font-medium hover:text-primary transition">Team</Link></li>
          <li><Link href="/portfolio" className="text-sm font-medium hover:text-primary transition">Portfolio</Link></li>
          <li>
            <Link href="/contact" className="btn btn-solid text-sm px-6 py-2">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/team">Team</Link></li>
            <li><Link href="/portfolio">Portfolio</Link></li>
            <li><Link href="/contact" className="btn btn-solid inline-block">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
}
