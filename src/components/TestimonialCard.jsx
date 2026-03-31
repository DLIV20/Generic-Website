const testimonialStyles = `
  .testimonial-card {
    background: white;
    border-radius: var(--radius);
    padding: 1.5rem;
    border-left: 5px solid var(--color-primary);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }
  .testimonial-card:hover {
    box-shadow: 0 8px 24px rgba(217, 117, 83, 0.15);
    transform: translateY(-4px);
  }
  .testimonial-name {
    font-family: var(--font-display);
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.25rem;
  }
  .testimonial-company {
    font-size: 0.875rem;
    color: var(--color-text-light);
  }
  .testimonial-text {
    color: var(--color-text);
    font-style: italic;
    line-height: 1.6;
    margin: 1rem 0;
  }
  .testimonial-rating {
    font-size: 1.1rem;
  }
`;

export default function TestimonialCard({ testimonial }) {
  return (
    <>
      <style>{testimonialStyles}</style>
      <div className="testimonial-card">
        <div className="mb-4">
          <p className="testimonial-name">{testimonial.name}</p>
          <p className="testimonial-company">{testimonial.company}</p>
        </div>
        <p className="testimonial-text">&ldquo;{testimonial.text}&rdquo;</p>
        <div className="testimonial-rating">
          {[...Array(testimonial.rating)].map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>
    </>
  );
}
