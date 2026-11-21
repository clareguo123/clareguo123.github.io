import { HashRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Blog from "./pages/Blog";
import Synapse from "./pages/Synapse";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">
          <div className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-8 sm:py-16">
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/blog/*" element={<Blog />} />
              <Route path="/synapse" element={<Synapse />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/" element={<Navigate replace to="/home" />} />
            </Routes>
          </div>
        </main>
        <footer className="border-t border-border/60 py-8">
          <div className="mx-auto flex max-w-4xl flex-col items-start justify-between gap-2 px-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-8">
            <span className="font-mono">© {new Date().getFullYear()} Clare Guo</span>
            <a
              href="mailto:contact@clareguo.com"
              className="transition-colors hover:text-foreground"
            >
              contact@clareguo.com
            </a>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
