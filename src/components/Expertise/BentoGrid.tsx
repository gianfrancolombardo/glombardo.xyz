import React from 'react';
import SpotlightCard from '../ui/SpotlightCard';
import { SERVICES } from '../../constants';

export default function BentoGrid() {
    return (
        <div className="w-full max-w-7xl mx-auto">
            {/* Services Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
                {SERVICES.map((service, idx) => (
                    <SpotlightCard key={idx} className="h-full">
                        <div className="relative z-10 p-8 flex flex-col h-full bg-slate-900/50 backdrop-blur-sm">
                            <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 border border-slate-700 group-hover:border-brand-accent/50 group-hover:scale-110 transition-all duration-300">
                                <service.icon className="w-6 h-6 text-brand-accent" />
                            </div>

                            <h3 className="text-xl font-display font-bold text-slate-100 mb-3 group-hover:text-brand-accent transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-slate-400 leading-relaxed text-sm flex-grow">
                                {service.description}
                            </p>
                        </div>
                    </SpotlightCard>
                ))}
            </div>

            {/* Engineering Pillars - Replaces Tech Stack */}
            <h3 className="font-display text-2xl font-bold text-slate-100 mb-8 mt-16 md:text-center">
                Engineering <span className="text-brand-accent">Philosophy</span>
            </h3>

            <div className="grid md:grid-cols-3 gap-6">
                {/* Pillar 1: Ownership */}
                <SpotlightCard className="h-full group">
                    <div className="relative z-10 p-6 bg-slate-900/50 backdrop-blur-sm h-full flex flex-col">
                        <div className="mb-4">
                            <span className="text-brand-400 font-mono text-xs font-bold tracking-widest uppercase">Pillar 01</span>
                            <h4 className="text-2xl font-serif font-bold text-slate-100 mt-2">Extreme Ownership.</h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            "You build it, you run it." NOT just writing code, but taking full responsibility for the lifecycle, from architectural decisions to production reliability.
                        </p>
                    </div>
                </SpotlightCard>

                {/* Pillar 2: Impact */}
                <SpotlightCard className="h-full group">
                    <div className="relative z-10 p-6 bg-slate-900/50 backdrop-blur-sm h-full flex flex-col">
                        <div className="mb-4">
                            <span className="text-brand-400 font-mono text-xs font-bold tracking-widest uppercase">Pillar 02</span>
                            <h4 className="text-2xl font-serif font-bold text-slate-100 mt-2">Impact Drivers.</h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Technology is a means, not an end. Every line of code must contribute to reducing friction, increasing value, or solving a real human problem.
                        </p>
                    </div>
                </SpotlightCard>

                {/* Pillar 3: Evolution */}
                <SpotlightCard className="h-full group">
                    <div className="relative z-10 p-6 bg-slate-900/50 backdrop-blur-sm h-full flex flex-col">
                        <div className="mb-4">
                            <span className="text-brand-400 font-mono text-xs font-bold tracking-widest uppercase">Pillar 03</span>
                            <h4 className="text-2xl font-serif font-bold text-slate-100 mt-2">Agentic Future.</h4>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Moving beyond imperative programming. Designing systems where AI Agents act as autonomous force multipliers for human potential.
                        </p>
                    </div>
                </SpotlightCard>
            </div>
        </div>
    );
}
