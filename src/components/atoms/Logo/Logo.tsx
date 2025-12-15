type LogoProps = {
    className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
    return (
        <div className={`flex items-center ${className}`}>
            <img src="/img/main-logo.svg" alt="Tech Logo" className="h-8 w-8" />
            {/* <span className="ml-2 text-xl font-bold text-orange-500">Your Logo</span> */}
            <h3 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
                Tech<span className="text-orange-500">notify</span>
            </h3>
        </div>
    );
};
