import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import config from '../data/config.json';

export default function Contact() {
  return (
    <>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8 text-center">Contact Us</h1>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-3xl mb-4">📞</div>
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">{config.phone}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📧</div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">{config.email}</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600">{config.address}</p>
            </div>
          </div>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
