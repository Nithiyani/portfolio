import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        title: "Ruby Beauty Parlour System",
        description: "Full-Stack Booking System engineered using the MERN stack. Streamlined appointment scheduling with secure JWT authentication and role-based access control.",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        github: "#",
        external: "#",
    },
    {
        title: "Event Management System",
        description: "Automated event registration and management using PHP and MySQL. Designed a user-friendly interface with Bootstrap for attendee tracking.",
        tech: ["PHP", "MySQL", "Bootstrap"],
        github: "#",
        external: "#",
    },
    {
        title: "UI/UX Research Project",
        description: "Final year research investigating the impact of UI/UX enhancements on user engagement for e-learning platforms targeting rural communities.",
        tech: ["Research", "UI/UX", "Analysis"],
        github: "#",
        external: "#",
    }
];

const Works = () => {
    return (
        <section id="works" className="py-20 max-w-5xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center">
                    <span className="text-primary mr-4 text-3xl">04.</span> Academic Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -10 }}
                            className="bg-white p-6 rounded-lg shadow-lg border border-gray-100 group hover:shadow-xl transition-all duration-300 flex flex-col"
                        >
                            <div className="flex justify-between items-center mb-4">
                                <div className="text-primary text-4xl">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                                    </svg>
                                </div>
                                <div className="flex space-x-4 text-gray-600">
                                    <a href={project.github} className="hover:text-primary transition-colors"><FaGithub size={20} /></a>
                                    <a href={project.external} className="hover:text-primary transition-colors"><FaExternalLinkAlt size={18} /></a>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                            <p className="text-gray-600 mb-4 text-sm leading-relaxed flex-grow">{project.description}</p>
                            <ul className="flex flex-wrap gap-2 text-xs font-mono text-gray-500 mt-4">
                                {project.tech.map(t => <span key={t} className="mr-2">{t}</span>)}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Works;
