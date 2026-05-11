import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, ArrowUpRight, ShieldAlert, Sparkles } from 'lucide-react';

const MarketGap = () => {
  const gaps = [
    { 
      sector: 'Regulatory Tech', 
      opportunity: '9.8', 
      description: 'AI-driven compliance for the EU AI Act is currently underserved in the SME sector.',
      tag: 'Urgent'
    },
    { 
      sector: 'Edge Computing', 
      opportunity: '8.5', 
      description: 'Hardware-aware model optimization for low-power consumer devices.',
      tag: 'Trending'
    },
    { 
      sector: 'Bio-Intelligence', 
      opportunity: '9.2', 
      description: 'Generative protein design platforms with built-in lab validation loops.',
      tag: 'High Potential'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-16"
    >
      <header className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-16 h-16 rounded-3xl bg-primary/20 flex items-center justify-center border border-primary/30"
        >
          <Lightbulb className="text-primary w-8 h-8 fill-primary/20" />
        </motion.div>
        <h2 className="text-6xl font-bold tracking-tighter leading-tight">
          Market Gap <span className="text-muted italic">Analysis</span>
        </h2>
        <p className="text-xl text-muted leading-relaxed">
          We use proprietary ML models to identify underserved sectors where demand significantly outpaces existing supply.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {gaps.map((gap, i) => (
          <motion.div
            key={gap.sector}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bento-card group flex flex-col justify-between h-[450px]"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-muted group-hover:text-white transition-colors">
                  {gap.tag}
                </span>
                <ArrowUpRight className="w-6 h-6 text-muted group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </div>
              <h3 className="text-4xl font-bold font-['Outfit'] tracking-tight leading-none">{gap.sector}</h3>
              <p className="text-muted leading-relaxed">
                {gap.description}
              </p>
            </div>
            
            <div className="space-y-2">
               <div className="flex justify-between items-end">
                  <span className="text-xs font-bold text-muted uppercase">Opportunity Index</span>
                  <span className="text-5xl font-black text-white tracking-tighter">{gap.opportunity}</span>
               </div>
               <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${parseFloat(gap.opportunity) * 10}%` }}
                    className="h-full bg-primary"
                  />
               </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bento-card relative overflow-hidden p-16">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-center gap-3 text-primary font-bold tracking-widest text-xs uppercase">
              <Sparkles className="w-4 h-4 fill-primary" />
              Intelligence Prediction
            </div>
            <h3 className="text-5xl font-bold tracking-tighter leading-tight">
              The "Hidden" <br />Unicorn Sector
            </h3>
            <p className="text-muted text-lg leading-relaxed">
              Our data predicts that <span className="text-white font-bold underline decoration-primary underline-offset-4">Decentralized AI Inference</span> will be the single most profitable niche in 2027. Infrastructure projects here are seeing 12x organic developer growth.
            </p>
            <button className="premium-button">View Full Research</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center space-y-2">
                <Target className="text-primary w-8 h-8 mb-2" />
                <p className="text-3xl font-bold">94%</p>
                <p className="text-[10px] text-muted uppercase font-bold tracking-widest">Confidence</p>
             </div>
             <div className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col items-center text-center space-y-2">
                <ShieldAlert className="text-accent w-8 h-8 mb-2" />
                <p className="text-3xl font-bold">Low</p>
                <p className="text-[10px] text-muted uppercase font-bold tracking-widest">Competition</p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketGap;
