import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'submitted'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus('submitting');
    // Simulate network delay for a better user experience
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmissionStatus('submitted');

    // After 5 seconds, reset the form to allow another submission
    setTimeout(() => {
      setSubmissionStatus('idle');
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-brand-bg text-brand-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">Reach out to us</h2>
          <p className="text-lg text-brand-text-light">We’d love to hear from you</p>
          <div className="w-24 h-1 bg-brand-dark mx-auto mt-4"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Form Container */}
          <div className="bg-brand-accent p-8 rounded-lg shadow-md flex items-center justify-center">
            {submissionStatus === 'submitted' ? (
              <div className="text-center py-10">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-brand-primary mx-auto mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-2xl font-bold text-brand-dark mb-2">Thank You!</h3>
                <p className="text-brand-text-light">Your enquiry has been sent. We will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="w-full">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-brand-text-light mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 bg-brand-white text-brand-dark border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-dark" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-brand-text-light mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 bg-brand-white text-brand-dark border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-dark" required />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-brand-text-light mb-2">Phone</label>
                  <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 bg-brand-white text-brand-dark border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-dark" />
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-brand-text-light mb-2">Message</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-3 py-2 bg-brand-white text-brand-dark border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-dark" required></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-brand-dark text-brand-white font-bold py-3 px-6 rounded-md hover:brightness-110 transition-transform duration-300 transform hover:scale-105 disabled:opacity-70 disabled:scale-100 disabled:cursor-not-allowed"
                  disabled={submissionStatus === 'submitting'}
                >
                  {submissionStatus === 'submitting' ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
