import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ServiceCard from '../src/components/ServiceCard';
import services from '../src/data/services.json';

const pageStyles = `
  .page-header {
    background: var(--color-light-bg);
    padding: 5rem 0 2rem;
  }
  .page-title {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-text);
    margin-bottom: 1rem;
    text-align: center;
  }
  .page-subtitle {
    font-size: 1.125rem;
    color: var(--color-text-light);
    text-align: center;
    max-width: 600px;
    margin: 0 auto 4rem;
    line-height: 1.6;
  }
  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default function Services() {
  return (
    <>
      <style>{pageStyles}</style>
      <Navbar />
      <section className="page-header">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="page-title">Our Services</h1>
          <p className="page-subtitle">
            We offer a comprehensive range of services to meet your needs.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="services-grid">
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
