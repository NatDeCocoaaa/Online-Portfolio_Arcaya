export default function About() {
  const skills = ["Database Design","Web Development", "Networking", "Python", "Java", "SQL"];
  const strengths = ["Analytical Thinking", "Problem Solving", "Documentation & Organization", "Detail-Oriented", "Adaptability", "Team Collaboration", "User-Centered Thinking", "Research-Oriented Mindset"];

  return (
    <div 
      className="fade-in about-wrapper"
      style={{
        backgroundImage: 'url("/Background/About.jpg")', // Put your background here
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '40px 20px'
      }}
    >
      <h2 className="main-name" style={{fontSize: '2.5rem'}}>About Me</h2>
      
      <p className="hero-description" style={{maxWidth: '100%'}}>
        I am a 2nd Year Computer Science student at Asia Pacific College, 
        specializing in Cybersecurity and Forensics. I focus on building secure 
        systems and investigating digital vulnerabilities.
      </p>

      <div className="about-details-grid">
        {/* Technical Section */}
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

        {/* Education Section */}
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

            <div className="timeline-item">
              <span className="timeline-date">2011 - 2015</span>
              <div className="school-header">
                <strong className="school-title">St. Mary's of the Woods School</strong>
              </div>
              <p className="school-subtitle">STEM Strand | With High Honors</p>
            </div>

            <div className="timeline-item">
              <span className="timeline-date">2009 - 2011</span>
              <div className="school-header">
                <strong className="school-title">Little Friends Academy</strong>
              </div>
              <p className="school-subtitle">STEM Strand | With High Honors</p>
            </div>

          </div>
        </div>
      </div>

      <div className="career-highlight">
        <h4 className="column-label">Career Objectives</h4>
        <p className="hero-description" style={{fontSize: '0.9rem', margin: '0'}}>
          I aim to leverage my forensic knowledge to protect organizations from emerging threats and lead a Digital Forensics team.
        </p>
      </div>

      {/* Profile Image (Optional) */}
      <div style={{ marginTop: '30px', textAlign: 'center' }}>
        <img 
          src="/Photos/Me.jpg" // Use public folder
          alt="Nathan Arcaya"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            border: '2px solid white',
            objectFit: 'cover',
            boxShadow: '0 5px 20px rgba(0,0,0,0.6)'
          }}
        />
      </div>
    </div>
  );
}
