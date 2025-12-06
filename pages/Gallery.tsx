import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { projectsData } from '../data';

const Gallery: React.FC = () => {
  // Flatten all images from all projects
  const allImages = projectsData.flatMap(p => 
    p.galleryImages ? p.galleryImages : [p.image || ""]
  ).filter(img => img !== "");

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-brand-navy text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="right">
            <h1 className="font-display text-6xl md:text-8xl uppercase mb-6">Our <span className="text-brand-green">Gallery</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              Moments of impact, connection, and change captured across our various projects in Ghana.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
           {allImages.map((img, idx) => (
             <AnimatedSection key={idx} direction="up" delay={idx * 0.05} className="break-inside-avoid">
               <div className="relative group rounded-2xl overflow-hidden">
                 <img 
                   src={img} 
                   alt="Gallery Item" 
                   className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-brand-navy/0 group-hover:bg-brand-navy/40 transition-colors duration-300"></div>
               </div>
             </AnimatedSection>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;