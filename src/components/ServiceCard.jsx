export default function ServiceCard({ service }) {
  return (
    <div
      className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-2"
      style={{ borderLeft: '6px solid var(--color-primary)' }}
    >
      <div className="text-5xl mb-6 inline-block">
        {service.icon === 'star' && '⭐'}
        {service.icon === 'check' && '✓'}
        {service.icon === 'lightning' && '⚡'}
        {service.icon === 'leaf' && '🍃'}
        {service.icon === 'hammer' && '🔨'}
        {service.icon === 'palette' && '🎨'}
      </div>
      <h3 className="text-2xl font-bold mb-3 leading-tight" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-text)' }}>
        {service.name}
      </h3>
      <p className="leading-relaxed" style={{ color: 'var(--color-text-light)', fontSize: '1.05rem' }}>
        {service.description}
      </p>
    </div>
  );
}
