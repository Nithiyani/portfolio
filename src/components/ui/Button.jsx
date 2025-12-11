import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ children, variant = 'outline', href, className = '', ...props }) => {
    const baseStyles = "px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 inline-block";
    const variants = {
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-dark",
        solid: "bg-primary text-dark border-2 border-primary hover:bg-transparent hover:text-primary",
    };

    const Component = href ? motion.a : motion.button;
    const contentProps = href ? { href, ...props } : props;

    return (
        <Component
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...contentProps}
        >
            {children}
        </Component>
    );
};

export default Button;
