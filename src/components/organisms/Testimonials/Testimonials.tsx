import { useState, useEffect } from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from '@/components/ui/carousel';

const testimonials = [
    {
        name: 'Sarah Tan',
        role: 'Product Manager at Finovate',
        avatar: '/img/carousel-profile-1.png',
        rating: 5,
        testimonial:
            'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    },
    {
        name: 'John Lee',
        role: 'Creative Director at Innovate Corp',
        avatar: '/img/carousel-profile-2.png',
        rating: 5,
        testimonial:
            'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    },
    {
        name: 'Bobby Chen',
        role: 'Marketing Head at Tech Solutions',
        avatar: '/img/carousel-profile-3.png',
        rating: 5,
        testimonial:
            'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    },
    {
        name: 'Sarah Tan',
        role: 'Product Manager at Finovate',
        avatar: '/img/carousel-profile-1.png',
        rating: 5,
        testimonial:
            'The team delivered exactly what we needed — on time and with outstanding quality. Their attention to detail and communication were top-notch.',
    },
    {
        name: 'John Lee',
        role: 'Creative Director at Innovate Corp',
        avatar: '/img/carousel-profile-2.png',
        rating: 5,
        testimonial:
            'Working with this team was a game-changer for our project. They understood our vision and turned it into reality efficiently and effectively.',
    },
    {
        name: 'Bobby Chen',
        role: 'Marketing Head at Tech Solutions',
        avatar: '/img/carousel-profile-3.png',
        rating: 5,
        testimonial:
            'The collaboration was seamless, and the results surpassed our expectations. Their expertise transformed our ideas into a successful product.',
    },
];

export const Testimonials = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <section id="testimonials" className="py-16 bg-white dark:bg-black">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        What Partners Say About Working With Us
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Trusted voices. Real experiences. Proven results.
                    </p>
                </div>

                <div className="relative py-12 my-12">
                    <Carousel
                        opts={{
                            align: 'start',
                            loop: true,
                        }}
                        setApi={setApi}
                        className="w-full"
                    >
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index} className="basis-1/1 md:basis-1/2 lg:basis-1/3">
                                    <div className="py-8 h-full">
                                        <div className="relative flex flex-col items-center bg-white dark:bg-gray-900/40 border border-gray-200 dark:border-gray-800 hover:border-orange-500 transition-colors duration-300 rounded-2xl p-8 text-center h-full pb-16">
                                            {/* Quote Icon */}
                                            <img
                                                src="/img/icon-quote.svg"
                                                alt="Quote"
                                                className="absolute left-8 -top-6 w-12 h-12"
                                            />

                                            {/* Star Rating */}
                                            <div className="flex gap-1 mb-6">
                                                {[...Array(testimonial.rating)].map((_, i) => (
                                                    <img
                                                        key={i}
                                                        src="/img/icon-star.svg"
                                                        alt="star"
                                                        className="w-5 h-5"
                                                    />
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-8 flex-grow">
                                                "{testimonial.testimonial}"
                                            </blockquote>

                                            {/* Author Info */}
                                            <div className="text-center mb-2">
                                                <div className="font-semibold text-gray-900 dark:text-white">
                                                    {testimonial.name}
                                                </div>
                                                <div className="text-orange-500 text-sm">
                                                    {testimonial.role}
                                                </div>
                                            </div>

                                            {/* Avatar */}
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-16 h-16 rounded-full absolute -bottom-8 border-4 border-white dark:border-gray-900"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-0 h-full rounded-sm border-0 w-1/6 md:w-1/3 bg-gradient-to-r from-white to-transparent dark:from-black dark:to-black/30 [&>svg]:hidden" />
                        <CarouselNext className="right-0 h-full rounded-sm border-0 w-1/6 md:w-1/3 bg-gradient-to-l from-white to-transparent dark:from-black dark:to-black/30 [&>svg]:hidden" />

                    </Carousel>
                    
                    {/* Carousel Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    current === index
                                        ? 'w-2 bg-orange-500'
                                        : 'w-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
