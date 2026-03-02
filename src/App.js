import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Collections from './pages/Collections';
import Marketplace from './pages/Marketplace';
import Finishing from './pages/Finishing';
import Contact from './pages/Contact';
import PropertyDetails from './pages/PropertyDetails';
import ListUnit from './pages/ListUnit';
import CollectionDetails from './pages/CollectionDetails';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/compounds" element={<Collections />} />
          <Route path="/compounds/:id" element={<CollectionDetails />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/properties/:id" element={<PropertyDetails />} />
          <Route path="/list-unit" element={<ListUnit />} />
          <Route path="/finishing" element={<Finishing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;


