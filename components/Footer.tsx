
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-brand-white/70 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8 text-center md:text-left">
          {/* Column 1: Address */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-3">Company Address</h3>
            <p className="text-sm leading-relaxed">
              Site No. 52 Factory 36 D, Mohale Street, Industrial Area 2, Phuthaditjhaba, 9866
            </p>
          </div>

          {/* Column 2: Contact */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-3">Contact Numbers</h3>
            <p className="text-sm">Tel: 058 713 1478</p>
            <p className="text-sm">Mobile: 063 5213 158 / 073 375 2146</p>
          </div>

          {/* Column 3: Company Details */}
          <div>
            <h3 className="text-lg font-semibold text-brand-white mb-3">Company Details</h3>
            <p className="text-sm">VAT: 4810277485</p>
            <p className="text-sm">Reg No: 2014/250625/07</p>
          </div>
        </div>

        <div className="border-t border-brand-white/20 pt-6 mt-8 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear() + 1} Rampage Clothing <span className="text-brand-primary font-semibold">(PTY) LTD</span>. All Rights Reserved.</p>
          <p className="mt-2 text-sm">Powered by <strong className="text-brand-white">Aura Tech</strong></p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
