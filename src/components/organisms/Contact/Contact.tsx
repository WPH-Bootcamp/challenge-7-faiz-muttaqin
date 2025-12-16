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
    message: string;
    services: string[];
}

type FormStatus = {
    type: 'idle' | 'loading' | 'success' | 'error';
    message: string;
}

const serviceOptions = [
    { id: 'web-development', label: 'Web Development' },
    { id: 'cloud-solutions', label: 'Cloud Solutions' },
    { id: 'mobile-development', label: 'Mobile App Development' },
    { id: 'software-development', label: 'Software Development' },
    { id: 'ui-ux-design', label: 'UI/UX Design' },
    { id: 'other', label: 'Other' },
];

export const Contact = () => {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useScrollAnimation(ref);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
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
                            <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="text-sm font-bold text-[#0A0D12] dark:text-[#FDFDFD] mb-3 "
                                >
                                    Name
                                </label>
                                <Input
                                    type="text"
                                    name="name"
                                    placeholder="Enter Your Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="email"
                                    className="text-sm font-bold text-[#0A0D12] dark:text-[#FDFDFD] mb-3 cursor-pointer"
                                >
                                    Email
                                </label>
                                <Input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-5">
                                <label
                                    htmlFor="message"
                                    className="text-sm font-bold text-[#0A0D12] dark:text-[#FDFDFD] mb-3 cursor-pointer"
                                >
                                    Message
                                </label>
                                <Textarea
                                    name="message"
                                    placeholder="Your Message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className='h-25'
                                />
                            </div>
                            <div className="mb-5">
                                <label className="block text-sm font-bold text-[#0A0D12] dark:text-[#FDFDFD] mb-3 ">Services</label>
                                <div className="grid grid-cols-2 gap-4">
                                    {serviceOptions.map((service) => (
                                        <div key={service.id} className="flex items-center space-x-3">
                                            <Checkbox
                                                id={service.id}
                                                checked={formData.services.includes(service.id)}
                                                onCheckedChange={() => handleCheckboxChange(service.id)}
                                            />
                                            <label
                                                htmlFor={service.id}
                                                className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer"
                                            >
                                                {service.label}
                                            </label>
                                        </div>
                                    ))}
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
