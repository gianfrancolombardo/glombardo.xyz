import React from 'react';

const COLORS = {
    blue: "text-blue-400 border-blue-400/30 bg-blue-400/10",
    green: "text-green-400 border-green-400/30 bg-green-400/10",
    purple: "text-purple-400 border-purple-400/30 bg-purple-400/10",
    orange: "text-orange-400 border-orange-400/30 bg-orange-400/10",
    cyan: "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    default: "text-slate-400 border-slate-700 bg-slate-800",
};

export default function SyntaxChip({ label }: { label: string }) {
    // Simple deterministic color assignment based on char code
    const getColor = (str: string) => {
        if (['AI', 'LLM', 'Agents'].some(k => str.includes(k))) return COLORS.purple;
        if (['React', 'Angular', 'Streamlit'].some(k => str.includes(k))) return COLORS.cyan;
        if (['Python', 'Django'].some(k => str.includes(k))) return COLORS.blue;
        if (['Social Impact'].some(k => str.includes(k))) return COLORS.green;
        return COLORS.default;
    };

    const style = getColor(label);

    return (
        <span className={`px-2 py-1 rounded-md text-[10px] font-mono border ${style} tracking-tight`}>
            {label}
        </span>
    );
}
