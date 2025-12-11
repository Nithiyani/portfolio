import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const Contact = () => {
    return (
        <section id="contact" className="py-20 max-w-4xl mx-auto text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <p className="text-primary font-mono text-lg mb-4">05. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                    I am currently seeking opportunities to contribute to high-impact projects. My inbox is always open whether you have a question or just want to say hi!
                </p>
                <div className="mb-10 text-gray-700">
                    <p className="font-bold text-lg">Nithiyani Jenova</p>
                    <p>Vavuniya District, Northern Province, Sri Lanka</p>
                    <p>+94 776309689</p>
                </div>
                <Button variant="outline" href="mailto:nithujenova@gmail.com" className="px-10 py-4 text-base">
                    Say Hello
                </Button>
            </motion.div>

            <footer className="mt-40 text-sm text-gray-400 font-mono">
                <p className="mb-2">Designed by Nithiyani Jenova</p>
                <p>&copy; {new Date().getFullYear()} All rights reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
