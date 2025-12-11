import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center">
                    <span className="text-primary mr-4 text-3xl">01.</span> About Me
                </h2>

                <div className="grid md:grid-cols-3 gap-12">
                    <div className="md:col-span-3 text-lg text-gray-600 leading-relaxed space-y-6">
                        <p>
                            I am an Associate Software Engineer with experience in building modern web applications. I completed a Software Engineering internship at DealPartner Pvt Ltd and am currently contributing at EloopTech. My proven ability to collaborate across teams allows me to solve complex problems and ensure smooth delivery.
                        </p>
                        <p>
                            I am highly organized, proactive, and confident in balancing technical execution with team coordination. I am seeking a growth-focused opportunity to deepen my technical expertise and contribute to high-impact projects.
                        </p>
                        <p>
                            Here are a few technologies and tools I've been working with:
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm font-mono mt-4">
                            {[
                                'Next.js', 'React.js', 'Node.js', 'Express.js',
                                'REST APIs', 'MySQL', 'MongoDB',
                                'Jira / Trello', 'Figma / Adobe XD'
                            ].map((tech) => (
                                <div key={tech} className="flex items-center">
                                    <span className="text-primary mr-2">▹</span> {tech}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
