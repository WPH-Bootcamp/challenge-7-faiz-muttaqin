import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const portfolioItems = [
    {
        title: 'Portfolio 1',
        category: 'Landing Page',
        image: './img/portofolio-1.png',
    },
    {
        title: 'Portfolio 2',
        category: 'Landing Page',
        image: './img/portofolio-2.png',
    },
    {
        title: 'Portfolio 3',
        category: 'Landing Page',
        image: './img/portofolio-3.png',
    }
];

export const Portfolio = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    return (
        <section id="portfolio" className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={ref}
                    className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        From Vision to Launch: Projects We're Proud Of
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Take a closer look at our recent work powering startups, enterprises, and everything in between.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 dark:bg-black rounded-lg overflow-hidden hover:shadow-lg transition-shadow animate-on-scroll card-animate stagger-delay-1"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-100 object-cover"
                            />
                            <div className="p-6">
                                <p className="font-semibold text-orange-600">{item.category}</p>
                                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
