import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaFigma, FaTrello } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiMysql, SiAdobexd, SiJira } from 'react-icons/si';

const skills = [
    { name: 'Next.js', icon: <SiNextdotjs />, level: 90 },
    { name: 'React.js', icon: <FaReact />, level: 95 },
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'Express.js', icon: <SiExpress />, level: 80 },
    { name: 'REST APIs', icon: <FaDatabase />, level: 85 },
    { name: 'MySQL', icon: <SiMysql />, level: 75 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'Jira / Trello', icon: <SiJira />, level: 90 },
    { name: 'Figma / XD', icon: <FaFigma />, level: 85 },
];

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

                        <h3 className="text-2xl font-bold text-gray-800 mt-10 mb-6">Technologies & Tools</h3>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                                >
                                    <div className="flex items-center mb-3 text-gray-700">
                                        <span className="text-2xl text-primary mr-3">{skill.icon}</span>
                                        <span className="font-medium">{skill.name}</span>
                                        <span className="ml-auto text-xs font-mono text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-100 rounded-full h-1.5 overflow-hidden">
                                        <motion.div
                                            className="bg-primary h-1.5 rounded-full"
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                            viewport={{ once: true }}
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default About;
