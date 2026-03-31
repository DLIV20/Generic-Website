import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import GalleryGrid from '../src/components/GalleryGrid';
import gallery from '../src/data/gallery.json';

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Portfolio</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Explore our recent projects and see what we can do for you.
          </p>
          <GalleryGrid items={gallery} />
        </div>
      </section>
      <Footer />
    </>
  );
}
