import Link from 'next/link';
import config from '../data/config.json';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm" style={{ borderBottom: '3px solid var(--color-primary)' }}>
      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-black" style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          {config.businessName}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/" className="text-sm hover:text-primary transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="text-sm hover:text-primary transition">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-sm hover:text-primary transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/team" className="text-sm hover:text-primary transition">
              Team
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="text-sm hover:text-primary transition">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="px-6 py-2 rounded-lg font-semibold text-white transition hover:-translate-y-0.5" style={{ backgroundColor: 'var(--color-primary)' }}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li><Link href="/" className="text-sm">Home</Link></li>
            <li><Link href="/services" className="text-sm">Services</Link></li>
            <li><Link href="/about" className="text-sm">About</Link></li>
            <li><Link href="/team" className="text-sm">Team</Link></li>
            <li><Link href="/portfolio" className="text-sm">Portfolio</Link></li>
            <li>
              <Link href="/contact" className="block px-6 py-2 rounded-lg font-semibold text-white text-center" style={{ backgroundColor: 'var(--color-primary)' }}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
