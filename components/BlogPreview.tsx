import React from 'react';
import { BlogPost } from '../types';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "L'avenir du SaaS en France : Tendances 2027",
    date: "12 Octobre 2026",
    excerpt: "Comment l'IA générative redéfinit les standards du développement logiciel sur-mesure.",
    category: "Tech Trends"
  },
  {
    id: 2,
    title: "Sécurité des données : Private Cloud vs Public Cloud",
    date: "28 Septembre 2026",
    excerpt: "Pourquoi les entreprises stratégiques reviennent vers des infrastructures souveraines.",
    category: "Cybersécurité"
  },
  {
    id: 3,
    title: "Optimiser le ROI de votre transformation numérique",
    date: "15 Septembre 2026",
    excerpt: "Étude de cas : Comment un outil métier personnalisé a réduit les coûts de 40%.",
    category: "Business"
  }
];

const BlogPreview: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-white mb-2">Actualités & Insights</h2>
            <p className="text-slate-500">Veille technologique et expertise métier.</p>
          </div>
          <a href="#" className="hidden md:block text-violet-400 hover:text-violet-300 text-sm font-medium">Voir tous les articles &rarr;</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="h-48 w-full bg-slate-900 rounded-xl mb-6 overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-slate-800 to-slate-900 group-hover:scale-105 transition-transform duration-500"></div>
                 <span className="absolute top-4 left-4 px-3 py-1 bg-white/10 backdrop-blur-md text-xs font-semibold text-white rounded-full border border-white/10">
                   {post.category}
                 </span>
              </div>
              <div className="flex-1">
                <div className="text-xs text-slate-500 mb-2">{post.date}</div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-400 transition-colors">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm line-clamp-3">
                  {post.excerpt}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;