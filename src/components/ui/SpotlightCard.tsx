import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function SpotlightCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateXSpring = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 400, damping: 90 });
    const rotateYSpring = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 400, damping: 90 });

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Spotlight calculation
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);

        // Tilt calculation
        x.set((clientX - left) / width - 0.5);
        y.set((clientY - top) / height - 0.5);
    }

    function handleMouseLeave() {
        x.set(0);
        y.set(0);
    }

    return (
        <motion.div
            className={`group relative border border-slate-800 bg-slate-900 overflow-hidden rounded-xl ${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: rotateXSpring,
                rotateY: rotateYSpring,
                transformStyle: "preserve-3d"
            }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100 z-30"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                            650px circle at ${mouseX}px ${mouseY}px,
                            rgba(99, 102, 241, 0.15),
                            transparent 80%
                        )
                    `,
                }}
            />
            {/* Main content container with some Z-depth preservation */}
            <div className="relative h-full transform-style-3d">{children}</div>
        </motion.div>
    );
}
