import React, { useState, ReactNode } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import Synapse from './pages/Synapse'
import Contact from './pages/Contact'

function App() {
  const [activePage, setActivePage] = useState('Home')

  // Custom hook to update activePage based on current route
  const PageWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
    const location = useLocation()
    React.useEffect(() => {
      const currentPage = location.pathname.slice(1) || 'Home'
      setActivePage(currentPage.charAt(0).toUpperCase() + currentPage.slice(1))
    }, [location])
    return <>{children}</>
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar activePage={activePage} setActivePage={setActivePage} />
        <main className="flex-grow">
          <PageWrapper>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/synapse" element={<Synapse />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
          </PageWrapper>
        </main>
      </div>
    </Router>
  )
}

export default App