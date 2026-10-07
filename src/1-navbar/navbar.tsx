import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMediaQuery } from "../0-main/useMediaQuery";
import { useScrollToHorizontal } from "../0-main/useScrollToHorizontal";
import './navbar.css';

const SECTIONS = ['home', 'portfolio', 'skills', 'about', 'work'];

export function Navbar() {
    const isWide = useMediaQuery('(min-width: 744px)');
    useScrollToHorizontal(isWide);

    const [activeId, setActiveId] = useState('home');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, { threshold: 0.5 });

        SECTIONS.forEach((id) => {
            const el = document.getElementById(id);

            if (el) {
                observer.observe(el);
            }
        });

        return () => observer.disconnect();
    }, []);

    const isAboutActive = activeId === 'about' || (isWide && activeId === 'work');

    return (
        <section id='nav-section'>
            <nav className='navbar'>
                <ul>
                    <li><a className={activeId === 'portfolio' ? 'active' : ''} href="#portfolio">Portfolio</a></li>
                    <li><a className={activeId === 'skills' ? 'active' : ''} href="#skills">Skills</a></li>
                    <li><a className={isAboutActive ? 'active' : ''} href="#about">About me</a></li>
                    {!isWide && (
                        <li><a className={activeId === 'work' ? 'active' : ''} href="#work">Work with me</a></li>
                    )}
                </ul>
            </nav>

            <AnimatePresence mode="popLayout">
                {activeId !== 'home' && (
                    <motion.div
                        className='button-container'
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <a href="#home">
                            <svg width="7" height="17" viewBox="0 0 7 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 4.76293C6.48148 4.56753 6.00926 4.36399 5.58333 4.1523C5.15741 3.94061 4.77778 3.72079 4.44444 3.49282L4.44444 17H2.55556L2.55556 3.49282C2.22222 3.72079 1.84259 3.94061 1.41667 4.1523C0.972222 4.36399 0.5 4.56753 7.40665e-08 4.76293L0 3.27299C1.35185 2.26341 2.36111 1.17241 3.02778 3.63006e-08L3.97222 0C4.62037 1.15613 5.62963 2.24713 7 3.27299V4.76293Z" fill="#0D0D0F" />
                            </svg>
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};