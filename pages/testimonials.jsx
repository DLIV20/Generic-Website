import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import TestimonialCard from '../src/components/TestimonialCard';
import testimonials from '../src/data/testimonials.json';

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <section className="page-header py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="page-title">Testimonials</h1>
          <p className="page-subtitle">
            Don&apos;t just take our word for it. Hear from our satisfied clients.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
