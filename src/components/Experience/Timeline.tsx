import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import SpotlightCard from '../ui/SpotlightCard';
import { EXPERIENCE } from '../../constants';

export default function Timeline() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 0.8", "end 0.5"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
            {/* Central Line Container */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800/50 md:-translate-x-1/2 rounded-full overflow-hidden">
                {/* The "Photon Beam" */}
                <motion.div
                    style={{ scaleY, transformOrigin: "top" }}
                    className="w-full h-full bg-brand-accent shadow-[0_0_20px_#2dd4bf] rounded-full relative"
                >
                    {/* Glowing Tip (The Head) - Hacky fix for scaleY distortion: We use a pseudo-element or separate div if needed, 
                         but for scaleY, the tip serves as a gradient cap. 
                         Actually, let's keep it simple: A solid beam is better for scaleY. 
                         If we need the tip, it must be outside the scale transform which is hard with this layout. 
                         Let's stick to the glowing beam. */}
                </motion.div>
            </div>

            <div className="space-y-24 relative z-10">
                {EXPERIENCE.map((job, index) => (
                    <TimelineItem key={job.id} job={job} index={index} />
                ))}
            </div>
        </div>
    );
}

const TimelineItem = ({ job, index }: { job: any; index: number }) => {
    const isEven = index % 2 === 0;

    return (
        <div className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
            <div className="flex-1 w-full pl-12 md:pl-0">
                <motion.div
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className={isEven ? "md:ml-24" : "md:mr-24"}
                >
                    <SpotlightCard>
                        <div className={`relative bg-slate-900/50 backdrop-blur-sm p-6 md:p-8 h-full flex flex-col ${isEven ? "md:items-start" : "md:items-end"}`}>
                            <span className="text-brand-400 font-mono text-xs mb-2 block font-bold tracking-widest uppercase">
                                {job.period}
                            </span>
                            <h3 className={`text-xl font-bold text-slate-100 group-hover:text-brand-accent transition-colors ${isEven ? "text-left" : "text-right"}`}>
                                {job.role}
                            </h3>
                            <h4 className="text-lg text-slate-400 mb-4 font-medium">
                                {job.company}
                            </h4>

                            <p className={`text-slate-400 text-sm leading-relaxed mb-5 max-w-md ${isEven ? "text-left" : "text-right"}`}>
                                {job.description}
                            </p>

                            <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-start" : "md:justify-end"}`}>
                                {job.technologies.slice(0, 4).map((tech: string) => (
                                    <span key={tech} className="text-[10px] font-medium font-mono text-brand-300 bg-brand-900/50 border border-brand-500/20 px-2 py-1 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </SpotlightCard>
                </motion.div>
            </div>

            {/* Node Connector - Updated to match Beam */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 top-0 md:top-1/2 md:-mt-8 flex items-center justify-center">
                <div className="w-3 h-3 bg-brand-900 rounded-full border-2 border-slate-600 z-20 group-hover:border-brand-accent transition-colors" />
            </div>

            <div className="hidden md:block flex-1" />
        </div>
    );
};
