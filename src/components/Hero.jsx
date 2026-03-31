import Image from 'next/image';
import Link from 'next/link';
import config from '../data/config.json';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)', backgroundPosition: 'center' }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
          {config.businessName}
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto opacity-95" style={{ fontFamily: 'var(--font-body)' }}>
          {config.tagline}
        </p>
        <Link href="/contact" className="inline-block btn btn-solid text-white border-white px-10 py-4 text-lg font-bold" style={{ borderColor: 'white', backgroundColor: 'var(--color-primary)', color: 'white' }}>
          Get Started
        </Link>
      </div>
    </section>
  );
}
