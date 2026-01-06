export default function Contact() {
  return (
    <div className="fade-in contact-section">
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        gap: '60px', // Adjusted for a cleaner middle gap
        flexWrap: 'wrap',
        maxWidth: '1000px', // Optional: prevents the section from getting too wide on huge screens
        margin: '0 auto'    // Centers the entire container
      }}>
        
        {/* LEFT COLUMN: Takes up exactly half the space */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start' 
        }}>
          <h2 style={{ marginBottom: '5px' }}>Get In Touch</h2>
          <p style={{ marginBottom: '20px', opacity: 0.8 }}>Have a question or want to work together?</p>
          
          <div className="contact-info" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <a href="mailto:arcayanathantimothy@gmail.com" style={{ color: 'inherit', textDecoration: 'none' }}>arcayanathantimothy@gmail.com</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              <a href="https://www.linkedin.com/in/nathan-arcaya-a86541327/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn: Nathan Arcaya</a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
              <a href="https://github.com/NatDeCocoaaa" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>GitHub: Nathan Arcaya</a>
            </div>
          </div>

          <a 
            href="https://asiapacificcollege-my.sharepoint.com/:b:/g/personal/nsarcaya_student_apc_edu_ph/IQD2O4bo3MJJSYw9e1YRyWOvAZoYl2a6JAVwVU9hwJZ5HfY?e=zgalcW" 
            target="_blank" 
            rel="noreferrer" 
            className="primary-btn"
            style={{ textDecoration: 'none', display: 'inline-block', marginTop: '30px' }}
          >
            View Resume
          </a>
        </div>

        {/* RIGHT COLUMN: Takes up exactly half the space */}
        <div style={{ 
          flex: '1', 
          minWidth: '300px', 
          display: 'flex', 
          justifyContent: 'center' 
        }}>
          <img 
            src="./GIFS/Minecraft_GIF_Loop.gif" 
            alt="Minecraft Scenery GIF"
            style={{ 
              width: '100%', // Changed from 130% to 100% to stay inside its container
              maxWidth: '450px', // Limits how big the GIF can get
              height: 'auto',
              borderRadius: '12px', 
              boxShadow: '0 12px 40px rgba(0,0,0,0.7)',
              border: '1px solid rgba(255,255,255,0.05)'
            }} 
          />
        </div>

      </div>
    </div>
  );
}