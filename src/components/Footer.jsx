import Link from 'next/link';
import config from '../data/config.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 text-white" style={{ backgroundColor: 'var(--color-secondary)' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'var(--font-display)' }}>{config.businessName}</h3>
            <p className="text-gray-300">{config.tagline}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
              <li><Link href="/about" className="hover:text-white transition">About</Link></li>
              <li><Link href="/portfolio" className="hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 mb-2">
              <a href={`tel:${config.phone}`} className="hover:text-white transition">
                {config.phone}
              </a>
            </p>
            <p className="text-gray-300">
              <a href={`mailto:${config.email}`} className="hover:text-white transition">
                {config.email}
              </a>
            </p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} {config.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
