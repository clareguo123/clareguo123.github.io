import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Resume from './pages/Resume'
import Blog from './pages/Blog'
import Synapse from './pages/Synapse'
import Contact from './pages/Contact'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog/*" element={<Blog />} />
          <Route path="/synapse" element={<Synapse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App