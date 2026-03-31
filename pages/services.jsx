import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ServiceCard from '../src/components/ServiceCard';
import services from '../src/data/services.json';

export default function Services() {
  return (
    <>
      <Navbar />
      <section className="page-header py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="page-title">Our Services</h1>
          <p className="text-lg text-light text-center max-w-2xl mx-auto mb-8">
            We offer a comprehensive range of services to meet your needs.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
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
