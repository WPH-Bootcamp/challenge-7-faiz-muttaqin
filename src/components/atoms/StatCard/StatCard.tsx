import { useRef, useEffect, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type StatCardProps = {
    value: number;
    valueMark?: string;
    label: string;
    delay?: number;
}

export const StatCard = ({ value, valueMark, label, delay = 0 }: StatCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isVisible) {
            let startTime: number | null = null;
            const duration = 2000; // 2 seconds animation

            const animate = (currentTime: number) => {
                if (!startTime) startTime = currentTime;
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Easing function for smooth animation (easeOutCubic)
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                
                setDisplayValue(Math.floor(easeProgress * value));

                if (progress < 1) {
                    requestAnimationFrame(animate);
                }
            };

            requestAnimationFrame(animate);
        }
    }, [isVisible, value]);

    return (
        <div
            ref={ref}
            className={`flex flex-col justify-center rounded-full bg-[#FAFAFA] dark:bg-[#0A0D12] border border-[#DEDCDC] dark:border-[#181D27] w-60 h-60 text-center transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="text-5xl font-bold text-orange-500 mb-2">{displayValue}{valueMark}</div>
            <div className="text-[#0A0D12] dark:text-[#FDFDFD] font-bold">{label}</div>
        </div>
    );
};
