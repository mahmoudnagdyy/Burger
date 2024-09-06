import { useEffect } from 'react';
import './App.css';
import Contact from './components/Contact';
import Delivery from './components/Delivery';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Popular from './components/Popular';
import Recipe from './components/Recipe';

import AOS from 'aos';
import 'aos/dist/aos.css';

import 'animate.css';

function App() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="App">
      <Header />
      <Home />
      <Recipe />
      <Popular />
      <Delivery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
