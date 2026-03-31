export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white p-8 border-l-4 border-primary">
      {/* Rating */}
      <div className="mb-6 text-xl">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-lg mb-6 italic leading-relaxed">
        &ldquo;{testimonial.text}&rdquo;
      </p>

      {/* Author */}
      <div>
        <p className="font-bold text-base primary-color">
          {testimonial.name}
        </p>
        <p className="text-sm text-light">
          {testimonial.company}
        </p>
      </div>
    </div>
  );
}
