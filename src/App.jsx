import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Certificates from './pages/Certificates'
import Contacts from './pages/Contacts'

function App() {
  const [activePage, setActivePage] = useState('home');

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
    <div className={`portfolio-container ${activePage}-bg`}>
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
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