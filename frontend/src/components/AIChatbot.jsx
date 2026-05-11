import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hello! I am Aura, your AI startup assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: `Analyzing data for "${input}"... Based on current trends, that sector is seeing a 24% increase in VC interest.` 
      }]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="glass-card w-80 md:w-96 h-[500px] mb-4 border-white/10 flex flex-col overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
          >
            <div className="p-4 bg-primary/20 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Bot className="text-primary w-5 h-5" />
                <span className="font-bold">Aura AI Assistant</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-none' 
                      : 'bg-white/10 text-gray-200 rounded-tl-none border border-white/5'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSend} className="p-4 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask Aura anything..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm outline-none focus:border-primary/50"
              />
              <button type="submit" className="p-2 bg-primary rounded-xl hover:scale-105 transition-transform">
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.5)] hover:scale-110 transition-all group"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
      </button>
    </div>
  );
};

export default AIChatbot;
