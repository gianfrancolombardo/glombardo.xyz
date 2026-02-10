import React from 'react';
import { ExternalLink, Github, FileText } from 'lucide-react';
import type { Project } from '../../types';
import SyntaxChip from './SyntaxChip';
import SpotlightCard from '../ui/SpotlightCard';

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <SpotlightCard className="h-full">
            <div className="relative h-full flex flex-col bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden">
                {/* Media Container */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                    <div style={{ transform: "translateZ(50px)" }} className="absolute inset-0 pointer-events-none z-20 shadow-[inset_0_0_80px_rgba(0,0,0,0.5)]" />
                    {/* Image */}
                    <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        onError={(e) => {
                            // @ts-ignore
                            e.target.src = '/project_placeholder_tech.png';
                        }}
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map(tag => <SyntaxChip key={tag} label={tag} />)}
                    </div>

                    <h3 className="text-xl font-bold font-display text-slate-100 mb-2 group-hover:text-brand-accent transition-colors">
                        {project.name}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                        {project.desc}
                    </p>

                    <div className="mt-auto flex items-center gap-4 pt-4 border-t border-slate-800">
                        {project.url && (
                            <a href={project.url} target="_blank" rel="noopener" className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-brand-accent transition-colors">
                                {project.url.includes("github.com") ? <Github className="w-4 h-4" /> : <ExternalLink className="w-4 h-4" />}
                                {project.url.includes("github.com") ? "VIEW_CODE" : "VISIT_SITE"}
                            </a>
                        )}
                        {project.post && (
                            <a href={project.post} target="_blank" rel="noopener" className="flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-brand-accent transition-colors">
                                <FileText className="w-4 h-4" />
                                READ_CASE
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </SpotlightCard>
    );
}
