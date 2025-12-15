import { useState } from 'react';
import { Icon } from '@/components/atoms/Icon';

type FAQItemProps = {
    question: string;
    answer: string;
}

export const FAQItem = ({ question, answer }: FAQItemProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item border-b border-gray-200 dark:border-gray-800 py-4">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="faq-question w-full flex justify-between items-center text-left"
            >
                <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {question}
                </span>
                <div
                    className={`faq-icon text-black dark:text-white`}
                >
                    {isOpen ? <Icon name="minus" className={`mt-2`} /> : <Icon name="plus" className={`transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`} />}
                </div>
            </button>
            <div
                className={`faq-answer overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}
            >
                <p className="text-gray-600 dark:text-gray-400">{answer}</p>
            </div>
        </div>
    );
};
