import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TestimonialCard from '../components/TestimonialCard';
import testimonials from '../data/testimonials.json';

export default function Testimonials() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Testimonials</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Don&apos;t just take our word for it. Hear from our satisfied clients.
          </p>
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
