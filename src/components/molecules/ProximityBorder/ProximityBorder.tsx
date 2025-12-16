import { useRef, useState } from "react"

export function ProximityBorder({
    children,
    className = "",
}: {
    children: React.ReactNode
    className?: string
}) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isHovered, setIsHovered] = useState(false)

    const handleMouseMove = (e: React.MouseEvent) => {
        const container = containerRef.current
        if (!container) return
        
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        // Calculate pixel position (not percentage)
        container.style.setProperty('--mouse-x', `${x}px`)
        container.style.setProperty('--mouse-y', `${y}px`)
        
        if (!isHovered) {
            setIsHovered(true)
        }
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    return (
        <div
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`relative ${className}`}
            style={{
                '--mouse-x': '0px',
                '--mouse-y': '0px',
            } as React.CSSProperties}
        >
            {/* Background glow effect */}
            <div className={`pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-2xl overflow-hidden `}>
                <div className={`${isHovered ? "glow-border-gradient" : ""} absolute inset-0`} />
            </div>

            {children}
        </div>
    )
}
