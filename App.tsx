
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProductsPage from './pages/ProductsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string, sectionId?: string) => {
    // If the target is a section on the home page
    if (page === 'home' && sectionId) {
      // If we are not on the home page, switch to it first, then scroll
      if (currentPage !== 'home') {
        setCurrentPage('home');
        // Wait for the DOM to update before scrolling
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        // Already on the home page, just scroll
        const element = document.getElementById(sectionId);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If the target is a new page
      setCurrentPage(page);
      window.scrollTo(0, 0); // Scroll to the top of the new page
    }
  };

  return (
    <div className="bg-brand-bg text-brand-text">
      <Header onNavigate={handleNavigation} currentPage={currentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <About />
            <Products />
            <Contact />
          </>
        ) : currentPage === 'products' ? (
          <ProductsPage />
        ) : null}
      </main>
      <Footer />
    </div>
  );
};

export default App;