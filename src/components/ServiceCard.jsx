export default function ServiceCard({ service }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <div className="text-4xl mb-4">
        {service.icon === 'star' && '⭐'}
        {service.icon === 'check' && '✓'}
        {service.icon === 'lightning' && '⚡'}
      </div>
      <h3 className="text-xl font-bold mb-3 text-primary">{service.name}</h3>
      <p className="text-gray-700">{service.description}</p>
    </div>
  );
}
