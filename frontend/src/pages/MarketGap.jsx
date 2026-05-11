import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, ArrowUpRight, ShieldCheck, AlertCircle } from 'lucide-react';

const MarketGap = () => {
  const gaps = [
    { 
      sector: 'AI for Legal Compliance', 
      opportunity: '9.8', 
      description: 'Significant lack of automated tools for monitoring EU AI Act compliance in small enterprises.',
      tag: 'Critical Gap'
    },
    { 
      sector: 'Edge AI Optimization', 
      opportunity: '8.5', 
      description: 'High demand for efficient hardware-aware models for consumer electronics.',
      tag: 'Trending'
    },
    { 
      sector: 'Specialized Bio-AI', 
      opportunity: '9.2', 
      description: 'Research indicates a gap in protein folding prediction platforms with integrated wet-lab APIs.',
      tag: 'High Growth'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-8"
    >
      <header>
        <h2 className="text-2xl font-bold">Market Opportunity Analysis</h2>
        <p className="text-sm text-muted">Identifying underserved AI categories based on recent market data.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gaps.map((gap, i) => (
          <div key={gap.sector} className="dashboard-card flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <span className="px-2 py-1 rounded bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-wider">
                  {gap.tag}
                </span>
                <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-bold">{gap.sector}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {gap.description}
              </p>
            </div>
            
            <div className="mt-8 pt-6 border-t border-card-border">
               <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] font-bold text-muted uppercase">Opportunity Index</span>
                  <span className="text-2xl font-bold text-primary">{gap.opportunity}</span>
               </div>
               <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: `${parseFloat(gap.opportunity) * 10}%` }} />
               </div>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card bg-slate-800/20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-amber-500 font-bold text-xs uppercase tracking-widest">
              <AlertCircle className="w-4 h-4" />
              Key Researcher Finding
            </div>
            <h3 className="text-3xl font-bold">The Next Big Sector</h3>
            <p className="text-slate-400 leading-relaxed">
              Our regression model indicates that **Decentralized AI Training** infrastructure will be the most underserved market segment in the coming year.
            </p>
            <div className="flex gap-4">
               <button className="btn-primary">View Statistical Model</button>
               <button className="btn-outline">Download Full Study</button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-card border border-card-border rounded-xl p-6 text-center space-y-1">
                <ShieldCheck className="text-emerald-500 w-6 h-6 mx-auto mb-2" />
                <p className="text-2xl font-bold">94%</p>
                <p className="text-[10px] text-muted uppercase font-bold tracking-widest">Prediction Accuracy</p>
             </div>
             <div className="bg-card border border-card-border rounded-xl p-6 text-center space-y-1">
                <Target className="text-primary w-6 h-6 mx-auto mb-2" />
                <p className="text-2xl font-bold">Low</p>
                <p className="text-[10px] text-muted uppercase font-bold tracking-widest">Market Saturation</p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketGap;
