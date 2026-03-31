import Link from 'next/link';
import config from '../data/config.json';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <style>{`
        nav {
          border-bottom: 3px solid var(--color-primary);
        }
        .nav-link {
          font-family: var(--font-body);
          font-weight: 500;
          position: relative;
          transition: color 0.3s ease;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: var(--color-primary);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .logo {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 900;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -1px;
        }
        .contact-btn {
          background: var(--color-primary);
          color: white;
          padding: 10px 24px;
          border-radius: var(--radius);
          font-weight: 600;
          transition: all 0.3s ease;
          transform: translateY(0);
        }
        .contact-btn:hover {
          background: var(--color-secondary);
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(217, 117, 83, 0.2);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
        <Link href="/" className="logo">
          {config.businessName}
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          <li>
            <Link href="/" className="nav-link text-sm">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="nav-link text-sm">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="nav-link text-sm">
              About
            </Link>
          </li>
          <li>
            <Link href="/team" className="nav-link text-sm">
              Team
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="nav-link text-sm">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="contact-btn">
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4">
          <ul className="flex flex-col gap-4">
            <li>
              <Link href="/" className="nav-link text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="nav-link text-sm">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="nav-link text-sm">
                About
              </Link>
            </li>
            <li>
              <Link href="/team" className="nav-link text-sm">
                Team
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="nav-link text-sm">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/contact" className="contact-btn block text-center">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
