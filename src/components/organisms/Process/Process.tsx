import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProcessStep } from '@/components/molecules/ProcessStep';

const processSteps = [
    {
        number: 1,
        title: 'Discovery & Consultation',
        subtitle: 'Understand Your Needs & Goals',
        details: 'We start by listening — deeply. Through conversations and analysis, we uncover your true goals, challenges, and audience needs. This stage ensures we\'re aligned before any line of code or design begins.',
        position: 'left' as const,
    },
    {
        number: 2,
        title: 'Planning & Strategy',
        subtitle: 'Build a Clear, Scalable Roadmap',
        details: 'With insights in hand, we build a roadmap that\'s both clear and scalable. Every milestone, tool, and resource is mapped to create a smooth path from vision to execution — no guesswork, just strategy.',
        position: 'right' as const,
    },
    {
        number: 3,
        title: 'Design & Prototyping',
        subtitle: 'Craft UX That Converts',
        details: 'Here, creativity meets purpose. We craft user experiences that not only look stunning but guide visitors effortlessly toward action. Wireframes become prototypes; ideas start to feel real.',
        position: 'left' as const,
    },
    {
        number: 4,
        title: 'Development & Implementation',
        subtitle: 'Deliver With Speed & Precision',
        details: 'Our developers bring designs to life with clean, efficient, and scalable code. Whether it\'s a web app, backend system, or interactive UI, everything is built with precision and performance in mind.',
        position: 'right' as const,
    },
    {
        number: 5,
        title: 'Testing & Optimization',
        subtitle: 'Ensure Quality at Every Step',
        details: 'Before launch, we stress-test everything — functionality, performance, and usability. Feedback loops and refinements ensure the final product works perfectly in the real world.',
        position: 'left' as const,
    },
    {
        number: 6,
        title: 'Launch & Growth',
        subtitle: 'Scale, Measure & Improve Continuously',
        details: 'Launch isn\'t the finish line — it\'s the beginning of growth. We monitor, analyze, and optimize continuously to keep improving performance, scalability, and user satisfaction as your business evolves.',
        position: 'right' as const,
    },
];

export const Process = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    return (
        <section className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={ref}
                    className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                >
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Our Process
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Clear steps. Smart execution. Results you can count on.
                    </p>
                </div>

                <div className="relative">
					{/* <!-- Central Timeline Line --> */}
					<div
						className="absolute ml-14 md:m-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-neutral-200 dark:bg-neutral-800 transform md:-translate-x-1/2 animate-on-scroll scale-in"
					></div>

					<div className="space-y-16">
						{processSteps.map((step, index) => (
							<ProcessStep
								key={step.number}
								number={step.number}
								title={step.title}
								subtitle={step.subtitle}
								details={step.details}
								position={step.position}
								delay={index * 100}
							/>
						))}
					</div>
				</div>
            </div>
        </section>
    );
};
