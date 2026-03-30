import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services.json';

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Services</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            We offer a comprehensive range of services to meet your needs.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
