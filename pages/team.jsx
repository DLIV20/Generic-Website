import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import team from '../src/data/team.json';

export default function Team() {
  return (
    <>
      <Navbar />
      <section className="page-header py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">
            Meet the talented people behind our success.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="team-card">
                <div className="team-photo">Photo</div>
                <div className="team-info">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-title">{member.title}</p>
                  <p className="team-bio">{member.bio}</p>
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
