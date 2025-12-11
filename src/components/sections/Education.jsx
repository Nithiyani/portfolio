import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section id="education" className="py-20 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
            >
                <h2 className="text-4xl md:text-5xl font-bold mb-12 flex items-center">
                    <span className="text-primary mr-4 text-3xl">02.</span> Education
                </h2>

                <div className="space-y-12">
                    {/* Degree */}
                    <div className="relative border-l-2 border-gray-200 pl-8 ml-2">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                        <h3 className="text-2xl font-bold text-gray-800">Bachelor of Industrial Information Technology (BIIT)</h3>
                        <h4 className="text-xl text-primary font-medium mt-1">Uva Wellassa University of Sri Lanka</h4>
                        <p className="font-mono text-sm text-gray-500 mb-4">2021 – Present</p>
                        <ul className="list-none space-y-2 text-gray-600">
                            <li className="flex items-start"><span className="text-primary mr-2">▹</span> Dean’s List Awardee for consistent academic excellence.</li>
                            <li className="flex items-start"><span className="text-primary mr-2">▹</span> Relevant Coursework: Web Development, Software Engineering, DBMS, UI/UX Design.</li>
                        </ul>
                    </div>

                    {/* AAT */}
                    <div className="relative border-l-2 border-gray-200 pl-8 ml-2">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                        <h3 className="text-2xl font-bold text-gray-800">AAT (Association of Accounting Technicians)</h3>
                        <p className="font-mono text-sm text-gray-500 mb-4">Following 2020</p>
                        <p className="text-gray-600">Financial Accounting, Management Accounting, Business Finance Taxation.</p>
                    </div>

                    {/* A Levels */}
                    <div className="relative border-l-2 border-gray-200 pl-8 ml-2">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
                        <h3 className="text-2xl font-bold text-gray-800">G.C.E Advanced Level</h3>
                        <h4 className="text-xl text-gray-600 font-medium mt-1">V/Rambai Kulam Girls’ Maha Vidyalaya</h4>
                        <p className="font-mono text-sm text-gray-500 mb-4">2019</p>
                        <p className="text-gray-600">Results: A (ICT), B (Economics), S (Accounting)</p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Education;
