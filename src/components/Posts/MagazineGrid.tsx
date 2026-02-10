import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { POSTS } from '../../constants';
// @ts-ignore
import { color } from 'framer-motion';

export default function MagazineGrid() {
    const [featured, ...others] = POSTS;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Featured Posts - Now 2 boxes side-by-side */}
            {POSTS.slice(0, 2).map((post, idx) => (
                <a
                    key={`featured-${idx}`}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative aspect-square lg:aspect-auto flex flex-col justify-end p-6 lg:min-h-[460px] overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-accent/50 transition-colors"
                >
                    <div className="absolute inset-0">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/800x600/1e293b/cbd5e1?text=${encodeURIComponent(post.title.substring(0, 10))}`; }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent" />
                    </div>

                    <div className="relative z-10">
                        <span className="text-brand-400 font-mono text-[10px] font-bold tracking-[0.2em] uppercase mb-2 block">
                            // {idx === 0 ? "LATEST_TRANSMISSION" : "FEATURED_INSIGHT"}
                        </span>
                        <h3 className="font-display font-bold text-xl md:text-2xl text-slate-100 mb-4 leading-tight group-hover:text-brand-accent transition-colors">
                            {post.title}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-400 font-mono text-xs">
                            <span>{post.date}</span>
                            <ArrowUpRight className="w-3 h-3 text-brand-accent transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </div>
                    </div>
                </a>
            ))}

            {/* Side List - Others */}
            <div className="flex flex-col gap-6">
                {POSTS.slice(2, 5).map((post, idx) => (
                    <a
                        key={`side-${idx}`}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex gap-4 p-4 rounded-xl bg-slate-900/30 border border-slate-800/50 hover:bg-slate-900 hover:border-slate-700 transition-all"
                    >
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg bg-slate-800">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                                onError={(e) => { (e.target as HTMLImageElement).src = `https://placehold.co/400x400/1e293b/cbd5e1?text=IMG`; }}
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <h4 className="font-display font-bold text-slate-300 text-sm leading-snug mb-1 group-hover:text-brand-accent transition-colors line-clamp-2">
                                {post.title}
                            </h4>
                            <span className="text-slate-500 text-[10px] font-mono">{post.date}</span>
                        </div>
                    </a>
                ))}

                <a href="https://linkedin.com/in/gianfranco-lombardo" target="_blank" rel="noopener" className="mt-auto p-4 text-center border border-dashed border-slate-800/80 rounded-xl text-slate-500 hover:text-brand-accent hover:border-brand-accent/30 transition-colors font-mono text-[10px] uppercase tracking-[0.2em]">
                    Read more on LinkedIn
                </a>
            </div>
        </div>
    );
}
