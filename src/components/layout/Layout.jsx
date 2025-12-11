import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
    return (
        <div className="flex min-h-screen bg-light">
            <Sidebar />
            <main className="flex-1 w-full md:ml-64 relative bg-light transition-all duration-300">
                {/* Added top padding for mobile to account for fixed header */}
                <div className="pt-16 md:pt-0">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default Layout;
