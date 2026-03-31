import Image from 'next/image';
import Link from 'next/link';
import config from '../data/config.json';

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden">
      <style>{`
        .hero-section {
          background: linear-gradient(135deg, #f6f6f6 0%, #f0f0f0 100%);
          position: relative;
        }
        .hero-image-container {
          position: absolute;
          right: 0;
          top: 0;
          width: 50%;
          height: 100%;
          opacity: 0.3;
          z-index: 0;
        }
        @media (max-width: 768px) {
          .hero-image-container {
            width: 100%;
            opacity: 0.1;
          }
        }
        .hero-content {
          position: relative;
          z-index: 10;
          animation: slideInDown 0.8s ease-out;
        }
        .hero-headline {
          font-family: var(--font-display);
          font-size: clamp(2rem, 8vw, 4.5rem);
          font-weight: 900;
          line-height: 1.1;
          color: var(--color-text);
          margin-bottom: 1.5rem;
          letter-spacing: -1px;
        }
        .hero-highlight {
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-tagline {
          font-size: clamp(1.125rem, 3vw, 1.5rem);
          color: var(--color-text-light);
          margin-bottom: 2rem;
          font-weight: 400;
          line-height: 1.6;
        }
        .hero-button {
          display: inline-block;
          background: var(--color-primary);
          color: white;
          padding: 16px 48px;
          border-radius: var(--radius);
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          border: 2px solid var(--color-primary);
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .hero-button:hover {
          background: white;
          color: var(--color-primary);
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(217, 117, 83, 0.25);
        }
        .leaf-decoration {
          position: absolute;
          font-size: 4rem;
          opacity: 0.2;
          animation: float 4s ease-in-out infinite;
        }
        .leaf-1 { top: 10%; left: 5%; animation-delay: 0s; }
        .leaf-2 { bottom: 15%; right: 10%; animation-delay: 1s; font-size: 3rem; }
      `}</style>

      <div className="hero-section absolute inset-0" />

      <div className="hero-image-container">
        <Image src="/hero.jpg" alt="Hero" fill className="object-cover" />
      </div>

      {/* Decorative elements */}
      <div className="leaf-decoration leaf-1">🍃</div>
      <div className="leaf-decoration leaf-2">🌿</div>

      <div className="hero-content max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-0">
        <h1 className="hero-headline">
          {config.businessName}
          <br />
          <span className="hero-highlight">Transforms Spaces</span>
        </h1>
        <p className="hero-tagline">{config.tagline}</p>
        <Link href="/contact" className="hero-button">
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
