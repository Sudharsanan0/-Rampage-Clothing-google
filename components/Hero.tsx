import React from 'react';

const Hero: React.FC = () => {
  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-brand-white bg-no-repeat relative" style={{ backgroundImage: "url('https://www.startupdonut.co.uk/sites/default/files/production%20image/clothingmanufacturer.jpg')" }}>
      <div className="absolute inset-0 bg-brand-dark opacity-40"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight leading-tight">
          Rampage Clothing <span className="text-brand-primary">(PTY)</span>
          <span className="block text-brand-primary">LTD</span>
        </h1>
        <p className="text-xl md:text-2xl text-brand-white/90 mb-8">
          Manufacturers of School & Corporate Uniforms
        </p>
        <a 
          href="#contact" 
          onClick={handleContactClick}
          className="bg-brand-primary text-brand-dark font-bold py-3 px-8 rounded-md hover:brightness-110 transition-all duration-300 transform hover:scale-105"
        >
          Contact Us for Enquiries
        </a>
      </div>
      <div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer group"
        onClick={handleScrollDown}
      >
        <div className="w-8 h-12 border-2 border-brand-primary rounded-full flex justify-center items-start p-1 transition-opacity group-hover:opacity-70">
          <div className="w-1 h-3 bg-brand-primary rounded-full animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;