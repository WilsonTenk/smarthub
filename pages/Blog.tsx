import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogData } from '../data';

const Blog: React.FC = () => {
  return (
    <div className="bg-brand-light min-h-screen">
      <div className="bg-brand-navy text-white pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection direction="right">
            <h1 className="font-display text-6xl md:text-8xl uppercase mb-6">News & <span className="text-brand-green">Updates</span></h1>
            <p className="text-xl text-gray-400 max-w-2xl font-light">
              Stories, insights, and updates from the field.
            </p>
          </AnimatedSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
           {blogData.map((post, index) => (
             <AnimatedSection key={post.id} direction="up" delay={index * 0.1} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
                <div className="h-60 overflow-hidden relative">
                   <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
                   <div className="absolute top-4 left-4">
                      <span className="bg-brand-green text-white text-xs font-display uppercase tracking-widest px-3 py-1 rounded-full">
                        {post.category}
                      </span>
                   </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <div className="flex items-center gap-4 text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                      <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                      <span className="flex items-center gap-1"><User size={14} /> {post.author}</span>
                   </div>
                   <h3 className="font-display text-2xl text-brand-navy uppercase mb-4 line-clamp-2 flex-grow">
                     <Link to={`/blog/${post.id}`} className="hover:text-brand-blue transition-colors">
                       {post.title}
                     </Link>
                   </h3>
                   <p className="text-gray-600 font-light mb-6 line-clamp-3">
                     {post.excerpt}
                   </p>
                   <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-2 text-brand-blue font-display uppercase tracking-widest hover:text-brand-green text-sm mt-auto">
                     Read Article <ArrowRight size={16} />
                   </Link>
                </div>
             </AnimatedSection>
           ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;