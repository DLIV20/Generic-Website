import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import GalleryGrid from '../src/components/GalleryGrid';
import gallery from '../src/data/gallery.json';

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
`;

export default function Portfolio() {
  return (
    <>
      <style>{pageStyles}</style>
      <Navbar />
      <section className="page-header">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="page-title">Our Portfolio</h1>
          <p className="page-subtitle">
            Explore our recent projects and see what we can do for you.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <GalleryGrid items={gallery} />
        </div>
      </section>
      <Footer />
    </>
  );
}
