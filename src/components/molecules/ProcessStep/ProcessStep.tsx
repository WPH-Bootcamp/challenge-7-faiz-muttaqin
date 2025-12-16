import { useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

type ProcessStepProps = {
    number: number;
    title: string;
    subtitle: string;
    details: string;
    position: 'left' | 'right';
    delay?: number;
}

export const ProcessStep = ({ 
    number, 
    title, 
    subtitle, 
    details, 
    position, 
    delay = 0 
}: ProcessStepProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="flex items-center">
            {position === 'left' ? (
                <>
                    <div className="order-3 flex-grow md:order-1 md:w-1/2 text-right animate-on-scroll fade-left" style={{ animationDelay: `${delay}ms` }}>
                        <div
                            ref={ref}
                            className={`flex bg-[#FAFAFA] dark:bg-[#0A0D12] border border-[#DEDCDC] dark:border-[#181D27] rounded-xl p-6 relative group hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 ${
                                isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white text-left">
                                    {title}
                                </h3>
                                <p className="text-gray-950 dark:text-white text-sm text-left">
                                    {subtitle}
                                </p>
                                <div 
                                    className={`process-details mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                                        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="text-gray-600 dark:text-gray-400 text-sm text-left leading-relaxed">
                                        {details}
                                    </p>
                                </div>
                            </div>
                            <svg
                                className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 process-icon transition-transform duration-300 ${
                                    isHovered ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="order-2 md:order-2 relative px-8 z-10 animate-on-scroll scale-in" style={{ animationDelay: `${delay}ms` }}>
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {number}
                        </div>
                    </div>
                    <div className="order-1 md:order-3 w-1/2 hidden md:block"></div>
                </>
            ) : (
                <>
                    <div className="w-1/2 hidden md:block"></div>
                    <div className="relative px-8 z-10 animate-on-scroll scale-in" style={{ animationDelay: `${delay}ms` }}>
                        <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                            {number}
                        </div>
                    </div>
                    <div className="flex-grow w-1/2 animate-on-scroll fade-right" style={{ animationDelay: `${delay}ms` }}>
                        <div
                            ref={ref}
                            className={`flex bg-[#FAFAFA] dark:bg-[#0A0D12] border border-[#DEDCDC] dark:border-[#181D27] rounded-xl p-6 relative group hover:border-orange-500 dark:hover:border-orange-500 transition-all duration-300 ${
                                isVisible ? 'opacity-100' : 'opacity-0'
                            }`}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-2 text-black dark:text-white text-left">
                                    {title}
                                </h3>
                                <p className="text-gray-950 dark:text-white text-left">
                                    {subtitle}
                                </p>
                                <div 
                                    className={`process-details mt-4 overflow-hidden transition-all duration-300 ease-in-out ${
                                        isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                                >
                                    <p className="text-gray-600 dark:text-gray-400 text-sm text-left leading-relaxed">
                                        {details}
                                    </p>
                                </div>
                            </div>
                            <svg
                                className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 process-icon transition-transform duration-300 ${
                                    isHovered ? 'rotate-180' : ''
                                }`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                ></path>
                            </svg>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};
