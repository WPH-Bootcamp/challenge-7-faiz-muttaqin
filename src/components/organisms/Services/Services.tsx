import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { ProximityBorder } from '@/components/molecules/ProximityBorder';

const services = [
	{
		icon: './img/icon-web-development.png',
		title: 'Web Development',
		description: 'Custom web applications built with modern technologies',
	},
	{
		icon: './img/icon-mobile-development.png',
		title: 'Mobile Development',
		description: 'Native and cross-platform mobile applications',
	},
	{
		icon: './img/icon-ui-ux-design.png',
		title: 'UI/UX Design',
		description: 'User-centered design that drives engagement',
	},
	{
		icon: './img/icon-cloud.png',
		title: 'Cloud Solutions',
		description: 'Scalable cloud infrastructure and migration services',
	},
	{
		icon: './img/icon-software-development.png',
		title: 'Software Development',
		description: 'Enterprise software solutions and integrations',
	},
	{
		icon: './img/icon-it-infrastructure.png',
		title: 'IT Infrastructure',
		description: 'Robust IT infrastructure setup and management',
	},
	{
		icon: './img/icon-cyber-security-services.png',
		title: 'Cyber Security',
		description: 'Comprehensive security solutions and monitoring',
	},
	{
		icon: './img/icon-qa-solution.png',
		title: 'QA Solutions',
		description: 'Comprehensive testing and quality assurance',
	},
	{
		icon: './img/icon-it-consulting-n-support.png',
		title: 'IT Consulting & Support',
		description: 'Make smarter tech decisions with expert guidance.',
	},
];

export const Services = () => {
	const ref = useRef<HTMLDivElement>(null);
	const isVisible = useScrollAnimation(ref);

	return (
		<section id="service" className="py-16 bg-white dark:bg-black">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div
					ref={ref}
					className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
						}`}
				>
					<h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
						Smart IT Solutions That Grow With You
					</h2>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{services.map((service, index) => (
						<ProximityBorder key={index}>
							<div
								className="bg-[#FAFAFA] dark:bg-[#0A0D12] border border-[#DEDCDC] dark:border-[#181D27] p-6 pt-0 rounded-2xl hover:shadow-lg dark:hover:shadow-lg animate-on-scroll card-animate"
							>
								<img
									src={service.icon}
									alt={service.title}
									className="relative bottom-8 w-16 h-16"
								/>
								<h3 className="text-xl font-semibold mb-3">{service.title}</h3>
								<p className="text-gray-600 dark:text-gray-400">
									{service.description}
								</p>
							</div>
						</ProximityBorder>
					))}
				</div>
			</div>
		</section>
	);
};
