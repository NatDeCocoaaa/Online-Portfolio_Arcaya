export default function Footer() {
  return (
    <footer className="footer-glass">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Nathan Arcaya | Cybersecurity & Forensics</p>
        <div className="footer-socials">
          <a href="#" target="_blank">LinkedIn</a>
          <a href="#" target="_blank">GitHub</a>
        </div>
      </div>
    </footer>
  );
}