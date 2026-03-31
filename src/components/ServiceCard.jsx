export default function ServiceCard({ service }) {
  return (
    <style>{`
      .service-card {
        background: white;
        border-radius: var(--radius);
        padding: 2rem;
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        border: 2px solid transparent;
        position: relative;
        overflow: hidden;
      }
      .service-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, var(--color-primary), var(--color-secondary));
        transition: left 0.4s ease;
      }
      .service-card:hover {
        border-color: var(--color-primary);
        box-shadow: 0 12px 32px rgba(217, 117, 83, 0.12);
        transform: translateY(-8px);
      }
      .service-card:hover::before {
        left: 100%;
      }
      .service-icon {
        font-size: 3rem;
        margin-bottom: 1rem;
        transition: transform 0.4s ease;
      }
      .service-card:hover .service-icon {
        transform: scale(1.15) rotate(5deg);
      }
      .service-title {
        font-family: var(--font-display);
        font-size: 1.5rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        color: var(--color-text);
        transition: color 0.3s ease;
      }
      .service-card:hover .service-title {
        color: var(--color-primary);
      }
      .service-description {
        color: var(--color-text-light);
        line-height: 1.6;
        font-weight: 400;
      }
    `} </style>
    <>
      <div className="service-card">
        <div className="service-icon">
          {service.icon === 'star' && '⭐'}
          {service.icon === 'check' && '✓'}
          {service.icon === 'lightning' && '⚡'}
          {service.icon === 'leaf' && '🍃'}
          {service.icon === 'hammer' && '🔨'}
          {service.icon === 'palette' && '🎨'}
        </div>
        <h3 className="service-title">{service.name}</h3>
        <p className="service-description">{service.description}</p>
      </div>
    </>
  );
}
