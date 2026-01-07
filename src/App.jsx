import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contacts from './pages/Contacts'

/** * ASSET IMPORTS
 * Vite requires images to be imported as modules when stored in 'src/assets'
 * this is forcorrect pathing during the production build.
 */
import HomeBG from './assets/Background/Home.jpg'
import AboutBG from './assets/Background/About.jpg'
import ProjectsBG from './assets/Background/Projects.jpg'
import CertificatesBG from './assets/Background/Certificates.jpg'
import ContactsBG from './assets/Background/Contacts.jpg'

function App() {
  // tracks the current active page for navigation and background switching
  const [activePage, setActivePage] = useState('home');

  /**
   * Background Mapping
   * Links the activePage state string to the imported image module.
   */
  const backgroundMap = {
    home: HomeBG,
    about: AboutBG,
    projects: ProjectsBG,
    certificates: CertificatesBG,
    contacts: ContactsBG
  };

  // Helper function to render the correct component based on state
  const renderPage = () => {
    switch(activePage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'projects': return <Projects />;
      case 'certificates': return <Certificates />;
      case 'contacts': return <Contacts />;
      default: return <Home />;
    }
  }

  return (
    /**
     * MAIN CONTAINER
     * Inline styles are used here to keep update of the background image
     * based on the activePage state. Includes a dark linear gradient for readability on contexts.
     */
    <div 
      className="portfolio-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${backgroundMap[activePage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // Creates Parallax-like effect like Kaliedoscopes
      }}
    >
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main className="main-content">
        {/* The Glass Card are the central content container with frosted glass effect */}
        <div className="glass-card">
          <div className="content-area">
            {renderPage()}
          </div>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App