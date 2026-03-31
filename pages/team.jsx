import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import team from '../src/data/team.json';

export default function Team() {
  return (
    <>
      <Navbar />
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-center">Our Team</h1>
          <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Meet the talented people behind our success.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <div className="h-64 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-600">Photo</p>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.title}</p>
                  <p className="text-gray-700">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
