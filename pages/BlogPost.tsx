import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogData } from '../data';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-light flex items-center justify-center flex-col gap-4">
        <h1 className="font-display text-4xl text-brand-navy">Article Not Found</h1>
        <Link to="/blog" className="text-brand-blue underline font-display uppercase tracking-widest">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen pt-32">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
         <AnimatedSection direction="up" className="mb-8">
            <Link to="/blog" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-blue mb-8 font-display uppercase tracking-widest text-sm transition-colors">
               <ArrowLeft size={16} /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-bold text-gray-500 uppercase tracking-wider">
               <span className="flex items-center gap-2 text-brand-green"><Tag size={16} /> {post.category}</span>
               <span className="flex items-center gap-2"><Calendar size={16} /> {post.date}</span>
               <span className="flex items-center gap-2"><User size={16} /> {post.author}</span>
            </div>

            <h1 className="font-display text-4xl md:text-6xl text-brand-navy uppercase leading-tight mb-8">
              {post.title}
            </h1>
         </AnimatedSection>

         <AnimatedSection direction="up" delay={0.2} className="mb-12">
            <div className="rounded-2xl overflow-hidden shadow-xl h-[400px] md:h-[500px] w-full">
               <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            </div>
         </AnimatedSection>

         <AnimatedSection direction="up" delay={0.3}>
            <div className="prose prose-lg prose-blue max-w-none text-gray-700 font-light leading-relaxed">
               <p className="text-xl font-medium text-brand-navy mb-8 leading-relaxed border-l-4 border-brand-green pl-6 italic">
                 {post.excerpt}
               </p>
               <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/><br/>') }} />
            </div>
         </AnimatedSection>
         
         <div className="py-20 border-t border-gray-100 mt-20">
            <h3 className="font-display text-2xl text-brand-navy uppercase mb-6">Share this article</h3>
            <div className="flex gap-4">
               <button className="px-6 py-3 border border-gray-200 rounded-full text-gray-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all font-bold uppercase text-sm tracking-wide">
                  Facebook
               </button>
               <button className="px-6 py-3 border border-gray-200 rounded-full text-gray-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all font-bold uppercase text-sm tracking-wide">
                  Twitter
               </button>
               <button className="px-6 py-3 border border-gray-200 rounded-full text-gray-600 hover:bg-brand-blue hover:text-white hover:border-brand-blue transition-all font-bold uppercase text-sm tracking-wide">
                  LinkedIn
               </button>
            </div>
         </div>
      </div>

    </div>
  );
};

export default BlogPost;