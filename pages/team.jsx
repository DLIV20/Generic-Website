import Navbar from '../src/components/Navbar';
import Footer from '../src/components/Footer';
import team from '../src/data/team.json';

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
  .team-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  .team-card {
    background: white;
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
  }
  .team-card:hover {
    box-shadow: 0 12px 32px rgba(217, 117, 83, 0.15);
    transform: translateY(-8px);
  }
  .team-photo {
    background: linear-gradient(135deg, var(--color-light-bg), #e0e0e0);
    height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-text-light);
  }
  .team-info {
    padding: 1.5rem;
  }
  .team-name {
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text);
    margin-bottom: 0.5rem;
  }
  .team-title {
    color: var(--color-primary);
    font-weight: 600;
    margin-bottom: 1rem;
    font-size: 0.95rem;
  }
  .team-bio {
    color: var(--color-text-light);
    line-height: 1.6;
  }
`;

export default function Team() {
  return (
    <>
      <style>{pageStyles}</style>
      <Navbar />
      <section className="page-header">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="page-title">Our Team</h1>
          <p className="page-subtitle">
            Meet the talented people behind our success.
          </p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="team-grid">
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
