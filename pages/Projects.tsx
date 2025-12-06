import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { Calendar, MapPin, Users, ArrowRight } from 'lucide-react';
import { projectsData } from '../data';

const Projects: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      
      {/* Header */}
      <div className="bg-brand-navy text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="right">
            <h1 className="font-display text-6xl md:text-8xl uppercase mb-6">Our <span className="text-brand-green">Projects</span></h1>
            <p className="text-xl text-gray-400 max-w-3xl font-light">
              We have successfully implemented several high-impact projects across Ghana. Explore our journey of impact below.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <AnimatedSection key={project.id} direction="up" delay={index * 0.1} className="h-full">
              <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col h-full">
                
                {/* Image Side */}
                <div className="relative overflow-hidden h-64">
                   <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                   <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute top-6 left-6 z-20">
                      <span className="bg-brand-blue text-white text-xs font-display uppercase tracking-widest px-4 py-2 rounded-full">
                        {project.sponsor}
                      </span>
                   </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-10 flex flex-col flex-grow relative bg-white">
                   
                   <div className="relative z-10 flex flex-col h-full">
                     <h3 className="font-display text-3xl text-brand-navy mb-6 leading-tight uppercase line-clamp-2">
                       {project.title}
                     </h3>
                     
                     <div className="flex flex-wrap gap-4 mb-6">
                       <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50 px-3 py-1 rounded-full">
                         <Calendar size={14} className="text-brand-green" />
                         <span>{project.period}</span>
                       </div>
                       <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-wider bg-gray-50 px-3 py-1 rounded-full">
                         <Users size={14} className="text-brand-green" />
                         <span>{project.reach}</span>
                       </div>
                     </div>

                     <p className="text-gray-600 text-lg leading-relaxed font-light mb-8 line-clamp-3 flex-grow">
                       {project.description}
                     </p>

                     <Link 
                      to={`/projects/${project.id}`} 
                      className="inline-flex items-center gap-2 text-brand-blue font-display uppercase tracking-widest hover:text-brand-green transition-colors mt-auto"
                     >
                       View Details <ArrowRight size={18} />
                     </Link>
                   </div>
                </div>

              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;