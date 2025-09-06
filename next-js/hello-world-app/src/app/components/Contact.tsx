const Contact = () => {
  return (
    <section id="contact" className="container">
        <div className="card" style={{textAlign: 'center'}}>
            <h2 style={{color: 'var(--accent-color)', marginBottom: '2rem', fontSize: '2.5rem'}}>&apos;Let&apos;s Connect&apos;</h2>
            <p style={{color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.2rem'}}>
                Interested in discussing engineering leadership, technology strategy, or potential collaborations?
            </p>
            <div className="cta-buttons">
                <a href="mailto:aashokkumarin@hotmail.com" className="btn btn-primary">Email Me</a>
                <a href="https://www.linkedin.com/in/ashok-kumar-anbalagan-61120921/" className="btn btn-secondary" target="_blank">LinkedIn</a>
            </div>
            <p style={{color: 'var(--text-secondary)', marginTop: '2rem'}}>
                📍 Based in Bengaluru, Karnataka, India<br />
                📱 +91-94480 70477
            </p>
        </div>
    </section>

  );
}

export default Contact;