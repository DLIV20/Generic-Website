import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import pages from '../src/data/pages.json';

export default function About() {
  return (
    <>
      <Navbar />
      <section className="page-header py-12">
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
            <div className="bg-gradient-to-br from-[var(--color-light-bg)] to-gray-300 rounded-lg min-h-[400px] flex items-center justify-center text-light">
              <p>About page image goes here</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
