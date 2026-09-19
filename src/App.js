import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Home />
        <About />
        <Work />
        <Skills />
      </main>
      <Contact />
    </div>
  );
}

export default App;
