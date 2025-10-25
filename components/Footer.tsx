
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-white/70 py-8">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear() + 1} Rampage Clothing <span className="text-brand-primary font-semibold">(PTY) LTD</span>. All Rights Reserved.</p>
        <p className="mt-2">Powered by <strong className="text-brand-white">Aura Tech</strong></p>
      </div>
    </footer>
  );
};


export default Footer;
