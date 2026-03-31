export default function TestimonialCard({ testimonial }) {
  return (
    <div
      className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
      style={{ borderLeft: '6px solid var(--color-primary)' }}
    >
      {/* Stars */}
      <div className="mb-6 text-xl">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg mb-8 italic leading-relaxed" style={{ color: 'var(--color-text)' }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author Info */}
      <div>
        <p className="font-bold text-lg" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
          {testimonial.name}
        </p>
        <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
          {testimonial.company}
        </p>
      </div>
    </div>
  );
}
