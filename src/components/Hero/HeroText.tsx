import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function HeroText() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-6"
            >
                <h1 className="text-5xl md:text-7xl lg:text-9xl tracking-tight mb-2">
                    <span className="font-serif italic font-light text-slate-200 block md:inline md:mr-4">
                        Gianfranco
                    </span>
                    <span className="font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-brand-accent pr-2">
                        LOMBARDO
                    </span>
                </h1>
                <h2 className="text-xl md:text-2xl font-mono text-brand-400 tracking-widest uppercase mt-4">
                    Staff Software Engineer <span className="text-slate-600">|</span> AI Engineer
                </h2>
            </motion.div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="max-w-2xl text-slate-400 text-lg md:text-xl leading-relaxed mb-10 font-light"
            >
                Engineering the future, empowering the human.
            </motion.p>


            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-col md:flex-row gap-4 items-center"
            >
                <a
                    href="#work"
                    className="group relative px-8 py-4 bg-slate-100 text-brand-900 font-bold font-mono rounded-full hover:bg-brand-accent transition-colors duration-300 flex items-center gap-2 overflow-hidden"
                >
                    <span className="relative z-10">VIEW_SYSTEMS</span>
                    <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                </a>

                <div className="flex gap-4">
                    <SocialLink href="https://github.com/gianfrancolombardo" icon={Github} label="GitHub" />
                    <SocialLink href="https://www.linkedin.com/in/gianfranco-lombardo/" icon={Linkedin} label="LinkedIn" />
                </div>
            </motion.div>
        </div>
    );
}

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="p-4 rounded-full border border-slate-700 text-slate-400 hover:text-brand-accent hover:border-brand-accent hover:bg-slate-800/50 transition-all duration-300 backdrop-blur-sm"
    >
        <Icon className="w-5 h-5" />
    </a>
);
