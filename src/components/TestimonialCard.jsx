export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-primary">
      <div className="flex items-center mb-4">
        <div>
          <p className="font-semibold">{testimonial.name}</p>
          <p className="text-sm text-gray-600">{testimonial.company}</p>
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
      <div className="flex gap-1">
        {[...Array(testimonial.rating)].map((_, i) => (
          <span key={i}>⭐</span>
        ))}
      </div>
    </div>
  );
}
