import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <Navbar />
      <section className="py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, the page you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition"
          >
            Go Home
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}
