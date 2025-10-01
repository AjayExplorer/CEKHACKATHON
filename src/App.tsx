import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Registration from './pages/Registration';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Home />
        <Team />
        <About />
        <Schedule />
        <Registration />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
