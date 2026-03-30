import Image from 'next/image';
import Link from 'next/link';
import config from '../data/config.json';

export default function Hero() {
  return (
    <section className="relative h-96 md:h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary text-white">
      <div className="absolute inset-0 opacity-10">
        <Image src="/hero.jpg" alt="Hero" fill className="object-cover" />
      </div>
      <div className="relative z-10 text-center max-w-2xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{config.businessName}</h1>
        <p className="text-lg md:text-2xl mb-8">{config.tagline}</p>
        <Link href="/contact" className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get Started
        </Link>
      </div>
    </section>
  );
}
