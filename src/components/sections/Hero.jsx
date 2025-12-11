import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.5,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-dark text-white p-4 md:p-12 relative w-full md:-ml-12 md:w-[calc(100%+3rem)] overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gray-800/20 to-transparent pointer-events-none" />

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="max-w-4xl text-center md:text-left z-10"
            >
                <motion.p variants={itemVariants} className="text-primary text-lg md:text-2xl font-medium mb-4">
                    Hi, my name is
                </motion.p>
                <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-none">
                    Nithiyani Jenova.
                </motion.h1>
                <motion.h2 variants={itemVariants} className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-400 mb-8 leading-tight">
                    Associate Software Engineer.
                </motion.h2>
                <motion.p variants={itemVariants} className="text-base md:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed">
                    I'm a software engineer with hands-on experience in building modern, efficient web applications using Next.js and React. I have a strong focus on scalable frontend development and seamless system integration.
                </motion.p>
                <motion.div variants={itemVariants}>
                    <Button variant="outline" href="#contact">
                        Get In Touch
                    </Button>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
