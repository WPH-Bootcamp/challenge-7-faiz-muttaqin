type NavLinkProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

export const NavLink = ({ href, children, className = '', onClick }: NavLinkProps) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
        onClick?.();
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className={`text-gray-700 dark:text-gray-300 hover:text-orange-500 dark:hover:text-orange-500 transition-colors ${className}`}
        >
            {children}
        </a>
    );
};
