import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StatusIndicator() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY || document.documentElement.scrollTop;
            setIsVisible(currentScroll < 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, x: 20, filter: "blur(10px)" }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                        scale: 1
                    }}
                    exit={{
                        opacity: 0,
                        x: 100,
                        filter: "blur(20px)",
                        scale: 0.9,
                        transition: { duration: 0.5, ease: "easeInOut" }
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="fixed bottom-6 right-6 z-50 flex items-center gap-2 font-mono text-xs text-brand-accent tracking-widest mix-blend-screen"
                >
                    <motion.div
                        animate={{ opacity: [0.4, 1, 0.4] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-2 h-2 rounded-full bg-brand-accent shadow-[0_0_8px_#2dd4bf]"
                    />
                    {/* <span>SYSTEM: ONLINE</span>
                    <span className="hidden md:inline">|</span>
                    <span className="hidden md:inline">AGENT: ACTIVE</span> */}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
