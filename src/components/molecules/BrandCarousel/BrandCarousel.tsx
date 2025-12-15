import { useEffect, useRef } from 'react';

type Brand = {
    name: string;
    logo: string;
}

const brands: Brand[] = [
    { name: 'Adobe', logo: '/img/brand-adobe.svg' },
    { name: 'Zoom', logo: '/img/brand-zoom.svg' },
    { name: 'Airbnb', logo: '/img/brand-airbnb.svg' },
    { name: 'Netflix', logo: '/img/brand-netflix.svg' },
    { name: 'PayPal', logo: '/img/brand-paypal.svg' },
    { name: 'Dropbox', logo: '/img/brand-dropbox.svg' },
    { name: 'Upwork', logo: '/img/brand-upwork.svg' },
];

export const BrandCarousel = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let scrollPosition = 0;
        const scroll = () => {
            scrollPosition += 1;
            if (scrollPosition >= scrollContainer.scrollWidth / 2) {
                scrollPosition = 0;
            }
            scrollContainer.scrollLeft = scrollPosition;
        };

        const intervalId = setInterval(scroll, 30);
        return () => clearInterval(intervalId);
    }, []);

    // Duplicate brands for seamless loop
    const duplicatedBrands = [...brands, ...brands, ...brands];

    return (
        <div className="mt-16 text-center">
            <p className="text-gray-800 dark:text-gray-400 mb-20 font-bold text-2xl">
                Trusted by global innovators and Leading Brands
            </p>
            <div className="overflow-hidden">
                <div
                    ref={scrollRef}
                    className="flex gap-12 items-center overflow-x-hidden"
                    style={{ scrollBehavior: 'smooth' }}
                >
                    {duplicatedBrands.map((brand, index) => (
                        <img
                            key={`${brand.name}-${index}`}
                            src={brand.logo}
                            alt={brand.name}
                            className="h-10 opacity-70 grayscale-100 hover:grayscale-0 hover:opacity-100 transition-all duration-300 flex-shrink-0"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
