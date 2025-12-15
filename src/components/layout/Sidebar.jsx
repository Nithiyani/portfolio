import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Works', href: '#works' },
    { name: 'Contact', href: '#contact' },
];

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Handle resize to switch between mobile/desktop modes appropriately
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
                setIsOpen(true); // Always open on desktop
            }
        };

        // Initial check
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleOpen = () => setIsOpen(!isOpen);

    // Close drawer when clicking a link on mobile
    const handleLinkClick = () => {
        if (isMobile) setIsOpen(false);
    };

    const sidebarVariants = {
        open: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.3, ease: "easeOut" }
        },
        closed: {
            x: "-100%",
            opacity: 0,
            transition: { duration: 0.3, ease: "easeIn" }
        }
    };

    return (
        <>
            {/* Mobile Top Bar & Hamburger */}
            <div className="md:hidden fixed top-0 left-0 w-full h-16 bg-dark/95 backdrop-blur-md z-50 flex items-center justify-between px-6 shadow-md">
                <div className="text-white font-bold text-xl tracking-wide">
                    <img src="/logo.svg" alt="N" className="h-8 w-8" />
                </div>
                <button
                    onClick={toggleOpen}
                    className="text-white p-2 focus:outline-none"
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </button>
            </div>

            {/* Sidebar / Drawer */}
            <AnimatePresence mode="wait">
                {(isOpen || !isMobile) && (
                    <motion.aside
                        key="sidebar"
                        initial={isMobile ? "closed" : { x: 0, opacity: 1 }}
                        animate="open"
                        exit="closed"
                        variants={isMobile ? sidebarVariants : undefined}
                        className={`fixed left-0 top-0 h-screen w-64 bg-dark text-white flex flex-col justify-between py-10 z-[40] shadow-2xl ${isMobile ? 'pt-24' : ''}`}
                    >
                        {/* Brand (Desktop only) */}
                        <div className="text-center hidden md:block mb-6">
                            <img src="/logo.svg" alt="N" className="h-16 w-16 mx-auto" />
                        </div>

                        {/* Navigation Links */}
                        <nav className="flex flex-col items-center space-y-6">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={handleLinkClick}
                                    className="text-gray-400 hover:text-primary text-sm uppercase tracking-widest font-medium transition-colors duration-300 transform hover:scale-110"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        {/* Social Icons */}
                        <div className="flex flex-col items-center space-y-4">
                            <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-4">
                                <SocialIcon icon={<FaGithub />} href="https://github.com" />
                                <SocialIcon icon={<FaLinkedin />} href="https://linkedin.com" />
                                <SocialIcon icon={<HiOutlineMail />} href="mailto:nithujenova@gmail.com" />
                            </div>
                        </div>
                    </motion.aside>
                )}
            </AnimatePresence>

            {/* Overlay for mobile when menu is open */}
            {isMobile && isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black z-[30] md:hidden"
                />
            )}
        </>
    );
};

const SocialIcon = ({ icon, href }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-primary text-xl transition-colors duration-300 hover:-translate-y-1 block"
    >
        {icon}
    </a>
);

export default Sidebar;
