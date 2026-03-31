import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Footer from '../src/components/Footer';
import ServiceCard from '../src/components/ServiceCard';
import TestimonialCard from '../src/components/TestimonialCard';
import Link from 'next/link';
import services from '../src/data/services.json';
import testimonials from '../src/data/testimonials.json';

const pageStyles = `
  section h2 {
    font-family: var(--font-display);
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--color-text);
  }
  .cta-button {
    background: var(--color-primary);
    color: white;
    display: inline-block;
    padding: 12px 32px;
    border-radius: var(--radius);
    font-weight: 600;
    transition: all 0.3s ease;
    text-decoration: none;
  }
  .cta-button:hover {
    background: var(--color-secondary);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(217, 117, 83, 0.2);
  }
  .services-section {
    background: var(--color-light-bg);
  }
  .cta-section {
    background: var(--color-primary);
    color: white;
  }
  .cta-section h2 {
    color: white;
  }
  .cta-section .cta-button {
    background: white;
    color: var(--color-primary);
  }
  .cta-section .cta-button:hover {
    background: var(--color-light-bg);
  }
`;

export default function Home() {
  return (
    <>
      <style>{pageStyles}</style>
      <Navbar />
      <Hero />

      {/* Services Preview */}
      <section className="services-section py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="mb-12 text-center">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <div className="text-center">
            <Link href="/services" className="cta-button">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      {testimonials.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="mb-12 text-center">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {testimonials.slice(0, 2).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
            <div className="text-center">
              <Link href="/testimonials" className="cta-button">
                Read All Testimonials
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="cta-section py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Contact us today to learn more about our services.</p>
          <Link href="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
