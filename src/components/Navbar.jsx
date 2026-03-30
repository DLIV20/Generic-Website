import Link from 'next/link';
import config from '../data/config.json';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-primary">
          {config.businessName}
        </Link>
        <ul className="flex gap-6 text-sm md:text-base">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary">
              Services
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
          </li>
          <li>
            <Link href="/team" className="hover:text-primary">
              Team
            </Link>
          </li>
          <li>
            <Link href="/portfolio" className="hover:text-primary">
              Portfolio
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-primary font-semibold">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
