export default function ServiceCard({ service }) {
  return (
    <div className="bg-white h-full flex flex-col">
      {/* Icon Section */}
      <div className="py-8 px-6 text-center" style={{ backgroundColor: 'var(--color-light-bg)' }}>
        <div className="text-5xl mb-4 inline-block">
          {service.icon === 'star' && '⭐'}
          {service.icon === 'check' && '✓'}
          {service.icon === 'lightning' && '⚡'}
          {service.icon === 'leaf' && '🍃'}
          {service.icon === 'hammer' && '🔨'}
          {service.icon === 'palette' && '🎨'}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'var(--font-display)', color: 'var(--color-primary)' }}>
          {service.name}
        </h3>
        <p className="text-base leading-relaxed flex-1" style={{ color: 'var(--color-text-light)' }}>
          {service.description}
        </p>
      </div>
    </div>
  );
}
