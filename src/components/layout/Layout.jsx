import { motion, useScroll, useSpring } from 'framer-motion';
import Sidebar from './Sidebar';
import Chatbot from '../ui/Chatbot';

const Layout = ({ children }) => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="flex min-h-screen bg-light">
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-50"
                style={{ scaleX }}
            />
            <Sidebar />
            <main className="flex-1 w-full md:ml-64 relative bg-light transition-all duration-300">
                {/* Added top padding for mobile to account for fixed header */}
                <div className="pt-16 md:pt-0">
                    {children}
                </div>
            </main>

            <Chatbot />
        </div >
    );
};

export default Layout;
