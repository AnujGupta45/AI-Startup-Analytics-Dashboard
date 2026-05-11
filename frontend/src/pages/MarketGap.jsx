import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Target, ArrowUpRight, AlertCircle } from 'lucide-react';

const MarketGap = () => {
  const gaps = [
    { 
      sector: 'AI for Legal Compliance', 
      opportunity: 'High', 
      description: 'Lack of tools specifically for EU AI Act compliance monitoring for SMEs.',
      potential: '$2.4B Market'
    },
    { 
      sector: 'Personalized AI Education', 
      opportunity: 'Medium-High', 
      description: 'Underserved market for AI tutors specialized in K-12 STEM subjects.',
      potential: '$1.8B Market'
    },
    { 
      sector: 'AI Hardware Optimization', 
      opportunity: 'High', 
      description: 'Efficiency tools for running LLMs on consumer-grade mobile devices.',
      potential: '$5.2B Market'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold font-['Outfit']">Market Gap Analysis</h2>
        <p className="text-gray-400">Identify underserved niches and emerging AI opportunities.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gaps.map((gap, i) => (
          <motion.div
            key={gap.sector}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 border-white/5 relative group"
          >
            <div className="absolute top-4 right-4 text-emerald-500 flex items-center gap-1 text-xs font-bold bg-emerald-500/10 px-2 py-1 rounded-full border border-emerald-500/20">
              <ArrowUpRight className="w-3 h-3" />
              {gap.opportunity}
            </div>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Lightbulb className="text-primary w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">{gap.sector}</h3>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              {gap.description}
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-xs font-bold text-gray-500 uppercase">Est. Market Size</span>
              <span className="font-bold text-primary">{gap.potential}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="glass-card p-8 border-white/5 bg-gradient-to-br from-violet-500/5 to-primary/5">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-3">
              <Target className="text-violet-500 w-6 h-6" />
              <h3 className="text-2xl font-bold">ML Prediction: "The Missing Product"</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Our analysis identifies a critical gap in <span className="text-white font-bold">Real-time AI Sentiment Correction</span> for customer support agents. Current tools provide analysis post-call, but live feedback loops are missing in 85% of platforms.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">#ProductOpportunity</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">#EmergingTech</span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">#SaaS</span>
            </div>
          </div>
          <div className="w-full md:w-64 glass-card p-6 bg-white/5 border-white/10 text-center space-y-2">
            <AlertCircle className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <p className="text-xs text-gray-500 uppercase font-bold">Confidence Score</p>
            <p className="text-4xl font-bold text-white">92%</p>
            <p className="text-[10px] text-gray-400">Based on 1.2M data points</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketGap;
