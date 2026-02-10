import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "../../lib/utils";

interface DeckItemProps {
    className?: string;
    children: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
    style?: React.CSSProperties;
    variant?: 'service' | 'pillar';
}

export default function DeckItem({
    className,
    children,
    colSpan = 1,
    rowSpan = 1,
    style,
    variant = 'service',
}: DeckItemProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function handleMouseMove({ clientX, clientY }: React.MouseEvent) {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const xPct = (clientX - left) / width - 0.5;
        const yPct = (clientY - top) / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useTransform(mouseY, [-0.5, 0.5], [6, -6]); // Slightly reduced rotation for these potentially larger cards
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-6, 6]);

    const variantColor = variant === 'service' ? 'from-indigo-500/20 to-blue-600/20' : 'from-purple-500/20 to-pink-600/20';
    const borderColor = variant === 'service' ? 'group-hover:border-indigo-500/30' : 'group-hover:border-purple-500/30';
    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                ...style
            }}
            className={cn(
                "relative group rounded-3xl p-0.5", // Removed overflow-hidden from here to allow 3d overflow if needed, but usually safe to keep
                colSpan === 2 && "md:col-span-2",
                colSpan === 3 && "md:col-span-3",
                rowSpan === 2 && "md:row-span-2",
                className
            )}
        >
            <div
                style={{ transform: "translateZ(20px)" }}
                className={cn(
                    "relative h-full w-full bg-slate-950 rounded-[22px] overflow-hidden border border-white/5 z-20 transition-colors duration-500",
                    borderColor
                )}
            >
                {/* Inner Content Container */}
                <div className="relative h-full w-full z-20">
                    {children}
                </div>

                {/* Dynamic Noise Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.07] pointer-events-none z-10 mix-blend-overlay"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    }}
                ></div>

                {/* Variant-based Gradient Bloom/Glow */}
                <div className={cn(
                    "absolute -inset-full bg-gradient-radial from-white/0 via-white/0 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0",
                    variant === 'service' ? "from-brand-accent/5" : "from-purple-500/5"
                )} />

            </div>

            {/* Behind-the-scenes Gradient Bloom (Outer Glow) */}
            <div
                style={{ transform: "translateZ(-10px)" }}
                className={cn(
                    "absolute inset-4 bg-gradient-to-br opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700 z-0",
                    variantColor
                )}
            />

        </motion.div>
    );
}
