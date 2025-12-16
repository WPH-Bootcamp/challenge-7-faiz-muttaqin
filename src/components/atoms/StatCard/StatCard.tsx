import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type StatCardProps = {
    value: string;
    label: string;
    delay?: number;
}

export const StatCard = ({ value, label, delay = 0 }: StatCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    return (
        <div
            ref={ref}
            className={`flex flex-col justify-center rounded-full bg-[#FAFAFA] dark:bg-[#0A0D12] border border-[#DEDCDC] dark:border-[#181D27] w-60 h-60 text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="text-5xl font-bold text-orange-500 mb-2">{value}</div>
            <div className="text-gray-600 dark:text-gray-400">{label}</div>
        </div>
    );
};
