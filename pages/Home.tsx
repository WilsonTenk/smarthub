import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Lightbulb, ArrowUpRight, Plus, Minus } from 'lucide-react';
import { AnimatedSection } from '../components/AnimatedSection';
import { blogData, projectsData } from '../data';

const Home: React.FC = () => {
  // Get latest 3 posts
  const latestPosts = blogData.slice(0, 3);
  // Get featured projects (first 2)
  const featuredProjects = projectsData.slice(0, 2);

  const faqs = [
    {
      question: "How can I volunteer with SMART HUB GH?",
      answer: "We welcome passionate individuals! You can reach out to us via our contact page or email us directly at shub80746@gmail.com to inquire about current volunteer opportunities."
    },
    {
      question: "Where are you located?",
      answer: "We are based in Ho, Volta Region, Ghana. Our office is located at Daglama Street, Near Mirage, House Number AJ552."
    },
    {
      question: "How are donations used?",
      answer: "Donations go directly towards funding our projects, including educational materials, sanitary products for the Safe Flow project, and organizing community workshops."
    },
    {
      question: "Do you partner with other organizations?",
      answer: "Yes! We collaborate with Plan International Ghana, KGL Foundation, Government Agencies, and various other NGOs to maximize our impact."
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-brand-light">
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-navy">
        
        {/* Cool Background - Deep Blue Gradient with Floating Orbs */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#1e40af] via-brand-navy to-brand-dark"></div>
        
        {/* Animated Subtle Stars/Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-brand-green rounded-full animate-float-slow"></div>
          <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-brand-blue rounded-full animate-float-slow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-float-slow" style={{ animationDelay: '4s' }}></div>
          {/* Subtle large glow */}
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-brand-blue/20 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          
          <AnimatedSection direction="up" className="mb-6 relative">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
               <h2 className="text-gray-300 font-display tracking-[0.2em] uppercase text-xs">
                 Setting Mega Ambitions
               </h2>
             </div>
          </AnimatedSection>
          
          <AnimatedSection direction="up" delay={0.2} className="relative">
            {/* Outline Map Effect behind text - Subtle */}
            <svg className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5 pointer-events-none z-0 text-white fill-current" viewBox="0 0 100 100">
               <circle cx="50" cy="50" r="40" />
            </svg>

            <h1 className="relative z-10 font-display text-7xl md:text-9xl text-white uppercase leading-[0.8] tracking-normal mb-8">
              Impact <span className="text-brand-green">Now</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4} className="max-w-2xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 mb-12 font-light leading-relaxed">
              Empowering Ghana's youth through community service and advocacy.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/contact" className="group relative px-10 py-4 bg-brand-blue text-white font-display text-xl uppercase tracking-widest rounded-full overflow-hidden shadow-lg shadow-brand-blue/25 hover:shadow-brand-green/20 transition-all">
                <span className="relative z-10 flex items-center gap-2">
                  Donate Now <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-brand-green transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
              </Link>
              
              <Link to="/about" className="px-10 py-4 border border-white/20 text-white font-display text-xl uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-navy transition-all duration-300">
                Who We Are
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Marquee Strip - Blue */}
      <div className="bg-brand-blue py-6 overflow-hidden whitespace-nowrap border-y border-white/10">
        <div className="inline-block animate-marquee">
          {[...Array(10)].map((_, i) => (
             <span key={i} className="text-white font-display text-3xl mx-12 uppercase tracking-widest opacity-90">
               Youth Empowerment <span className="text-brand-green mx-2">•</span> SRHR <span className="text-brand-green mx-2">•</span> Gender-Based Violence <span className="text-brand-green mx-2">•</span> Leadership <span className="text-brand-green mx-2">•</span>
             </span>
          ))}
        </div>
      </div>

      {/* Intro Section - Two Column Layout */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            
            {/* Image Side */}
            <AnimatedSection direction="right" className="relative order-2 lg:order-1">
               <div className="relative rounded-[2rem] overflow-hidden shadow-2xl group">
                 <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                 <img 
                  src={`${import.meta.env.BASE_URL}images/SMART HUB LOGO ORIGINAL.png`}
                  alt="Team Meeting" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute bottom-0 left-0 bg-brand-navy p-8 rounded-tr-[2rem] z-20">
                    <p className="text-brand-green font-display text-5xl">5k+</p>
                    <p className="text-white text-sm uppercase tracking-widest font-bold">Lives Reached</p>
                 </div>
               </div>
            </AnimatedSection>
            
            {/* Text Side */}
            <AnimatedSection direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="mb-6 flex items-center gap-4">
                <span className="h-[2px] w-12 bg-brand-green"></span>
                <span className="text-brand-blue font-bold uppercase tracking-widest text-sm">Who We Are</span>
              </div>
              {/* Shortened Hero Wording */}
              <h2 className="font-display text-5xl md:text-7xl text-brand-navy uppercase leading-[0.9] mb-8">
                Bridging <span className="text-brand-blue">Opportunity</span> & Capacity.
              </h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-8 font-light">
                We equip Ghana's next generation with the tools to drive positive change.
              </p>
              
              <Link to="/about" className="inline-flex items-center gap-3 text-brand-navy font-display text-xl uppercase tracking-widest hover:text-brand-green transition-colors group">
                Read our full story 
                <span className="bg-brand-navy text-white rounded-full p-2 group-hover:bg-brand-green transition-colors">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* Featured Projects Section - Added before Mandate */}
      <section className="py-24 bg-brand-light border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-16">
              <AnimatedSection direction="right">
                 <h2 className="font-display text-4xl md:text-6xl text-brand-navy uppercase">Featured <span className="text-brand-blue">Projects</span></h2>
              </AnimatedSection>
              <Link to="/projects" className="hidden md:flex items-center gap-2 font-display uppercase tracking-widest text-brand-blue hover:text-brand-green transition-colors">
                 All Projects <ArrowRight size={18} />
              </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             {featuredProjects.map((project, i) => (
                <AnimatedSection key={project.id} direction="up" delay={i * 0.1} className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 h-full flex flex-col">
                  <div className="h-64 overflow-hidden relative">
                     <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                     <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                     />
                     <div className="absolute top-4 left-4 z-20">
                        <span className="bg-brand-blue text-white text-xs font-display uppercase tracking-widest px-3 py-1 rounded-full">
                          {project.sponsor}
                        </span>
                     </div>
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                     <h3 className="font-display text-2xl md:text-3xl text-brand-navy mb-4 leading-tight uppercase">
                       {project.title}
                     </h3>
                     <p className="text-gray-600 font-light mb-6 line-clamp-2 flex-grow">
                       {project.description}
                     </p>
                     <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 text-brand-blue font-display uppercase tracking-widest hover:text-brand-green transition-colors text-sm mt-auto">
                        View Details <ArrowRight size={16} />
                     </Link>
                  </div>
                </AnimatedSection>
             ))}
           </div>

           <div className="mt-12 text-center md:hidden">
              <Link to="/projects" className="inline-flex items-center gap-2 font-display uppercase tracking-widest text-brand-blue hover:text-brand-green transition-colors">
                 All Projects <ArrowRight size={18} />
              </Link>
           </div>
        </div>
      </section>

      {/* Mandate Areas - Dark Blue Section */}
      <section className="py-24 md:py-32 bg-brand-navy text-white relative overflow-hidden">
         {/* Decorative Background */}
         <div className="absolute top-0 right-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_right,_var(--tw-gradient-stops))] from-brand-blue to-transparent"></div>

         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection direction="up" className="mb-16 text-center">
              <h2 className="font-display text-5xl md:text-8xl uppercase">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">Mandate</span></h2>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               <AnimatedSection direction="up" delay={0.1} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300 group">
                  <Heart size={48} className="text-brand-green mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-2xl uppercase mb-4">SRHR & GBV</h3>
                  <p className="text-gray-400 leading-relaxed">Championing Sexual & Reproductive Health Rights and fighting Gender-Based Violence.</p>
               </AnimatedSection>
               <AnimatedSection direction="up" delay={0.2} className="bg-brand-blue text-white p-10 rounded-3xl shadow-xl transform md:-translate-y-8">
                  <Users size={48} className="text-brand-green mb-6" />
                  <h3 className="font-display text-2xl uppercase mb-4">Leadership</h3>
                  <p className="text-white/90 leading-relaxed">Training and workshops meticulously crafted to equip our team and youth with necessary skills.</p>
               </AnimatedSection>
               <AnimatedSection direction="up" delay={0.3} className="bg-white/5 border border-white/10 p-10 rounded-3xl hover:bg-white/10 transition-colors duration-300 group">
                  <Lightbulb size={48} className="text-brand-green mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="font-display text-2xl uppercase mb-4">Education</h3>
                  <p className="text-gray-400 leading-relaxed">Bridging the gap between opportunity and capacity through practical skills training.</p>
               </AnimatedSection>
            </div>
         </div>
      </section>

      {/* Latest News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex justify-between items-end mb-16">
              <AnimatedSection direction="right">
                 <h2 className="font-display text-4xl md:text-6xl text-brand-navy uppercase">Latest <span className="text-brand-blue">News</span></h2>
              </AnimatedSection>
              <Link to="/blog" className="hidden md:flex items-center gap-2 font-display uppercase tracking-widest text-brand-blue hover:text-brand-green transition-colors">
                 View All Posts <ArrowRight size={18} />
              </Link>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {latestPosts.map((post, i) => (
                <AnimatedSection key={post.id} direction="up" delay={i * 0.1} className="bg-brand-light p-6 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-gray-100">
                   <div className="h-48 rounded-xl overflow-hidden mb-6">
                      <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                   </div>
                   <div className="text-xs font-bold text-brand-green uppercase tracking-wider mb-2">{post.category}</div>
                   <h3 className="font-display text-xl text-brand-navy uppercase mb-4 line-clamp-2">
                     <Link to={`/blog/${post.id}`}>{post.title}</Link>
                   </h3>
                   <Link to={`/blog/${post.id}`} className="text-sm font-bold text-gray-500 uppercase tracking-wide hover:text-brand-blue">Read More</Link>
                </AnimatedSection>
              ))}
           </div>
           
           <div className="mt-12 text-center md:hidden">
              <Link to="/blog" className="inline-flex items-center gap-2 font-display uppercase tracking-widest text-brand-blue hover:text-brand-green transition-colors">
                 View All Posts <ArrowRight size={18} />
              </Link>
           </div>
        </div>
      </section>

      {/* FAQ Section - Added before footer */}
      <section className="py-24 bg-brand-light">
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection direction="up" className="text-center mb-16">
               <h2 className="font-display text-4xl md:text-6xl text-brand-navy uppercase mb-6">Frequently Asked <span className="text-brand-blue">Questions</span></h2>
            </AnimatedSection>
            
            <div className="space-y-4">
               {faqs.map((faq, i) => (
                  <FAQItem key={i} question={faq.question} answer={faq.answer} index={i} />
               ))}
            </div>
         </div>
      </section>

    </div>
  );
};

// Helper component for FAQ Accordion
const FAQItem: React.FC<{ question: string, answer: string, index: number }> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatedSection direction="up" delay={index * 0.1} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
       <button 
         onClick={() => setIsOpen(!isOpen)}
         className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
       >
         <span className="font-display text-xl text-brand-navy uppercase">{question}</span>
         <span className={`p-2 rounded-full bg-brand-light text-brand-blue transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>
            <Plus size={20} className={`${isOpen ? 'hidden' : 'block'}`} />
            <Minus size={20} className={`${isOpen ? 'block' : 'hidden'}`} />
         </span>
       </button>
       <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-6 pt-0 text-gray-600 font-light leading-relaxed border-t border-gray-50">
             {answer}
          </div>
       </div>
    </AnimatedSection>
  );
}

export default Home;