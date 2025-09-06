export default function Blog() {
  return (
    <section id="blog" className="container">
      <h2 style={{textAlign: 'center', marginBottom: '3rem', color: 'var(--accent-color)', fontSize: '2.5rem'}}>Knowledge Hub</h2>
      <div className="blog-preview">
          <h2>Learning Notes & Tech Insights</h2>
          <p style={{color: 'var(--text-secondary)', marginBottom: '2rem'}}>
              Sharing my continuous learning journey, technical insights, and leadership experiences. 
              These blogs serve as my personal knowledge repository and reference notes.
          </p>
          
          <div className="upcoming-topics">
              <div className="topic-card">
                  <h4 style={{color: 'var(--accent-color)', marginBottom: '1rem'}}>🚀 Coming Soon</h4>
                  <h3>AWS Cloud Practitioner Notes</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
                      Comprehensive guide to AWS services, best practices, and certification insights
                  </p>
              </div>
              
              <div className="topic-card">
                  <h4 style={{color: 'var(--accent-color)', marginBottom: '1rem'}}>💡 Planned Topics</h4>
                  <h3>Engineering Leadership</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
                      Team scaling strategies, culture transformation, and performance optimization
                  </p>
              </div>
              
              <div className="topic-card">
                  <h4 style={{color: 'var(--accent-color)', marginBottom: '1rem'}}>🔧 Tech Deep Dives</h4>
                  <h3>Architecture & Patterns</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
                      Microservices, distributed systems, and cloud-native architectures
                  </p>
              </div>
              
              <div className="topic-card">
                  <h4 style={{color: 'var(--accent-color)', marginBottom: '1rem'}}>🤖 AI Integration</h4>
                  <h3>AI in Enterprise</h3>
                  <p style={{color: 'var(--text-secondary)', fontSize: '0.9rem'}}>
                      Practical approaches to AI adoption in enterprise software development
                  </p>
              </div>
          </div>
          
          <p style={{color: 'var(--text-secondary)', marginTop: '2rem', fontStyle: 'italic'}}>
              📝 Blog section will be updated regularly with new insights and learning notes
          </p>
      </div>
    </section>
  );
}