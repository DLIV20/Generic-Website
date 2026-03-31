export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-8 border-l-4" style={{ borderColor: 'var(--color-primary)' }}>
      {/* Rating */}
      <div className="mb-6 text-xl">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg mb-6 italic leading-relaxed" style={{ color: 'var(--color-text)' }}>
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div>
        <p className="font-bold text-base" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
          {testimonial.name}
        </p>
        <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>
          {testimonial.company}
        </p>
      </div>
    </div>
  );
}
