
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaRobot, FaTimes, FaPaperPlane, FaUser } from 'react-icons/fa';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { portfolioData } from '../../data/portfolioData';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi! I'm Nithiyani's AI assistant. Ask me anything about her skills, experience, or projects!" }
    ]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const [genAI, setGenAI] = useState(null);
    const [model, setModel] = useState(null);

    useEffect(() => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
        console.log("API Key loaded:", apiKey ? "Yes" : "No", apiKey?.slice(0, 10) + "...");
        if (apiKey) {
            const ai = new GoogleGenerativeAI(apiKey);
            setGenAI(ai);
            const mdl = ai.getGenerativeModel({ model: "gemini-pro" });
            setModel(mdl);
        } else {
            console.log("No API Key found. Chatbot starting in Offline Mode.");
        }
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    const getFallbackResponse = (query) => {
        const lowerQuery = query.toLowerCase();
        const { personal, skills, experience, projects, education } = portfolioData;

        if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('stack')) {
            return `Nithiyani is proficient in: ${skills.join(', ')}.`;
        }
        if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
            return `She has worked at ${experience.map(e => `${e.company} as a ${e.role}`).join(' and ')}.`;
        }
        if (lowerQuery.includes('project')) {
            return `Some of her key projects include: ${projects.map(p => p.title).join(', ')}.`;
        }
        if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('phone')) {
            return `You can reach her at ${personal.email} or ${personal.phone}.`;
        }
        if (lowerQuery.includes('education') || lowerQuery.includes('study') || lowerQuery.includes('degree')) {
            return `She is studying for a ${education[0].degree} at ${education[0].institution}.`;
        }
        if (lowerQuery.includes('who') || lowerQuery.includes('about') || lowerQuery.includes('nithiyani')) {
            return personal.summary;
        }

        return "I'm currently in offline mode and can only answer basic questions about skills, experience, projects, and contact info.";
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading) return;

        const userMessage = inputValue.trim();
        setMessages(prev => [...prev, { type: 'user', text: userMessage }]);
        setInputValue('');
        setIsLoading(true);

        try {
            if (!model) throw new Error("Model not initialized");

            const prompt = `
            You are an AI assistant for Nithiyani Jenova's portfolio website. 
            Here is the context about her: ${JSON.stringify(portfolioData)}. 
            
            Instructions:
            - Answer questions based ONLY on this context. 
            - Be professional, friendly, and concise.
            - If the answer isn't in the context, say "I don't have that information, but you can contact Nithiyani directly."
            - Act as if you are representing her.
            
            User Question: ${userMessage}
            `;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const text = response.text();

            setMessages(prev => [...prev, { type: 'bot', text: text }]);
        } catch (error) {
            console.error("Chat Error (Falling back to local):", error);
            // Fallback to local logic
            const fallbackText = getFallbackResponse(userMessage);
            setMessages(prev => [...prev, { type: 'bot', text: fallbackText }]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Toggle Button */}
            <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 bg-primary text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
            >
                {isOpen ? <FaTimes size={24} /> : <FaRobot size={24} />}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-2xl shadow-2xl z-50 overflow-hidden border border-gray-100 flex flex-col max-h-[500px]"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 text-white flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                                <FaRobot />
                                <span className="font-bold">Portfolio Assistant</span>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 h-80">
                            {messages.map((msg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div
                                        className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.type === 'user'
                                            ? 'bg-primary text-white rounded-br-none'
                                            : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-none'
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-200 p-2 rounded-xl rounded-bl-none animate-pulse">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-100 flex items-center space-x-2">
                            <input
                                type="text"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                placeholder="Type a message..."
                                className="flex-1 p-2 border border-gray-200 rounded-lg focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary text-sm text-black"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                type="submit"
                                disabled={isLoading || !inputValue.trim()}
                                className="p-2 bg-primary text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <FaPaperPlane />
                            </motion.button>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
