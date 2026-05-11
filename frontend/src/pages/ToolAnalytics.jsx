import React from 'react';
import { motion } from 'framer-motion';
import { toolAnalytics } from '../services/mockData';
import { Star, ExternalLink, ArrowRight, Zap } from 'lucide-react';

const ToolAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="space-y-12"
    >
      <header className="space-y-4">
        <h2 className="text-5xl font-bold tracking-tighter">AI Ecosystem Tools</h2>
        <p className="text-xl text-muted max-w-2xl">Benchmarking performance, sentiment, and capital efficiency across 40+ categories.</p>
      </header>

      <div className="bento-card overflow-x-auto p-0 border-white/5">
        <table className="w-full text-left border-collapse min-w-[1000px]">
          <thead>
            <tr className="border-b border-white/5">
              <th className="p-8 font-bold text-muted text-xs uppercase tracking-widest">Platform</th>
              <th className="p-8 font-bold text-muted text-xs uppercase tracking-widest">Model Type</th>
              <th className="p-8 font-bold text-muted text-xs uppercase tracking-widest">Monetization</th>
              <th className="p-8 font-bold text-muted text-xs uppercase tracking-widest text-right">Momentum</th>
              <th className="p-8 font-bold text-muted text-xs uppercase tracking-widest text-right">Aura Score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {toolAnalytics.map((tool, i) => (
              <motion.tr 
                key={tool.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="hover:bg-white/[0.02] transition-colors group"
              >
                <td className="p-8">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center font-bold text-white shadow-inner">
                      {tool.name[0]}
                    </div>
                    <div>
                      <span className="font-bold text-lg block">{tool.name}</span>
                      <span className="text-xs text-muted font-medium">v1.2.4 • Updated today</span>
                    </div>
                  </div>
                </td>
                <td className="p-8">
                  <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold text-white uppercase tracking-wider">
                    {tool.category}
                  </span>
                </td>
                <td className="p-8 text-muted font-medium">{tool.pricing}</td>
                <td className="p-8 text-right">
                  <div className="flex items-center justify-end gap-2 text-emerald-500 font-bold">
                    <Zap className="w-4 h-4 fill-emerald-500" />
                    {tool.traffic}
                  </div>
                </td>
                <td className="p-8 text-right">
                  <div className="flex items-center justify-end gap-4">
                    <div className="w-32 h-1.5 bg-white/5 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tool.sentiment}%` }}
                        className="h-full bg-gradient-to-r from-primary to-accent"
                       />
                    </div>
                    <span className="font-bold text-sm w-10">{tool.sentiment}</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="bento-card bg-gradient-to-br from-accent/10 to-transparent flex flex-col justify-between h-[300px]">
            <Star className="text-accent w-10 h-10 fill-accent/20" />
            <div className="space-y-4">
               <h3 className="text-3xl font-bold tracking-tighter">Community Favorite</h3>
               <p className="text-muted leading-relaxed">Midjourney remains the highest rated generative platform with a 4.9/5 sentiment score.</p>
               <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                  Analyze Breakdown <ArrowRight className="w-4 h-4" />
               </button>
            </div>
         </div>
         <div className="bento-card border-emerald-500/10 flex flex-col justify-between h-[300px]">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
               <TrendingUp className="text-emerald-500 w-6 h-6" />
            </div>
            <div className="space-y-4">
               <h3 className="text-3xl font-bold tracking-tighter">Rising Momentum</h3>
               <p className="text-muted leading-relaxed">Agentic workflows have seen a 450% increase in traffic since January 2026.</p>
               <button className="flex items-center gap-2 text-white font-bold hover:gap-4 transition-all">
                  View Heatmap <ArrowRight className="w-4 h-4" />
               </button>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default ToolAnalytics;
