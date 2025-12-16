import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { StatCard } from '@/components/atoms/StatCard';

const stats = [
    { value: 50, valueMark: '+', label: 'Projects Launched' },
    { value: 5, valueMark: '+', label: 'Years of Experience' },
    { value: 10, valueMark: '+', label: 'Industry Awards Won' },
    { value: 100, valueMark: '%', label: 'Client Satisfaction Rate' },
];

export const Statistics = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    return (
        <section id="about" className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={ref}
                    className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        End-to-End IT Solutions That Drive Results
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        From concept to launch, we provide comprehensive technology solutions
                        that deliver measurable business outcomes.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            value={stat.value}
                            valueMark={stat.valueMark}
                            label={stat.label}
                            delay={index * 100}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
