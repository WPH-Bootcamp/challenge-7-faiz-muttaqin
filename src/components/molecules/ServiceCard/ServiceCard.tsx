import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type ServiceCardProps = {
    icon: string;
    title: string;
    description: string;
    delay?: number;
}

export const ServiceCard = ({ icon, title, description, delay = 0 }: ServiceCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    return (
        <div
            ref={ref}
            className={`solution-card p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 transition-all duration-800 hover:shadow-lg hover:border-orange-400 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900/20 rounded-xl flex items-center justify-center mb-4">
                <img src={icon} alt={title} className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
    );
};
