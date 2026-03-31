export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition hover:-translate-y-2" style={{ borderLeft: '5px solid var(--color-primary)' }}>
      <div className="text-4xl mb-4">
        {service.icon === 'star' && '⭐'}
        {service.icon === 'check' && '✓'}
        {service.icon === 'lightning' && '⚡'}
        {service.icon === 'leaf' && '🍃'}
        {service.icon === 'hammer' && '🔨'}
        {service.icon === 'palette' && '🎨'}
      </div>
      <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--color-primary)', fontFamily: 'var(--font-display)' }}>{service.name}</h3>
      <p style={{ color: 'var(--color-text-light)' }}>{service.description}</p>
    </div>
  );
}
