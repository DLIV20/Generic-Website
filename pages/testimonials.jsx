import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import TestimonialCard from '../src/components/TestimonialCard';
import testimonials from '../src/data/testimonials.json';

const pageStyles = `
  .page-header {
    background: var(--color-light-bg);
    padding: 5rem 0 2rem;
  }
  .page-title {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-text);
    margin-bottom: 1rem;
    text-align: center;
  }
  .page-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-light);
    text-align: center;
    max-width: 600px;
    margin: 0 auto 4rem;
    line-height: 1.6;
  }
`;

export default function Testimonials() {
  return (
    <>
      <style>{pageStyles}</style>
      <Navbar />
      <section className="page-header">
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
