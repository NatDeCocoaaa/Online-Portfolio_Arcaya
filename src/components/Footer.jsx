/**
 * FOOTER COMPONENT
 * Sitting at the bottom of the 'glass-card' container.
 */
export default function Footer() {
  return (
    <footer className="footer-glass">
      <div className="footer-content">
        {/* Dynamic year ensures that the copyright is always up to date huhu TT */}
        <p>&copy; {new Date().getFullYear()} Nathan Arcaya | Cybersecurity & Forensics</p>
        
        <div className="footer-socials">
          <a 
            href="https://www.linkedin.com/in/nathan-arcaya-a86541327/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/NatDeCocoaaa" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}