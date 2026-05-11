import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Bot, Sparkles, Command } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: "I'm Aura. Your AI copilot for ecosystem intelligence. Ask me anything about startups, funding, or market gaps." }
  ]);
  const [input, setInput] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');

    setTimeout(() => {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: `Scanning the network for "${input}"... Analyzing growth vectors... I recommend looking into the Series A trends in this sector.` 
      }]);
    }, 1200);
  };

  return (
    <>
      <div className="fixed bottom-10 right-10 z-[100]">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-3 bg-white text-black px-6 py-3 rounded-full font-bold shadow-[0_20px_40px_rgba(255,255,255,0.15)] hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="w-5 h-5 fill-black" />
          <span>Ask Aura</span>
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/10 text-[10px] ml-2">
            <Command className="w-2.5 h-2.5" />
            <span>K</span>
          </div>
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl bg-secondary border border-white/10 rounded-[2.5rem] shadow-[0_0_100px_-20px_rgba(59,130,246,0.3)] flex flex-col overflow-hidden"
            >
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <Bot className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-['Outfit']">Aura Intelligence</h3>
                    <p className="text-sm text-muted">AI Copilot • Online</p>
                  </div>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-3 rounded-full hover:bg-white/5 text-muted hover:text-white transition-all">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-6 min-h-[400px] max-h-[500px] scrollbar-thin">
                {messages.map((msg, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-[85%] p-5 rounded-[2rem] text-base leading-relaxed ${
                      msg.role === 'user' 
                        ? 'bg-primary text-white rounded-tr-none shadow-xl shadow-primary/20' 
                        : 'bg-white/5 text-gray-200 rounded-tl-none border border-white/5'
                    }`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 bg-black/20 border-t border-white/5">
                <form onSubmit={handleSend} className="relative group">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type your command..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-6 pr-16 py-5 outline-none focus:border-primary/50 focus:ring-4 focus:ring-primary/10 transition-all text-lg"
                    autoFocus
                  />
                  <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white text-black rounded-xl hover:scale-105 transition-transform shadow-lg">
                    <Send className="w-5 h-5" />
                  </button>
                </form>
                <div className="mt-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                   {['Trending sectors?', 'Funding in AI agents?', 'Market gap analysis'].map(tag => (
                     <button key={tag} className="whitespace-nowrap px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-muted hover:text-white hover:border-white/20 transition-all">
                       {tag}
                     </button>
                   ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AIChatbot;
