export default function About() {
    return (
    <section className="container">
        <div className="achievements-highlights">
            <div className="card">
                <h2 style={{textAlign: "center", marginBottom: "2rem", color: "var(--accent-color)"}}>Key Achievements</h2>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                    gap: "2rem"
                }}>
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontSize: "2.5rem", color: "var(--accent-color)", marginBottom: "0.5rem" }}>60+</h3>
                        <p>Engineers Led</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontSize: "2.5rem", color: "var(--accent-color)", marginBottom: "0.5rem" }}>92%</h3>
                        <p>Team Engagement</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontSize: "2.5rem", color: "var(--accent-color)", marginBottom: "0.5rem" }}>35%</h3>
                        <p>Test Coverage Achieved</p>
                    </div>
                    <div style={{ textAlign: "center" }}>
                        <h3 style={{ fontSize: "2.5rem", color: "var(--accent-color)", marginBottom: "0.5rem" }}>20%+</h3>
                        <p>Productivity Gains</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}