import React from "react";
import DeckItem from "./DeckItem";
import { SERVICES } from "../../constants";
import {
    Cpu,
    Database,
    Layers,
    Terminal,
    ShieldCheck,
    Zap,
} from "lucide-react";

const PILLARS = [
    {
        id: "01",
        title: "Extreme Ownership",
        desc: '"You build it, you run it." NOT just writing code, but taking full responsibility for the lifecycle, from architectural decisions to production reliability.',
        icon: ShieldCheck,
    },
    {
        id: "02",
        title: "Impact Drivers",
        desc: "Technology is a means, not an end. Every line of code must contribute to reducing friction, increasing value, or solving a real human problem.",
        icon: Zap,
    },
    {
        id: "03",
        title: "Agentic Future",
        desc: "Moving beyond imperative programming. Designing systems where AI Agents act as autonomous force multipliers for human potential.",
        icon: Terminal,
    },
];

export default function VelocityDeck() {
    return (
        <div className="w-full max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* --- Row 1: SERVICES --- */}

                {/* Service 1 - Large */}
                <DeckItem className="md:col-span-2 min-h-[200px] bg-slate-900/40" variant="service">
                    <div className="flex flex-col h-full p-8 relative z-20 justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-brand-accent/10 rounded-lg border border-brand-accent/20">
                                <SERVICES_ICON_0 className="w-6 h-6 text-brand-accent" />
                            </div>
                            <span className="font-mono text-[10px] text-slate-500 tracking-widest">SYS.SRV.01</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-2xl font-display font-bold text-slate-100 mb-2">{SERVICES[0].title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{SERVICES[0].description}</p>
                        </div>
                    </div>
                </DeckItem>

                {/* Service 2 */}
                <DeckItem className="md:col-span-1 min-h-[200px] bg-slate-900/40" variant="service">
                    <div className="flex flex-col h-full p-6 relative z-20 justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-indigo-400/10 rounded-lg border border-indigo-400/20">
                                <SERVICES_ICON_1 className="w-6 h-6 text-indigo-400" />
                            </div>
                            <span className="font-mono text-[10px] text-slate-500">SYS.SRV.02</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-display font-bold text-slate-100 mb-1">{SERVICES[1].title}</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">{SERVICES[1].description}</p>
                        </div>
                    </div>
                </DeckItem>

                {/* Service 3 */}
                <DeckItem className="md:col-span-1 min-h-[200px] bg-slate-900/40" variant="service">
                    <div className="flex flex-col h-full p-6 relative z-20 justify-between">
                        <div className="flex justify-between items-start">
                            <div className="p-3 bg-emerald-400/10 rounded-lg border border-emerald-400/20">
                                <SERVICES_ICON_2 className="w-6 h-6 text-emerald-400" />
                            </div>
                            <span className="font-mono text-[10px] text-slate-500">SYS.SRV.03</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-display font-bold text-slate-100 mb-1">{SERVICES[2].title}</h3>
                            <p className="text-slate-400 text-xs leading-relaxed">{SERVICES[2].description}</p>
                        </div>
                    </div>
                </DeckItem>


                {/* --- Row 2: PILLARS --- */}

                {/* Pillar 1 */}
                <DeckItem className="md:col-span-1 min-h-[200px] bg-slate-900/40" variant="pillar">
                    <div className="flex flex-col h-full p-6 relative z-20 justify-between">
                        <div className="flex justify-between items-start">
                            <PILLARS_ICON_0 className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                            <span className="font-mono text-[10px] text-slate-600">ENG.01</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-serif font-bold text-slate-200 mb-2">{PILLARS[0].title}</h3>
                            <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">
                                {PILLARS[0].desc}
                            </p>
                        </div>
                    </div>
                </DeckItem>

                {/* Pillar 2 */}
                <DeckItem className="md:col-span-1 min-h-[200px] bg-slate-900/40" variant="pillar">
                    <div className="flex flex-col h-full p-6 relative z-20 justify-between">
                        <div className="flex justify-between items-start">
                            <PILLARS_ICON_1 className="w-6 h-6 text-slate-500 group-hover:text-white transition-colors" />
                            <span className="font-mono text-[10px] text-slate-600">ENG.02</span>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-serif font-bold text-slate-200 mb-2">{PILLARS[1].title}</h3>
                            <p className="text-slate-500 text-xs leading-relaxed group-hover:text-slate-400 transition-colors">
                                {PILLARS[1].desc}
                            </p>
                        </div>
                    </div>
                </DeckItem>

                {/* Pillar 3 - Large */}
                <DeckItem className="md:col-span-2 min-h-[200px] bg-gradient-to-br from-indigo-950/30 to-slate-900/40 border-brand-accent/20" variant="pillar">
                    <div className="flex flex-col h-full p-8 relative z-20 justify-between">
                        <div className="flex justify-between items-start">
                            <div className="flex gap-3 items-center">
                                <PILLARS_ICON_2 className="w-6 h-6 text-brand-accent" />
                                <span className="text-xs font-mono tracking-widest text-brand-accent/80 uppercase">The Vision</span>
                            </div>
                            <span className="font-mono text-[10px] text-slate-500">ENG.03</span>
                        </div>
                        <div className="mt-4 max-w-lg">
                            <h3 className="text-2xl font-serif font-bold text-slate-100 mb-2">{PILLARS[2].title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                {PILLARS[2].desc}
                            </p>
                        </div>
                    </div>
                </DeckItem>

            </div>
        </div>
    );
}

// Helpers to access the dynamic imports from constant map if needed, 
// but since we are modifying, I need to instantiate the icons correctly.
// constants.ts acts as a data source, but the icons reference actual components. 
// I need to be careful with how I render icons from SERVICES. 
// SERVICES[i].icon is a component.

const SERVICES_ICON_0 = SERVICES[0].icon;
const SERVICES_ICON_1 = SERVICES[1].icon;
const SERVICES_ICON_2 = SERVICES[2].icon;

const PILLARS_ICON_0 = PILLARS[0].icon;
const PILLARS_ICON_1 = PILLARS[1].icon;
const PILLARS_ICON_2 = PILLARS[2].icon;

