import React from 'react';

const IconCard: React.FC<{ icon: React.ReactNode; title: string; }> = ({ icon, title }) => (
  <div className="bg-brand-accent border border-gray-200 rounded-lg p-6 text-center flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300">
    <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-brand-primary/10">
      {icon}
    </div>
    <h4 className="font-semibold text-brand-dark">{title}</h4>
  </div>
);

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-bg">
      <div className="container mx-auto px-6">
        {/* About Us Intro */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">About Us</h2>
          <p className="text-lg text-brand-text-light">
            Rampage Clothing was established early in 2015. As a dedicated manufacturer of school and corporate wear, we have been committed to providing high-quality products and excellent service for years. We focus on our customers' happiness and have played our part in combating unemployment, contributing to the growth of the South African economy.
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-brand-accent p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4 flex items-center justify-center">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary animate-icon-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Vision</h3>
            </div>
            <p className="text-brand-text-light">
              To be the largest clothing manufacturing company in Africa and see every child in Africa dressed dignified and with pride. To grow current markets through aggressive marketing campaigns.
            </p>
          </div>
          <div className="bg-brand-accent p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 mr-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-brand-primary animate-icon-tock" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-brand-dark">Mission</h3>
            </div>
            <p className="text-brand-text-light">
              To maintain good quality products and excellent customer service. To be an innovative world-class leader in the textile industry in the quest for excellence.
            </p>
          </div>
        </div>

        {/* Our Values */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Our Values</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-20">
          <IconCard
            title="Caring"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary animate-icon-pulse" style={{animationDelay: '0.2s'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
          />
          <IconCard
            title="Quality"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary animate-icon-pulse" style={{animationDelay: '0.4s'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
          />
          <IconCard
            title="Innovation"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary animate-icon-glow" style={{animationDelay: '0.3s'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>}
          />
          <IconCard
            title="Efficiency"
            icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-primary animate-icon-jiggle" style={{animationDelay: '0.5s'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
          />
        </div>

        {/* Foreword & Staff */}
        <div className="bg-brand-dark text-brand-white p-8 md:p-12 rounded-lg max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold text-brand-primary mb-3">Foreword</h3>
            <p className="text-brand-white/90">We are 100% Black-owned (BBBEE) and our outstanding principle is “batho”. Our aim is to work hand in hand with schools and other organisations around Qwaqwa and South Africa as a whole.</p>
          </div>
          <hr className="my-8 border-brand-white/20" />
          <div>
            <h3 className="text-2xl font-bold text-brand-primary mb-3">Our Staff and Production</h3>
            <p className="text-brand-white/90">We have employed more than 160 permanent employees, of which 99.20% are black people from Phuthaditjhaba and neighbouring villages. As per our value statement, ‘Caring’ always comes first to our mind.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;