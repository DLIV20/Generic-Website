export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition hover:-translate-y-2" style={{ borderLeft: '5px solid var(--color-primary)' }}>
      <p className="font-bold mb-1" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>{testimonial.name}</p>
      <p className="text-sm text-gray-600 mb-4">{testimonial.company}</p>
      <p className="italic mb-4" style={{ color: 'var(--color-text-light)' }}>&ldquo;{testimonial.text}&rdquo;</p>
      <div className="text-lg">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    </div>
  );
}
