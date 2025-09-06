export default function Experience() {
  return (
    <section id="experience" className="container">
      <h2 style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--accent-color)', fontSize: '2.5rem'}}>Professional Journey</h2>
      <div className="experience-grid">
          <div className="experience-item card">
              <div className="experience-timeline">
                  <div className="year">2024 - Present</div>
                  <div className="company">Greenway Health</div>
              </div>
              <div className="experience-content">
                  <h3>Director of Development Engineering</h3>
                  <div className="tech-stack">C# WinForms • WPF • Progress ABL • MSSQL</div>
                  <p>Leading 60+ engineers delivering EHR products for ambulatory and dental care, driving digital transformation and AI integration.</p>
                  <ul className="achievements">
                      <li>Scaled test automation coverage from 19% to 35%, accelerating release cycles</li>
                      <li>Led complex migration from Progress DB to PASOE for improved scalability</li>
                      <li>Revived shelved EHR project with TFS to Git migration and new team build</li>
                      <li>Launched DevAcademy talent pipeline with campus recruitment program</li>
                      <li>Established AI-driven innovation backlog for intelligent product capabilities</li>
                  </ul>
              </div>
          </div>

          <div className="experience-item card">
              <div className="experience-timeline">
                  <div className="year">2022 - 2024</div>
                  <div className="company">Intelex Technologies</div>
              </div>
              <div className="experience-content">
                  <h3>Senior Software Development Manager & Site Lead</h3>
                  <div className="tech-stack">C# • ASP.NET • Node.js • React.TS • MongoDB • Kafka • Azure</div>
                  <p>Built and scaled offshore development center, establishing 7 Agile teams with 60+ engineers.</p>
                  <ul className="achievements">
                      <li>Grew site from 0 to 60+ engineers across 7 Agile teams within 2 years</li>
                      <li>Reduced onboarding ramp-up to 1 month for new hires</li>
                      <li>Introduced SAFe methodology for improved collaboration</li>
                      <li>Actively influenced key architectural decisions and design discussions</li>
                  </ul>
              </div>
          </div>

          <div className="experience-item card">
              <div className="experience-timeline">
                  <div className="year">2016 - 2022</div>
                  <div className="company">Tektronix</div>
              </div>
              <div className="experience-content">
                  <h3>Engineering Manager</h3>
                  <div className="tech-stack">.NET • C# • Python • ASP.NET • Windows MVC</div>
                  <p>Led multi-product portfolio including TekExpress and high-speed test suites, driving culture transformation.</p>
                  <ul className="achievements">
                      <li>Increased team engagement from 57% to 92% through mentoring and growth paths</li>
                      <li>Delivered 40+ high-speed serial test products</li>
                      <li>Transitioned legacy products to web-based architecture</li>
                      <li>Modernized architecture for improved performance and maintainability</li>
                  </ul>
              </div>
          </div>

          <div className="experience-item card">
              <div className="experience-timeline">
                  <div className="year">2002 - 2016</div>
                  <div className="company">Multiple Organizations</div>
              </div>
              <div className="experience-content">
                  <h3>Senior Software Engineer to Program Manager</h3>
                  <div className="tech-stack">Various Technologies • Vision Systems • Test Automation</div>
                  <p>Progressive roles at Tektronix, Robert Bosch, and Soliton Technologies, building expertise in program management and engineering excellence.</p>
                  <ul className="achievements">
                      <li>Delivered award-winning Vision-Based Inspection Systems (NI-Week 2003 & 2004)</li>
                      <li>Held positions as Program Manager, Project Lead/Scrum Master, and Senior Engineer</li>
                      <li>Built foundation in automotive and test measurement domains</li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
  );
}