export default function Home() {
  return (
    <div className="fade-in home-layout">
      {/* Profile Image Section */}
      <div className="profile-container">
        <img src="./Photos/Me.jpg" alt="Nathan Arcaya" className="profile-pic" />
      </div>
      
      {/* Identity Section */}
      <h1 className="main-name">Nathan Arcaya</h1>
      
      {/* Tags Section */}
      <div className="badge-group">
        <span className="cyber-pill">Computer Science Student</span>
        <span className="cyber-pill">Cybersecurity and Forensics</span>
      </div>

      <div className="badge-group">
        <span className="cyber-pill professional">Aspiring Cybersecurity Professional</span>
      </div>

      {/* Bio Section */}
      <p className="hero-description">
        In the realm of technology, I aspire efficiency, innovation, and well-being.
      </p>
    </div>
  );
}