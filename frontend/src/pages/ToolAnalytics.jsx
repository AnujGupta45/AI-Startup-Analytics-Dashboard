import React from 'react';
import { motion } from 'framer-motion';
import { toolAnalytics } from '../services/mockData';
import { Star, TrendingUp, Users, ExternalLink } from 'lucide-react';

const ToolAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold font-['Outfit']">AI Tool Analytics</h2>
        <p className="text-gray-400">Deep dive into pricing, traffic, and user sentiment.</p>
      </header>

      <div className="grid grid-cols-1 gap-6">
        <div className="glass-card overflow-hidden border-white/5">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-white/5">
                <th className="p-4 font-bold text-gray-400 text-sm uppercase">Tool Name</th>
                <th className="p-4 font-bold text-gray-400 text-sm uppercase">Category</th>
                <th className="p-4 font-bold text-gray-400 text-sm uppercase">Pricing</th>
                <th className="p-4 font-bold text-gray-400 text-sm uppercase">Monthly Traffic</th>
                <th className="p-4 font-bold text-gray-400 text-sm uppercase">Rating</th>
                <th className="p-4 font-bold text-gray-400 text-sm uppercase">Sentiment Score</th>
                <th className="p-4 font-bold text-gray-400 text-sm uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {toolAnalytics.map((tool, i) => (
                <motion.tr 
                  key={tool.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="hover:bg-white/5 transition-colors group"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-primary">
                        {tool.name[0]}
                      </div>
                      <span className="font-bold">{tool.name}</span>
                    </div>
                  </td>
                  <td className="p-4 text-gray-300">
                    <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs text-primary">
                      {tool.category}
                    </span>
                  </td>
                  <td className="p-4 text-gray-300">{tool.pricing}</td>
                  <td className="p-4 font-medium">{tool.traffic}</td>
                  <td className="p-4">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-amber-500" />
                      <span className="font-bold">{tool.rating}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex-1 min-w-[60px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-emerald-500" style={{ width: `${tool.sentiment}%` }} />
                      </div>
                      <span className="text-xs font-bold text-emerald-500">{tool.sentiment}%</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <button className="p-2 rounded-lg hover:bg-primary/20 text-gray-400 hover:text-primary transition-all">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card p-6 border-white/5 space-y-4">
           <div className="flex items-center gap-3 mb-2">
             <TrendingUp className="text-primary w-5 h-5" />
             <h4 className="font-bold">Trending Category</h4>
           </div>
           <p className="text-2xl font-bold font-['Outfit']">Coding Assistants</p>
           <p className="text-sm text-gray-400">Traffic up 45% month-over-month in this sector.</p>
        </div>
        <div className="glass-card p-6 border-white/5 space-y-4">
           <div className="flex items-center gap-3 mb-2">
             <Star className="text-amber-500 w-5 h-5" />
             <h4 className="font-bold">User Choice</h4>
           </div>
           <p className="text-2xl font-bold font-['Outfit']">Midjourney</p>
           <p className="text-sm text-gray-400">Highest satisfaction rating among image generation tools.</p>
        </div>
        <div className="glass-card p-6 border-white/5 space-y-4">
           <div className="flex items-center gap-3 mb-2">
             <Users className="text-violet-500 w-5 h-5" />
             <h4 className="font-bold">Enterprise Pick</h4>
           </div>
           <p className="text-2xl font-bold font-['Outfit']">GitHub Copilot</p>
           <p className="text-sm text-gray-400">92% of Fortune 500 companies analyzed use Copilot.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolAnalytics;
