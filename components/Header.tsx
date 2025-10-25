
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onNavigate: (page: string, sectionId?: string) => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, page: string, sectionId?: string) => {
    e.preventDefault();
    onNavigate(page, sectionId);
  };

  const navLinks = [
    { page: 'home', sectionId: 'about', label: 'About' },
    { page: 'products', label: 'Products' },
    { page: 'home', sectionId: 'contact', label: 'Contact' },
  ];

  const isHomePage = currentPage === 'home';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || !isHomePage ? 'bg-brand-dark shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a 
          href="#"
          onClick={(e) => handleNavClick(e, 'home', 'home')}
          className="text-xl font-bold text-brand-white transition-colors hover:text-brand-primary cursor-pointer"
        >
          Rampage Clothing
        </a>
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
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;