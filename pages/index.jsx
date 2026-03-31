import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';
import ServiceCard from '../src/components/ServiceCard';
import TestimonialCard from '../src/components/TestimonialCard';
import Link from 'next/link';
import services from '../src/data/services.json';
import testimonials from '../src/data/testimonials.json';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Services Section */}
      <section className="py-24" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
              Our Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
              We offer a comprehensive range of services to meet your needs
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-10 py-3 rounded-lg font-semibold text-white transition hover:-translate-y-1 shadow-lg"
              style={{ backgroundColor: 'var(--color-primary)' }}
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
                What Our Clients Say
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--color-text-light)' }}>
                Don't just take our word for it. Hear from our satisfied clients.
              </p>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {testimonials.slice(0, 2).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <Link
                href="/testimonials"
                className="inline-block px-10 py-3 rounded-lg font-semibold text-white transition hover:-translate-y-1 shadow-lg"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                Read All Testimonials →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontFamily: 'var(--font-display)' }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us today to learn more about our services.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-3 rounded-lg font-semibold transition hover:-translate-y-1 shadow-lg"
            style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}
          >
            Contact Us →
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
