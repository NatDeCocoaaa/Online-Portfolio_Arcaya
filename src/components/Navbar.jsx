/**
 * NAVBAR COMPONENT
 * Receives 'activePage' and 'setActivePage' from App.jsx as props.
 * This allows the Navbar to change the global state, which in turn
 * switches the Background Image and the Page Content.
 */

import nathanLogo from '../assets/Logo/Logo.jpg';

export default function Navbar({ activePage, setActivePage }) {
  // Navigation items matching the 'activePage' state keys in App.jsx
  const navItems = ['home', 'about', 'projects', 'certificates', 'contacts'];

  return (
    <nav className="navbar">
      <div className="logo-container">
        {/* Logo acts as another home button */}
        <img 
          src={nathanLogo} 
          alt="Nathan Logo" 
          className="nav-logo" 
          onClick={() => setActivePage('home')} 
        />
      </div>

      <div className="nav-links">
        {navItems.map((item) => (
          <button 
            key={item}
            // Updates the state in App.jsx when clicked
            onClick={() => setActivePage(item)}
            // Shows a subtle highlight on the button if it matches the current page
            className={activePage === item ? 'active' : ''}
          >
            {/* Capitalizes the first letter (e.g., 'home' -> 'Home') */}
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
}