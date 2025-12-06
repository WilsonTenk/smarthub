import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-navy text-white pt-24 pb-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section - Big CTA */}
        <div className="border-b border-white/10 pb-20 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
            <div>
              <h2 className="font-display text-6xl md:text-8xl uppercase leading-none mb-6">
                Impact <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Now!</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-md font-light">
                Our motto represents our commitment to immediate action. Join us in making a difference today.
              </p>
            </div>
            <div className="flex justify-start lg:justify-end">
               <Link to="/contact" className="group flex items-center gap-4 text-3xl font-display uppercase tracking-widest hover:text-brand-green transition-colors">
                  Join the Community
                  <span className="bg-white text-brand-navy rounded-full p-4 group-hover:bg-brand-green group-hover:text-white transition-colors">
                    <ArrowRight size={24} />
                  </span>
               </Link>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="space-y-6">
            <h4 className="font-display text-xl uppercase tracking-widest text-brand-green">Contact</h4>
            <div className="space-y-4 text-lg font-medium">
               <div className="flex items-start gap-3">
                 <MapPin className="text-brand-green mt-1 shrink-0" size={20} />
                 <span className="text-gray-300">Daglama Street, Near Mirage, Ho. House No: AJ552</span>
               </div>
               <div className="flex items-center gap-3">
                 <Phone className="text-brand-green shrink-0" size={20} />
                 <span className="text-gray-300">+233 20 437 4782</span>
               </div>
               <div className="flex items-center gap-3">
                 <Mail className="text-brand-green shrink-0" size={20} />
                 <a href="mailto:shub80746@gmail.com" className="text-gray-300 hover:text-brand-green transition-colors">shub80746@gmail.com</a>
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl uppercase tracking-widest text-brand-green">Menu</h4>
            <ul className="space-y-4 font-display text-2xl uppercase tracking-wide">
              <li><Link to="/about" className="hover:text-brand-green transition-colors">About Us</Link></li>
              <li><Link to="/projects" className="hover:text-brand-green transition-colors">Projects</Link></li>
              <li><Link to="/contact" className="hover:text-brand-green transition-colors">Donate</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl uppercase tracking-widest text-brand-green">Mandates</h4>
             <ul className="space-y-4 text-gray-400">
              <li>Sexual & Reproductive Health</li>
              <li>Gender-Based Violence</li>
              <li>Leadership Training</li>
              <li>Digital Innovation</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-display text-xl uppercase tracking-widest text-brand-green">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/share/1LdwoM8NGF/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/smarthub_gh?igsh=MWU5aW4zcHEwcHBrZg==" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://www.linkedin.com/company/smarthub-gh/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-brand-blue hover:border-brand-blue transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SMART HUB GH. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-display uppercase tracking-widest text-brand-green">Smart Youth Connkt LBG</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;