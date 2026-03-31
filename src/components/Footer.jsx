import Link from 'next/link';
import config from '../data/config.json';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-3 primary-color" style={{ fontFamily: "'Playfair Display', serif" }}>
              {config.businessName}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {config.tagline}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition">Services</Link></li>
              <li><Link href="/about" className="text-gray-300 hover:text-white transition">About</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition">Portfolio</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition">Team</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <p className="text-gray-300 text-sm mb-2">
              <a href={`tel:${config.phone}`} className="hover:text-white transition">
                {config.phone}
              </a>
            </p>
            <p className="text-gray-300 text-sm">
              <a href={`mailto:${config.email}`} className="hover:text-white transition">
                {config.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} {config.businessName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
