import Image from 'next/image';
import Link from 'next/link';
import config from '../data/config.json';

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#f6f6f6' }}>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 md:opacity-30 z-0">
        <Image src="/hero.jpg" alt="Hero" fill className="object-cover" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 md:px-12 py-12 md:py-0">
        <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
          {config.businessName}
          <br />
          <span style={{ background: 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Transforms Spaces
          </span>
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl" style={{ color: 'var(--color-text-light)', lineHeight: '1.6' }}>
          {config.tagline}
        </p>
        <Link href="/contact" className="inline-block px-8 py-4 rounded-lg font-semibold text-white transition hover:-translate-y-1" style={{ backgroundColor: 'var(--color-primary)' }}>
          Get Started Today
        </Link>
      </div>
    </section>
  );
}
