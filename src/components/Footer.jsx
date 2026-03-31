import Link from 'next/link';
import config from '../data/config.json';

const footerStyles = `
  .footer {
    background: var(--color-secondary);
    color: white;
  }
  .footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2.5rem;
    margin-bottom: 2rem;
  }
  .footer-section h3, .footer-section h4 {
    font-family: var(--font-display);
    color: white;
  }
  .footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }
  .footer-section h4 {
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  .footer-tagline {
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
  }
  .footer-link {
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s ease;
    display: inline-block;
    position: relative;
  }
  .footer-link::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background: var(--color-primary);
    transition: width 0.3s ease;
  }
  .footer-link:hover {
    color: white;
  }
  .footer-link:hover::after {
    width: 100%;
  }
  .footer-divider {
    border-top: 2px solid rgba(255, 255, 255, 0.1);
    padding-top: 2rem;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
  }
  .footer-contact-info {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 0.75rem;
  }
`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{footerStyles}</style>

    <footer className="footer py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section">
            <h3>{config.businessName}</h3>
            <p className="footer-tagline">{config.tagline}</p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Navigate</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="footer-link text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="footer-link text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer-link text-sm">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/team" className="footer-link text-sm">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4>Get In Touch</h4>
            <p className="footer-contact-info text-sm mb-3">
              <strong>Phone:</strong>
              <br />
              <a href={`tel:${config.phone}`} className="footer-link">
                {config.phone}
              </a>
            </p>
            <p className="footer-contact-info text-sm">
              <strong>Email:</strong>
              <br />
              <a href={`mailto:${config.email}`} className="footer-link">
                {config.email}
              </a>
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-divider">
          <p className="text-sm">
            &copy; {currentYear} {config.businessName}. All rights reserved. | Made with care by{' '}
            <span style={{ color: 'var(--color-primary)' }}>Your Team</span>
          </p>
        </div>
      </div>
    </footer>
    </>
  );
}
