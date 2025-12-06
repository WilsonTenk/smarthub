import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Header */}
      <div className="relative bg-brand-navy text-white pt-40 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-blue/10 blur-3xl"></div>

         <div className="max-w-7xl mx-auto relative z-10">
            <AnimatedSection direction="right">
              <h1 className="font-display font-black text-6xl md:text-8xl uppercase mb-6 tracking-tighter">About <span className="text-brand-blue">Us</span></h1>
              <div className="h-2 w-32 bg-brand-green mb-8"></div>
              <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl leading-relaxed">
                 A future of competent, healthy and like-minded people making Ghana a premier nation.
              </p>
            </AnimatedSection>
         </div>
      </div>

      {/* Vision & Mission Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <AnimatedSection direction="right" className="bg-brand-light p-12 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-shadow duration-500">
            <h2 className="font-display font-black text-4xl text-brand-navy uppercase mb-6">Our Vision</h2>
            <p className="text-xl font-medium text-gray-700 leading-relaxed">
              A future of competent, healthy and like-minded people making Ghana a premier nation.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1} className="bg-brand-blue p-12 rounded-[2rem] text-white shadow-xl">
            <h2 className="font-display font-black text-4xl uppercase mb-6">Our Mission</h2>
            <p className="text-xl font-medium leading-relaxed">
              To impact the Ghanaian society through education, capacity building and advocacy in all matters regarding child protection, adolescents and their reproductive health.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* What We Do */}
      <section className="bg-brand-navy py-24 text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-blue/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             <AnimatedSection direction="right">
                <div className="relative">
                   <div className="absolute top-4 left-4 w-full h-full border-2 border-brand-green rounded-3xl translate-x-4 translate-y-4"></div>
                   <div className="relative bg-white/5 p-10 rounded-3xl backdrop-blur-sm border border-white/10">
                      <h3 className="font-display font-black text-3xl mb-8 uppercase">Our Logo Significance</h3>
                      <ul className="space-y-6">
                        <li className="flex gap-4">
                           <span className="font-black text-brand-green text-2xl">01</span>
                           <div>
                              <h4 className="font-bold uppercase text-lg">Impact Now</h4>
                              <p className="text-gray-400 text-sm">Commitment to immediate action.</p>
                           </div>
                        </li>
                        <li className="flex gap-4">
                           <span className="font-black text-brand-green text-2xl">02</span>
                           <div>
                              <h4 className="font-bold uppercase text-lg">Two Hands Holding</h4>
                              <p className="text-gray-400 text-sm">Signifies unity and strength.</p>
                           </div>
                        </li>
                        <li className="flex gap-4">
                           <span className="font-black text-brand-green text-2xl">03</span>
                           <div>
                              <h4 className="font-bold uppercase text-lg">Two Leaves Sprouting</h4>
                              <p className="text-gray-400 text-sm">Producing results through teamwork.</p>
                           </div>
                        </li>
                      </ul>
                   </div>
                </div>
             </AnimatedSection>

             <AnimatedSection direction="right" delay={0.2}>
                <h3 className="font-display font-black text-5xl uppercase mb-8">What We Do</h3>
                <div className="space-y-8">
                   {[
                     "Initiating projects promoting holistic health of children & adolescents.",
                     "Empowering & building capacity of young people.",
                     "Championing change in child protection & SRHR.",
                     "Advocacy and intervention in GBV issues."
                   ].map((item, i) => (
                     <div key={i} className="flex items-start gap-6 border-b border-white/5 pb-6">
                        <span className="text-brand-green font-black text-xl">/</span>
                        <p className="text-xl font-medium leading-relaxed font-light">{item}</p>
                     </div>
                   ))}
                </div>
             </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <AnimatedSection direction="up" className="text-center mb-16">
              <h2 className="font-display font-black text-5xl text-brand-navy uppercase mb-4">Our Leadership</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">
                Combining expertise in healthcare, youth advocacy, community mobilization, and digital innovation.
              </p>
           </AnimatedSection>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                 { title: "Board of Advisors", desc: "Strategic guidance & oversight" },
                 { title: "Executive Board", desc: "Day-to-day operations" },
                 { title: "Projects Committee", desc: "Plans & implements all projects" },
                 { title: "Research & MEL Team", desc: "Monitoring, Evaluation & Learning" }
               ].map((team, idx) => (
                 <AnimatedSection key={idx} direction="right" delay={idx * 0.1} className="bg-brand-light p-8 rounded-2xl hover:bg-brand-blue hover:text-white transition-all duration-300 group cursor-default">
                   <div className="w-12 h-1 bg-brand-green mb-6 group-hover:w-full transition-all duration-500"></div>
                   <h4 className="font-display font-black text-xl mb-3 uppercase">{team.title}</h4>
                   <p className="text-sm text-gray-500 group-hover:text-gray-200 font-medium uppercase tracking-wide">{team.desc}</p>
                 </AnimatedSection>
               ))}
            </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
             <h3 className="font-display font-black text-2xl text-gray-300 uppercase mb-12 tracking-[0.5em]">Our Partners</h3>
             <div className="flex flex-wrap justify-center gap-6">
                {["Plan International Ghana", "KGL Foundation", "Government Agencies", "Religious Bodies", "Developer's Net", "Brave Movement Ghana"].map((partner, i) => (
                  <span key={i} className="px-8 py-4 bg-brand-light border border-transparent hover:border-brand-blue/20 rounded-full text-base font-bold text-brand-navy uppercase transition-all">
                    {partner}
                  </span>
                ))}
             </div>
         </div>
      </section>
    </div>
  );
};

export default About;