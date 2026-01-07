/**
 * ABOUT PAGE
 * Showcases technical proficiency, soft skills, and educational background.
 * Uses a grid layout to separate skills from the academic timeline.
 */
export default function About() {
  const skills = ["Database Design","Web Development", "Networking", "Python", "Java", "SQL"];
  const strengths = ["Analytical Thinking", "Problem Solving", "Documentation & Organization", "Detail-Oriented", "Adaptability", "Team Collaboration", "User-Centered Thinking", "Research-Oriented Mindset"];

  return (
    <div className="fade-in about-wrapper">
      <h2 className="main-name" style={{fontSize: '2.5rem'}}>About Me</h2>
      
      <p className="hero-description" style={{maxWidth: '100%'}}>
        I am a 2nd Year Computer Science student at Asia Pacific College, 
        specializing in Cybersecurity and Forensics. I focus on building secure 
        systems and investigating digital vulnerabilities.
      </p>

      <div className="about-details-grid">
        {/* Left Column are Skills & Strengths */}
        <div className="about-col">
          <h4 className="column-label">Technical Skills</h4>
          <div className="badge-group">
            {skills.map(skill => <span key={skill} className="cyber-pill">{skill}</span>)}
          </div>
          
          <h4 className="column-label" style={{marginTop: '30px'}}>Core Strengths</h4>
          <div className="badge-group">
            {strengths.map(s => <span key={s} className="cyber-pill professional">{s}</span>)}
          </div>
        </div>

        {/* Right Column are Interactive Timelines for Education or Work */}
        <div className="about-col">
          <h4 className="column-label">Academic History</h4>
          <div className="timeline-container">
            <div className="timeline-item">
              <span className="timeline-date">2024 - Present</span>
              <div className="school-header">
                <strong className="school-title">Asia Pacific College</strong>
              </div>
              <p className="school-subtitle">BS Computer Science (Cybersecurity)</p>
              <p className="school-status">Ongoing</p>
            </div>
            
            <div className="timeline-item">
              <span className="timeline-date">2022 - 2024</span>
              <div className="school-header">
                <strong className="school-title">Don Bosco Paranaque High School</strong>
              </div>
              <p className="school-subtitle">TVL Strand | With High Honors</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2015 - 2022</span>
              <div className="school-header">
                <strong className="school-title">Mother Maria Maddalena Starace School</strong>
              </div>
              <p className="school-subtitle">STEM Strand | With High Honors</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}