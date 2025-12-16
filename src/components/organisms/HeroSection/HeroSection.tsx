import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { BrandCarousel } from '@/components/molecules/BrandCarousel';
import { useTheme } from '@/context/ThemeContext';

export const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    // const imageRef = useRef<HTMLImageElement>(null);
    const { isDark } = useTheme();

    useEffect(() => {
        // Trigger animations on mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    const handleGetStarted = () => {
        const contactSection = document.querySelector('#contact');
        contactSection?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section className="pt-20 pb-16 bg-white dark:bg-black ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-160">
                    {/* Left Content */}
                    <div className="space-y-6 z-10">
                        <div
                            className={`hero-element transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}
                            style={{ transitionDelay: '200ms' }}
                        >
                        </div>

                        <h1
                            className={`hero-element text-5xl md:text-6xl font-bold text-gray-900 dark:text-white transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'}`}
                            style={{ transitionDelay: '400ms' }}
                        >
                            Your Tech Partner for{' '}
                            <span className="text-orange-500">Smarter Growth</span>
                        </h1>

                        <p
                            className={`hero-element text-lg text-gray-600 dark:text-gray-400 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'
                                }`}
                            style={{ transitionDelay: '600ms' }}
                        >
                            We bring your ideas to solutions to help you grow with speed and
                            precision. Let us handle the tech, so you can focus on what you do
                            best!
                        </p>

                        <div
                            className={`hero-element flex flex-wrap gap-4 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-md'
                                }`}
                            style={{ transitionDelay: '800ms' }}
                        >
                            <Button onClick={handleGetStarted} className='px-12 py-4 rounded-full font-large primary-button-shadow'>Let's Talk</Button>
                            
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className=" lg:absolute lg:right-0 lg:top-0 z-0 hero-image transition-all duration-1200">
                        {isDark ? (
                            <div className=" rounded-lg overflow-hidden">
                                <img
                                    src="/img/hero-img-dark.png"
                                    alt="Hero Image"
                                    className="w-full h-auto"
                                />
                                <div
                                    className="absolute inset-0 rounded-lg"
                                    style={{
                                        background: `linear-gradient(
                                            to right,
                                            rgba(0, 0, 0, 1) 0%,
                                            transparent 20%,
                                            transparent 80%,
                                            rgba(0, 0, 0, 1) 100%
                                        ),
                                        linear-gradient(
                                            to bottom,
                                            rgba(0, 0, 0, 1) 0%,
                                            transparent 20%,
                                            transparent 80%,
                                            rgba(0, 0, 0, 1) 100%
                                        )`
                                    }}
                                ></div>
                            </div>
                        ) : (
                            <div className="rounded-lg overflow-hidden">
                                <img
                                    src="/img/hero-img-light.png"
                                    alt="Hero Image"
                                    className="w-full h-auto"
                                />
                                <div
                                    className="absolute inset-0 rounded-lg"
                                    style={{
                                        background: `linear-gradient(
                                            to right,
                                            rgba(255, 255, 255, 1) 0%,
                                            transparent 20%,
                                            transparent 80%,
                                            rgba(255, 255, 255, 1) 100%
                                        ),
                                        linear-gradient(
                                            to bottom,
                                            rgba(255, 255, 255, 1) 0%,
                                            transparent 20%,
                                            transparent 80%,
                                            rgba(255, 255, 255, 1) 100%
                                        )`
                                    }}
                                ></div>
                            </div>
                        )}
                    </div>
                </div>

            </div>
                {/* Brand Carousel */}
                <div
                    className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                    style={{ transitionDelay: '1200ms' }}
                >
                    <BrandCarousel />
                    
                </div>
        </section>
    );
};
