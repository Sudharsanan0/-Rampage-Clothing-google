
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: string, sectionId?: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on resize to desktop to prevent layout issues
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, sectionId?: string) => {
    e.preventDefault();
    onNavigate(page, sectionId);
    setIsMenuOpen(false); // Close menu on navigation
  };

  const navLinks = [
    { page: 'home', sectionId: 'about', label: 'About' },
    { page: 'products', label: 'Products' },
    { page: 'home', sectionId: 'contact', label: 'Contact' },
  ];

  const isHomePage = currentPage === 'home';

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, 'home', 'home')}
            className="text-xl font-bold text-brand-white transition-colors hover:text-brand-primary cursor-pointer"
          >
            Rampage Clothing
          </a>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href="#"
                onClick={(e) => handleNavClick(e, link.page, link.sectionId)}
                className="text-brand-white font-semibold hover:text-brand-primary transition-colors duration-300 cursor-pointer"
              >
                {link.label}
              </a>
            ))}
          </nav>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="text-brand-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-brand-dark bg-opacity-95 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
           <a
            href="#"
            onClick={(e) => handleNavClick(e, 'home', 'home')}
            className="text-xl font-bold text-brand-white transition-colors hover:text-brand-primary cursor-pointer"
          >
            Rampage Clothing
          </a>
          <button
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
            className="text-brand-white focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center justify-center h-full -mt-20">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href="#"
              onClick={(e) => handleNavClick(e, link.page, link.sectionId)}
              className="text-3xl text-brand-white font-bold my-4 hover:text-brand-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
