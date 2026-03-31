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
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 primary-color">
              Our Services
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-light">
              Comprehensive solutions tailored to your needs
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/services" className="btn border-2 border-primary primary-color">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials.length > 0 && (
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold mb-4 primary-color">
                What Our Clients Say
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-light">
                Trusted by satisfied customers
              </p>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {testimonials.slice(0, 2).map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <Link href="/testimonials" className="btn border-2 border-primary primary-color">
                Read All Testimonials
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Contact us today for a consultation
          </p>
          <Link href="/contact" className="inline-block btn text-white px-10 py-4 text-lg" style={{ backgroundColor: 'white', color: 'var(--color-primary)', borderColor: 'white' }}>
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
