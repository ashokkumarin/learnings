export default function Skills() {
  return (
      <section id="skills" className="container">
          <h2 style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--accent-color)', fontSize: '2.5rem'}}>Core Competencies</h2>
          <div className="skills-grid">
              <div className="card skill-category">
                  <h3>Leadership & Team Building</h3>
                  <div className="skill-tags">
                      <span className="skill-tag">Team Scaling</span>
                      <span className="skill-tag">Culture Transformation</span>
                      <span className="skill-tag">Talent Development</span>
                      <span className="skill-tag">Performance Management</span>
                      <span className="skill-tag">Global Teams</span>
                  </div>
              </div>
              
              <div className="card skill-category">
                  <h3>Technology Strategy</h3>
                  <div className="skill-tags">
                      <span className="skill-tag">Microservices</span>
                      <span className="skill-tag">Azure Cloud</span>
                      <span className="skill-tag">Distributed Systems</span>
                      <span className="skill-tag">DevOps</span>
                      <span className="skill-tag">Architecture Design</span>
                  </div>
              </div>
              
              <div className="card skill-category">
                  <h3>Technical Stack</h3>
                  <div className="skill-tags">
                      <span className="skill-tag">.NET/C#</span>
                      <span className="skill-tag">Node.js</span>
                      <span className="skill-tag">React</span>
                      <span className="skill-tag">Python</span>
                      <span className="skill-tag">MongoDB</span>
                      <span className="skill-tag">Kafka</span>
                  </div>
              </div>
              
              <div className="card skill-category">
                  <h3>Program Management</h3>
                  <div className="skill-tags">
                      <span className="skill-tag">Agile/SAFe</span>
                      <span className="skill-tag">Roadmap Planning</span>
                      <span className="skill-tag">KPI Tracking</span>
                      <span className="skill-tag">Stakeholder Management</span>
                      <span className="skill-tag">Risk Mitigation</span>
                  </div>
              </div>
              
              <div className="card skill-category">
                  <h3>AI & Innovation</h3>
                  <div className="skill-tags">
                      <span className="skill-tag">AI Integration</span>
                      <span className="skill-tag">Data-Driven Decisions</span>
                      <span className="skill-tag">Innovation Strategy</span>
                      <span className="skill-tag">Digital Transformation</span>
                  </div>
              </div>
              
              <div className="card skill-category">
                  <h3>Certifications</h3>
                  <div className="skill-tags">
                      <span className="skill-tag">PMP® Certified</span>
                      <span className="skill-tag">SAFe® 5 Agilist</span>
                      <span className="skill-tag">Certified Scrum Master</span>
                      <span className="skill-tag">M.Sc Business Analytics</span>
                  </div>
              </div>
          </div>
      </section>

  );
}