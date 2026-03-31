import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import pages from '../src/data/pages.json';

export default function About() {
  return (
    <>
      <Navbar />
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-8">{pages.about.title}</h1>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">{pages.about.content}</p>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-700 mb-6">{pages.mission}</p>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2">
                {pages.values.map((value, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-primary font-bold mr-3">✓</span>
                    {value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">About page image goes here</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
