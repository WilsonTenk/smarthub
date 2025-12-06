import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowLeft, Calendar, Users, MapPin, Award } from 'lucide-react';
import { projectsData } from '../data';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center flex-col gap-4">
        <h1 className="font-display text-4xl text-brand-navy">Project Not Found</h1>
        <Link to="/projects" className="text-brand-blue underline font-display uppercase tracking-widest">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Image */}
      <div className="relative h-[60vh] bg-brand-navy overflow-hidden">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-transparent to-transparent"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full p-4 sm:p-8 lg:p-12">
          <div className="max-w-7xl mx-auto">
             <Link to="/projects" className="inline-flex items-center gap-2 text-white/80 hover:text-brand-green mb-6 transition-colors font-display uppercase tracking-widest text-sm">
               <ArrowLeft size={16} /> Back to Projects
             </Link>
             <h1 className="font-display text-5xl md:text-7xl text-white uppercase leading-tight mb-4">
               {project.title}
             </h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          
          {/* Sidebar / Metadata */}
          <div className="lg:col-span-1">
             <AnimatedSection direction="up" className="bg-brand-light p-8 rounded-2xl sticky top-24">
               <h3 className="font-display text-2xl uppercase mb-6 text-brand-navy border-b border-gray-200 pb-4">Project Data</h3>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green shrink-0">
                       <Calendar size={20} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Timeline</p>
                       <p className="text-brand-navy font-medium">{project.period}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green shrink-0">
                       <Award size={20} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Sponsor</p>
                       <p className="text-brand-navy font-medium">{project.sponsor}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green shrink-0">
                       <Users size={20} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Reach</p>
                       <p className="text-brand-navy font-medium">{project.reach}</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brand-green shrink-0">
                       <MapPin size={20} />
                     </div>
                     <div>
                       <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Communities</p>
                       <p className="text-brand-navy font-medium">{project.communities}</p>
                     </div>
                  </div>
               </div>
             </AnimatedSection>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
             <AnimatedSection direction="up" delay={0.2}>
               <h2 className="font-display text-4xl uppercase text-brand-navy mb-8">Overview</h2>
               <div className="prose prose-lg prose-blue text-gray-600 font-light leading-relaxed">
                 <p>{project.fullContent || project.description}</p>
                 <p>
                   Established to bridge the gap between opportunity and capacity, SMART HUB GH focuses on equipping children, adolescents, and youth with the knowledge, tools, and platforms they need to make informed decisions about their health, careers, and communities.
                 </p>
                 <p>
                   Recognizing the importance of expertise in executing our mandates, our staff undergo continuous training and workshops. These sessions are meticulously crafted to equip our team with the necessary skills and knowledge.
                 </p>
               </div>
             </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Floating Collage Section */}
      {project.galleryImages && project.galleryImages.length > 0 && (
        <div className="py-24 bg-brand-navy overflow-hidden relative">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-blue to-transparent"></div>
           
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <AnimatedSection direction="up" className="text-center mb-16">
                 <h2 className="font-display text-5xl md:text-7xl text-white uppercase">Impact <span className="text-brand-green">Visuals</span></h2>
              </AnimatedSection>

              <div className="relative h-[600px] w-full">
                 {project.galleryImages.map((img, i) => (
                   <AnimatedSection 
                      key={i} 
                      direction={i % 2 === 0 ? 'left' : 'right'} 
                      delay={i * 0.2}
                      className={`absolute rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 transform hover:z-50 hover:scale-105 transition-all duration-500
                        ${i === 0 ? 'w-[40%] top-0 left-0 rotate-[-6deg]' : ''}
                        ${i === 1 ? 'w-[45%] top-20 right-0 rotate-[3deg]' : ''}
                        ${i === 2 ? 'w-[35%] bottom-0 left-20 rotate-[5deg]' : ''}
                        ${i === 3 ? 'w-[30%] bottom-10 right-20 rotate-[-4deg]' : ''}
                      `}
                      style={{
                        // Fallback positions for fewer images
                        left: i === 0 ? '5%' : i === 2 ? '15%' : 'auto',
                        right: i === 1 ? '5%' : i === 3 ? '10%' : 'auto',
                      }}
                   >
                      <img src={img} alt="Gallery" className="w-full h-full object-cover" />
                   </AnimatedSection>
                 ))}
              </div>
           </div>
        </div>
      )}

    </div>
  );
};

export default ProjectDetail;