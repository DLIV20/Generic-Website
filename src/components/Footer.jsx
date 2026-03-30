import Link from 'next/link';
import config from '../data/config.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 className="font-bold text-lg mb-4">{config.businessName}</h3>
          <p className="text-gray-400">{config.tagline}</p>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <p className="text-gray-400 mb-2">{config.phone}</p>
          <p className="text-gray-400">{config.email}</p>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
        <p>
          &copy; {currentYear} {config.businessName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
