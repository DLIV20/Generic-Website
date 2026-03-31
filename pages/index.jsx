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

      {/* Services Preview */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="inline-block px-8 py-3 rounded-lg font-semibold transition" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      {testimonials.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-display)' }}>What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {testimonials.slice(0, 2).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="text-center">
              <Link href="/testimonials" className="inline-block px-8 py-3 rounded-lg font-semibold transition" style={{ backgroundColor: 'var(--color-primary)', color: 'white' }}>
                Read All Testimonials
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 text-white" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)' }}>Ready to Get Started?</h2>
          <p className="text-lg mb-8">Contact us today to learn more about our services.</p>
          <Link href="/contact" className="inline-block px-8 py-3 rounded-lg font-semibold transition" style={{ backgroundColor: 'white', color: 'var(--color-primary)' }}>
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
