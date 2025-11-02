import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Blog from './pages/Blog';
import Synapse from './pages/Synapse';
import Contact from './pages/Contact';
import SynapseWhitepaper from './pages/Synapse_Whitepaper';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/blog/*" element={<Blog />} />
        <Route path="/synapse" element={<Synapse />} />
        <Route path="/synapse-whitepaper" element={<SynapseWhitepaper />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Navigate replace to="/home" />} />
      </Routes>
    </Router>
  );
}

export default App;