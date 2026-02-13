import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Send, AlertCircle } from 'lucide-react';
import Magnetic from '../ui/Magnetic';

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'none' | 'success' | 'error'>('none');

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isValid || !name || !message || isSubmitting) return;

        setIsSubmitting(true);
        setSubmitStatus('none');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: '869b23ea-bf15-4de6-8215-267c13f91b99',
                    name: name,
                    email: email,
                    message: message,
                    subject: `New Contact from ${name} via glombardo.xyz`,
                    from_name: "Portfolio Contact Form"
                })
            });

            const result = await response.json();
            if (result.success) {
                setSubmitStatus('success');
                setName('');
                setEmail('');
                setMessage('');
                setIsValid(false);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form className="relative bg-slate-900/50 p-8 rounded-3xl border border-slate-800 backdrop-blur-sm shadow-2xl" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                    <label className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest pl-1">Identify Yourself</label>
                    <input
                        type="text"
                        required
                        placeholder="Future Collaborator"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                            required
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
                    required
                    placeholder="I have a complex system challenge that needs your architecture..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-slate-200 focus:outline-none focus:border-brand-accent focus:ring-1 focus:ring-brand-accent/50 transition-all font-sans resize-none"
                ></textarea>
            </div>

            <div className="flex flex-col items-center gap-4">
                <AnimatePresence>
                    {submitStatus === 'success' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-green-400 font-mono text-sm flex items-center gap-2"
                        >
                            <Check className="w-4 h-4" /> TRANSMISSION_SUCCESSFUL
                        </motion.div>
                    )}
                    {submitStatus === 'error' && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 font-mono text-sm flex items-center gap-2"
                        >
                            <AlertCircle className="w-4 h-4" /> TRANSMISSION_FAILED
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* @ts-ignore */}
                <Magnetic strength={0.4}>
                    <motion.button
                        type="submit"
                        disabled={isSubmitting || !isValid || !name || !message}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-10 py-5 bg-slate-100 text-brand-900 font-bold rounded-2xl flex items-center gap-3 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_40px_rgba(45,212,191,0.5)] transition-all group relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        <span className="font-mono tracking-wider text-base z-10">
                            {isSubmitting ? 'PROCESSING...' : 'INITIATE_PROTOCOL'}
                        </span>
                        <Send className={`w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform z-10 ${isSubmitting ? 'animate-pulse' : ''}`} />
                    </motion.button>
                </Magnetic>
            </div>
        </form>
    );
}

