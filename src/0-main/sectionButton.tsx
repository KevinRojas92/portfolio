import type { ReactNode } from 'react';
import { motion } from 'motion/react';
import { useMediaQuery } from './useMediaQuery';

type SectionButtonProps = {
    children: ReactNode;
    href: string;
    className?: string;
    target?: string;
    onMount?: boolean;
    delay?: number;
}

export function SectionButton({ children, href, className, target, onMount = false, delay = 0 }: SectionButtonProps) {
    const isWide = useMediaQuery('(min-width: 744px)');

    const hidden = {
        opacity: 0,
        x: isWide ? 16 : 0,
        y: isWide ? 0 : 16
    };

    const reveal = {
        opacity: 1,
        x: 0,
        y: 0
    };

    return (
        <motion.div
            className='bottom-button-container'
            initial={hidden}
            {...(onMount
                ? { animate: reveal }
                : { whileInView: reveal, viewport: { amount: 0.3 } })}
            transition={{ duration: 0.3, ease: 'easeInOut', delay }}
        >
            <a className={className} href={href} target={target}>{children}</a>
        </motion.div>
    );
}