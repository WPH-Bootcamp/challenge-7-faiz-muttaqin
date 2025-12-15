import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type PortfolioCardProps = {
    title: string;
    category: string;
    image: string;
    delay?: number;
}

export const PortfolioCard = ({ title, category, image, delay = 0 }: PortfolioCardProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    return (
        <div
            ref={ref}
            className={`group relative overflow-hidden rounded-2xl transition-all duration-800 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-orange-400 text-sm mb-1">{category}</p>
                <h3 className="text-white text-xl font-bold">{title}</h3>
            </div>
        </div>
    );
};
