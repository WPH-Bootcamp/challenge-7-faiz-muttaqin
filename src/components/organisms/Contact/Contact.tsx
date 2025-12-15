import { useState, useRef, type FormEvent } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Modal from '@/components/molecules/Popup/Modal';

type FormData = {
    name: string;
    email: string;
    subject: string;
    message: string;
    services: string[];
}

type FormStatus = {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

export const Contact = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
        services: [],
    });

    const [status, setStatus] = useState<FormStatus>({
        type: 'idle',
        message: '',
    });

    const [showModal, setShowModal] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleCheckboxChange = (serviceValue: string) => {
        setFormData((prev) => {
            const isChecked = prev.services.includes(serviceValue);
            return {
                ...prev,
                services: isChecked
                    ? prev.services.filter((s) => s !== serviceValue)
                    : [...prev.services, serviceValue],
            };
        });
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setStatus({ type: 'loading', message: 'Sending...' });
        setShowModal(true);

        // Simulate API call with random success/error
        setTimeout(() => {
            const isSuccess = Math.random() > 0.3; // 70% success rate, 30% error rate
            
            if (isSuccess) {
                setStatus({
                    type: 'success',
                    message: 'Thanks for reaching out — we’ll get back to you as soon as possible.',
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: '',
                    services: [],
                });
            } else {
                setStatus({
                    type: 'error',
                    message: 'We couldn’t send your message. Please try again or check your connection.',
                });
            }
        }, 2000);
    };

    return (
        <>
            <section id="contact" className="py-16 bg-white dark:bg-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div
                        ref={ref}
                        className={`text-center mb-12 transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                    >
                        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                            Ready to Start? Let’s Talk.
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            We are here to help you turn great ideas into great projects. Reach
                            out today!
                        </p>
                    </div>
                    <div
                        className={`max-w-2xl mx-auto transition-all duration-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`}
                        style={{ transitionDelay: '200ms' }}
                    >
                        <form
                            onSubmit={handleSubmit}
                            className="p-8"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <Input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-6">
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                />
                            </div>
                            <div className="mb-6">
                                <label className="block text-sm font-medium mb-4">Services</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="web-development"
                                            checked={formData.services.includes('web-development')}
                                            onCheckedChange={() => handleCheckboxChange('web-development')}
                                        />
                                        <label
                                            htmlFor="web-development"
                                            className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                                        >
                                            Web Development
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="cloud-solutions"
                                            checked={formData.services.includes('cloud-solutions')}
                                            onCheckedChange={() => handleCheckboxChange('cloud-solutions')}
                                        />
                                        <label
                                            htmlFor="cloud-solutions"
                                            className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                                        >
                                            Cloud Solutions
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="mobile-development"
                                            checked={formData.services.includes('mobile-development')}
                                            onCheckedChange={() => handleCheckboxChange('mobile-development')}
                                        />
                                        <label
                                            htmlFor="mobile-development"
                                            className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                                        >
                                            Mobile App Development
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="software-development"
                                            checked={formData.services.includes('software-development')}
                                            onCheckedChange={() => handleCheckboxChange('software-development')}
                                        />
                                        <label
                                            htmlFor="software-development"
                                            className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                                        >
                                            Software Development
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="ui-ux-design"
                                            checked={formData.services.includes('ui-ux-design')}
                                            onCheckedChange={() => handleCheckboxChange('ui-ux-design')}
                                        />
                                        <label
                                            htmlFor="ui-ux-design"
                                            className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                                        >
                                            UI/UX Design
                                        </label>
                                    </div>
                                    <div className="flex items-center space-x-3">
                                        <Checkbox
                                            id="other"
                                            checked={formData.services.includes('other')}
                                            onCheckedChange={() => handleCheckboxChange('other')}
                                        />
                                        <label
                                            htmlFor="other"
                                            className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                                        >
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <Button type="submit" className="w-full py-4 rounded-full font-large primary-button-shadow">
                                Send
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            <Modal
                isOpen={showModal}
                onClose={() => setShowModal(false)}
                status={status.type}
                message={status.message}
            />
        </>
    );
};
