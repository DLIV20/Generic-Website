import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import pages from '../src/data/pages.json';

const pageStyles = `
  .page-header {
    background: var(--color-light-bg);
    padding: 3rem 0 2rem;
  }
  .page-title {
    font-family: var(--font-display);
    font-size: 3rem;
    font-weight: 900;
    color: var(--color-text);
    margin-bottom: 2rem;
  }
  .section-title {
    font-family: var(--font-display);
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 1rem;
  }
  .section-text {
    color: var(--color-text-light);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  .values-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .value-item {
    display: flex;
    align-items: center;
    color: var(--color-text-light);
  }
  .value-check {
    color: var(--color-primary);
    font-weight: 900;
    margin-right: 1rem;
    font-size: 1.25rem;
  }
  .image-placeholder {
    background: linear-gradient(135deg, var(--color-light-bg), #e0e0e0);
    border-radius: var(--radius);
    min-height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-light);
  }
`;

export default function About() {
  return (
    <>
      <style>{pageStyles}</style>
      <Navbar />
      <section className="page-header">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="page-title">{pages.about.title}</h1>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="section-text">{pages.about.content}</p>
              <h3 className="section-title">Our Mission</h3>
              <p className="section-text">{pages.mission}</p>
              <h3 className="section-title">Our Values</h3>
              <ul className="values-list">
                {pages.values.map((value, i) => (
                  <li key={i} className="value-item">
                    <span className="value-check">✓</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="image-placeholder">
              <p>About page image goes here</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
