export default function Navbar({ activePage, setActivePage }) {
  const navItems = ['home', 'about', 'projects', 'certificates', 'contacts'];

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Updated source to Logo.jpg from public folder */}
        <img 
          src="./Logo/Logo.jpg" 
          alt="Nathan Logo" 
          className="nav-logo" 
          onClick={() => setActivePage('home')} 
        />
      </div>
      <div className="nav-links">
        {navItems.map((item) => (
          <button 
            key={item}
            onClick={() => setActivePage(item)}
            className={activePage === item ? 'active' : ''}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}