import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ContactForm from '../src/components/ContactForm';
import config from '../src/data/config.json';

const pageStyles = `
  .page-title {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-text);
    margin-bottom: 4rem;
    text-align: center;
  }
  .contact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
  .contact-card {
    text-align: center;
    padding: 2rem 1rem;
  }
  .contact-icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }
  .contact-label {
    font-family: var(--font-display);
    font-size: 1.1rem;
    font-weight: 600;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }
  .contact-info {
    color: var(--color-text-light);
  }
  .form-section {
    max-width: 600px;
    margin: 0 auto;
  }
  .form-title {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 2rem;
    text-align: center;
  }
`;

export default function Contact() {
  return (
    <>
      <style>{pageStyles}</style>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="page-title">Contact Us</h1>
          <div className="contact-grid">
            <div className="contact-card">
              <div className="contact-icon">📞</div>
              <h3 className="contact-label">Phone</h3>
              <p className="contact-info">{config.phone}</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📧</div>
              <h3 className="contact-label">Email</h3>
              <p className="contact-info">{config.email}</p>
            </div>
            <div className="contact-card">
              <div className="contact-icon">📍</div>
              <h3 className="contact-label">Address</h3>
              <p className="contact-info">{config.address}</p>
            </div>
          </div>
          <div className="form-section">
            <h2 className="form-title">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
