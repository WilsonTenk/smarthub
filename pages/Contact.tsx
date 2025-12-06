import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      
      {/* Header */}
      <div className="bg-brand-navy text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="right">
            <h1 className="font-display font-black text-6xl md:text-8xl uppercase mb-6">Contact <span className="text-brand-green">& Donate</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
               Join us in empowering young people across Ghana. Your contribution makes a lasting difference.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Donate Box */}
          <div className="order-1">
             <AnimatedSection direction="right" className="bg-brand-blue rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green rounded-full blur-[100px] opacity-30"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-navy rounded-full blur-[100px] opacity-40"></div>

                <div className="relative z-10">
                   <h2 className="font-display font-black text-4xl uppercase mb-8 border-l-8 border-brand-green pl-6">
                     Bank Transfer
                   </h2>
                   
                   <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/10 mb-8">
                      <div className="space-y-6 font-mono text-lg">
                         <div className="flex flex-col md:flex-row md:justify-between border-b border-white/10 pb-4">
                           <span className="text-gray-300 uppercase text-xs tracking-widest mb-1 md:mb-0">Bank</span>
                           <span className="font-bold text-xl">Fidelity Bank, Ho</span>
                         </div>
                         <div className="flex flex-col md:flex-row md:justify-between border-b border-white/10 pb-4">
                           <span className="text-gray-300 uppercase text-xs tracking-widest mb-1 md:mb-0">Account Name</span>
                           <span className="font-bold text-xl">The SMART Hub</span>
                         </div>
                         <div className="flex flex-col md:flex-row md:justify-between pt-2">
                           <span className="text-gray-300 uppercase text-xs tracking-widest mb-1 md:mb-0">Account Number</span>
                           <span className="font-black text-2xl text-brand-green tracking-wider">2090251830214</span>
                         </div>
                      </div>
                   </div>

                   <h3 className="font-display font-black text-2xl uppercase mb-4">In-Kind Donations</h3>
                   <div className="flex flex-wrap gap-3">
                      {["Educational materials", "Sanitary products", "Digital equipment"].map(item => (
                        <span key={item} className="px-4 py-2 bg-white/10 rounded-full border border-white/20 text-sm font-bold uppercase tracking-wide">
                          {item}
                        </span>
                      ))}
                   </div>
                </div>
             </AnimatedSection>
          </div>

          {/* Contact Info */}
          <div className="order-2 flex flex-col justify-center">
            <AnimatedSection direction="right" delay={0.2}>
              <h2 className="font-display font-black text-4xl text-brand-navy uppercase mb-10">Get In Touch</h2>
              
              <div className="space-y-10">
                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-brand-navy uppercase mb-1">Visit Us</h3>
                    <p className="text-gray-600 text-lg">Daglama Street, Near Mirage, Ho</p>
                    <p className="text-gray-600 text-lg">House Number: AJ552</p>
                    <p className="text-gray-400 text-sm mt-1 uppercase tracking-wide">Digital Address: VH-0109-9423</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-brand-navy uppercase mb-1">Call Us</h3>
                    <p className="text-gray-600 text-lg">+233 20 437 4782</p>
                    <p className="text-gray-600 text-lg">+233 59 409 7370</p>
                    <p className="text-brand-green text-xs font-bold mt-2 uppercase tracking-widest bg-green-50 px-2 py-1 inline-block rounded">WhatsApp Available</p>
                  </div>
                </div>

                <div className="group flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl text-brand-navy uppercase mb-1">Email Us</h3>
                    <a href="mailto:shub80746@gmail.com" className="text-gray-600 text-lg hover:text-brand-blue transition-colors border-b-2 border-transparent hover:border-brand-blue">
                      shub80746@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;