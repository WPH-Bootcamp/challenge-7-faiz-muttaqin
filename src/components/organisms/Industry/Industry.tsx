import { useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const industries = [
    {
        id: 'fintech',
        name: 'Fintech',
        description:
            'We turn ideas into scalable, secure, and user-friendly digital products. From concept through launch, our team crafts solutions that delight users and drive business growth.',
        image: '/img/tab-fintech-image.png',
    },
    {
        id: 'ecommerce',
        name: 'E-commerce',
        description:
            'Build powerful online stores with seamless shopping experiences, secure payments, and scalable infrastructure.',
        image: '/img/tab-ecommerce-image.png',
    },
    {
        id: 'healthcare',
        name: 'Healthcare',
        description:
            'Innovative healthcare solutions that improve patient care and streamline medical operations.',
        image: '/img/tab-healthcare-image.png',
    },
];

export const Industry = () => {
    const [activeTab, setActiveTab] = useState('fintech');
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    const activeIndustry = industries.find((ind) => ind.id === activeTab);

    return (
        <section className="py-16 bg-gray-50 dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={ref}
                    className={`text-left mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
					<h2     className="text-3xl md:text-4xl font-bold mb-4">
						Built for Your Industry
					</h2>
					<p className="text-gray-600 dark:text-gray-400">
						We've helped companies across industries launch smarter, faster, and
						more securely.
					</p>
                </div>

                {/* Tabs */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Left Side - Tabs */}
                    <div className="col-span-12 md:col-span-4 space-y-2">
                        {industries.map((industry) => (
                            <button
                                key={industry.id}
                                onClick={() => setActiveTab(industry.id)}
                                className={`w-full text-left p-4 rounded-lg transition-all duration-300 ${
                                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                            >
                                <div className="flex items-center">
                                    <div
                                        className={`w-1 h-8 rounded-full mr-4 transition-colors duration-300 ${
                                            activeTab === industry.id
                                                ? 'bg-orange-500'
                                                : 'bg-gray-300 dark:bg-gray-600'
                                        }`}
                                    ></div>
                                    <span
                                        className={`text-lg font-semibold transition-colors duration-300 ${
                                            activeTab === industry.id
                                                ? 'text-gray-900 dark:text-white'
                                                : 'text-gray-400 hover:text-gray-900 dark:hover:text-white'
                                        }`}
                                    >
                                        {industry.name}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right Side - Content */}
                    <div
                        className={`col-span-12 md:col-span-8 transition-all duration-800 ${
                            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                        }`}
                    >
                        {activeIndustry && (
                            <div className="animate-in fade-in duration-500">
                                <div className="mb-6">
                                    <p className="text-neutral-800 dark:text-neutral-200 text-lg font-semibold leading-relaxed">
                                        {activeIndustry.description}
                                    </p>
                                </div>
                                <div className="rounded-xl overflow-hidden">
                                    <img
                                        src={activeIndustry.image}
                                        alt={`${activeIndustry.name} Solutions`}
                                        className="w-full h-80 object-cover rounded-xl"
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
