// import { useRef } from 'react';
// import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { FAQItem } from '@/components/molecules/FAQItem';
import { Button } from '@/components/ui/button';

const faqData = [
    {
        question: 'What services do you offer?',
        answer:
            'We provide custom web/app development, cloud solutions, UX/UI design, and more.',
    },
    {
        question: 'How do I know if now is the right time for my business?',
        answer:
            'Book a free consult — we’ll assess your goals and recommend the right approach.',
    },
    {
        question: 'How much does a project cost?',
        answer:
            'Every project is different. Let’s talk about your needs to get a tailored estimate.',
    },
    {
        question: 'How long does it take?',
        answer:
            'Depends on scope — but we always prioritize quality and deadlines.',
    },
    {
        question: 'Can I start with a small project first?',
        answer:
            'Absolutely. We often begin with MVPs or pilot projects.',
    },
];

export const FAQ = () => {

    return (
        <section id="faq" className="py-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:justify-between text-center animate-on-scroll fade-up">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 md:text-left">
                        Need Help? Start <br className="hidden md:block" />
                        Here.
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 md:text-right">
                        Everything you need to <br className="hidden md:block" />
                        know — all in one place.
                    </p>
                </div>
                <hr className="my-8 border border-gray-200 dark:border-gray-800" />
                <div className='flex flex-col md:flex-row gap-4 justify-between'>
                    <div className="max-w-3xl space-y-4 flex-grow-1">
                        {faqData.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                    {/* <!-- Consultation CTA --> */}
                    <div
                        className="bg-primary rounded-lg p-8 text-white text-center relative overflow-hidden max-w-[329px] "
                    >
                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold mb-4 text-left">
                                Let’s talk it through
                            </h3>
                            <p className="mb-6 opacity-90 text-left">
                                Get expert guidance on your next project
                            </p>
                            <img
                                src="./img/consultation-image.png"
                                alt="Consultation"
                                className="w-full mb-5"
                            />
                            <a href="#contact">
                                <Button className="text-white text-bolder bg-black dark:bg-white dark:text-black px-8 py-5 rounded-full font-medium w-full primary-button-shadow">
                                    Free Consultation
                                </Button>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
