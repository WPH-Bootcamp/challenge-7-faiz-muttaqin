import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

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
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-web-development.png"
							alt="Web Development"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">Web Development</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Custom web applications built with modern technologies
						</p>
					</div>
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-mobile-development.png"
							alt="Mobile Development"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">Mobile Development</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Native and cross-platform mobile applications
						</p>
					</div>
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-ui-ux-design.png"
							alt="UI/UX Design"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
						<p className="text-gray-600 dark:text-gray-400">
							User-centered design that drives engagement
						</p>
					</div>
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-cloud.png"
							alt="Cloud Solutions"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">Cloud Solutions</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Scalable cloud infrastructure and migration services
						</p>
					</div>
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-software-development.png"
							alt="Software Development"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">Software Development</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Enterprise software solutions and integrations
						</p>
					</div>
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-it-infrastructure.png"
							alt="IT Infrastructure"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">IT Infrastructure</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Robust IT infrastructure setup and management
						</p>
					</div>
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-cyber-security-services.png"
							alt="Cyber Security"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">Cyber Security</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Comprehensive security solutions and monitoring
						</p>
					</div>
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-it-consulting-n-support.png"
							alt="IT Consulting"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">IT Consulting & Support</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Expert consulting and 24/7 technical support
						</p>
					</div>
					<div
						className="bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-900 p-6 pt-0 rounded-lg hover:shadow-lg solution-card animate-on-scroll card-animate "
					>
						<img
							src="./img/icon-qa-solution.png"
							alt="QA Solutions"
							className="relative bottom-8 w-16 h-16"
						/>
						<h3 className="text-xl font-semibold mb-3">QA Solutions</h3>
						<p className="text-gray-600 dark:text-gray-400">
							Comprehensive testing and quality assurance
						</p>
					</div>
				</div>
            </div>
        </section>
    );
};
