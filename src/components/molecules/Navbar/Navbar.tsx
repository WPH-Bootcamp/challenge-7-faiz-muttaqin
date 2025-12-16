import { useState, useEffect } from 'react';
import { Logo } from '@/components/atoms/Logo';
import { NavLink } from '@/components/atoms/NavLink';
import { ThemeToggle } from '@/components/atoms/ThemeToggle';
import { Icon } from '@/components/atoms/Icon';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Service', href: '#service' },
        { label: 'Portfolio', href: '#portfolio' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md'+ (isMobileMenuOpen ? ' h-full' : '')
                    : (isMobileMenuOpen ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md ' : 'bg-transparent')
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Logo />

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navItems.map((item) => (
                            <NavLink key={item.href} href={item.href}>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <ThemeToggle />
                        <NavLink href="#contact" >
                            <Button className='px-12 py-4 rounded-full font-large primary-button-shadow'>Let’s Talk</Button>
                        </NavLink>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ThemeToggle />
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            {isMobileMenuOpen ? (
                                <Icon name="close" className="text-gray-700 dark:text-gray-300" />
                            ) : (
                                <Icon name="menu" className="text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <NavLink
                                    key={item.href}
                                    href={item.href}
                                    className="block"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.label}
                                </NavLink>
                            ))}
                            <NavLink href="#contact" >
                                <Button className="w-full py-4 rounded-full font-large primary-button-shadow">Let’s Talk</Button>
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};
