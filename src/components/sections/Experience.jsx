import React, { useState } from 'react';
import { motion } from 'framer-motion';

const experiences = [
    {
        company: "Lanka DealPartner (PVT) LTD",
        role: "Associate Software Engineer",
        period: "Oct 2025 – Present",
        description: [
            "Designed and maintained scalable web applications using React.js and Node.js.",
            "Built and integrated RESTful APIs using Express.js.",
            "Implemented authentication, authorization, and role-based access control.",
            "Optimized application performance and improved load times.",
            "Worked with MongoDB and MySQL for efficient data management.",
            "Deployed applications using AWS, Vercel, and Netlify."
        ]
    },
    {
        company: "Lanka DealPartner (PVT) LTD",
        role: "Software Engineering Intern",
        period: "Apr 2025 – Oct 2025",
        description: [
            "Developed responsive user interfaces using React.js to improve user engagement and usability.",
            "Collaborated with UI/UX designers to implement modern and intuitive designs with cross-browser compatibility.",
            "Used Git for version control and actively participated in Agile development cycles.",
            "Worked with Next.js and Vue.js focusing on component-based architecture and performance."
        ]
    },
    {
        company: "PC AC Cooltech",
        role: "Data Entry Operator",
        period: "Jan 2019 – Jan 2021",
        description: [
            "Managed and processed high volumes of data with exceptional accuracy.",
            "Contributed to the operational efficiency of the company’s online platform.",
            "Ensured data integrity and organized records for easy retrieval."
        ]
    }
];

const Experience = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section id="experience" className="py-20 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center">
                    <span className="text-primary mr-4 text-3xl">03.</span> Where I've Worked
                </h2>

                <div className="flex flex-col md:flex-row gap-8">
                    {/* Tabs */}
                    <div className="flex md:flex-col overflow-x-auto md:min-w-[200px] border-b md:border-b-0 md:border-l border-gray-200">
                        {experiences.map((exp, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`py-3 px-4 text-left whitespace-nowrap transition-colors duration-300 hover:bg-gray-50 hover:text-primary 
                  ${activeTab === index ? 'text-primary border-b-2 md:border-b-0 md:border-l-2 border-primary -mb-[2px] md:-mb-0 md:-ml-[2px] bg-gray-50' : 'text-gray-500'}`}
                            >
                                {exp.company}
                            </button>
                        ))}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-h-[300px]">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="text-xl font-bold text-gray-800">
                                {experiences[activeTab].role} <span className="text-primary">@ {experiences[activeTab].company}</span>
                            </h3>
                            <p className="font-mono text-sm text-gray-500 mb-6 mt-1">
                                {experiences[activeTab].period}
                            </p>
                            <ul className="space-y-4">
                                {experiences[activeTab].description.map((item, i) => (
                                    <li key={i} className="flex items-start text-gray-600 leading-relaxed">
                                        <span className="text-primary mr-3 mt-1">▹</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Experience;
