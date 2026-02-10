import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, AlertCircle } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function ContactForm() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Micro-validation logic
    const validateEmail = (val: string) => {
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        setIsValid(valid);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.target.value;
        setEmail(val);
        validateEmail(val);
    };

    return (
        <form className="relative bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-2xl" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest pl-1">Identify Yourself</label>
                    <input
                        type="text"
                        placeholder="Future Collaborator"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all font-display"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest pl-1 flex items-center justify-between">
                        Transmission Channel
                        <AnimatePresence>
                            {isValid && (
                                <motion.span
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0 }}
                                    className="text-green-400 flex items-center gap-1 normal-case"
                                >
                                    <Check className="w-3 h-3" /> Secure
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </label>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="hello@innovation.io"
                            value={email}
                            onChange={handleEmailChange}
                            onFocus={() => setIsFocused(true)}
                            onBlur={() => setIsFocused(false)}
                            className={`w-full bg-slate-950 border rounded-xl px-4 py-3 text-slate-200 focus:outline-none transition-all font-mono ${isValid ? 'border-green-500/50' : 'border-slate-800 focus:border-brand-accent'}`}
                        />
                    </div>
                </div>
            </div>

            <div className="space-y-2 mb-6">
                <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest pl-1">Payload</label>
                <textarea
                    rows={4}
                    placeholder="I have a complex system challenge that needs your architecture..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all font-sans resize-none"
                ></textarea>
            </div>

            <div className="w-full flex justify-center">
                {/* @ts-ignore */}
                <Magnetic strength={0.4}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-10 py-5 bg-slate-100 text-brand-900 font-bold rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(45,212,191,0.5)] transition-shadow group relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span className="font-mono tracking-wider text-base z-10">INITIATE_PROTOCOL</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform z-10" />
                    </motion.button>
                </Magnetic>
            </div>
        </form>
    );
}
