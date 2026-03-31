import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import ContactForm from '../src/components/ContactForm';
import config from '../src/data/config.json';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-black text-center mb-16">Contact Us</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center py-8">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-semibold mb-2">Phone</h3>
              <p className="text-light">{config.phone}</p>
            </div>
            <div className="text-center py-8">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-light">{config.email}</p>
            </div>
            <div className="text-center py-8">
              <div className="text-4xl mb-4">📍</div>
              <h3 className="text-lg font-semibold mb-2">Address</h3>
              <p className="text-light">{config.address}</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
