import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, TrendingUp, BarChart, Globe, DollarSign } from 'lucide-react';

const Intelligence = () => {
  const topStartups = [
    { name: 'NeuralCore', funding: '$2.4B', growth: '+140%', sector: 'Hardware', status: 'Unicorn' },
    { name: 'SentientAI', funding: '$1.8B', growth: '+85%', sector: 'Agents', status: 'Series D' },
    { name: 'FlowState', funding: '$950M', growth: '+210%', sector: 'Productivity', status: 'Series C' },
    { name: 'DeepVision', funding: '$720M', growth: '+45%', sector: 'CV', status: 'Public' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold font-['Outfit']">Startup Intelligence</h2>
        <p className="text-gray-400">Deep insights into the fastest growing and most funded AI ventures.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-6 border-white/5">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Zap className="text-primary w-5 h-5" />
            Top Funded Startups (2026)
          </h3>
          <div className="space-y-4">
            {topStartups.map((s, i) => (
              <motion.div 
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold">
                    {s.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold">{s.name}</h4>
                    <p className="text-xs text-gray-500">{s.sector} • {s.status}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold text-primary">{s.funding}</p>
                  <p className="text-xs text-emerald-500 font-medium">{s.growth}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 border-white/5 bg-gradient-to-b from-primary/5 to-transparent">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Shield className="text-accent w-5 h-5" />
            Risk & Stability Index
          </h3>
          <div className="flex items-center justify-center h-64 relative">
             <div className="w-48 h-48 rounded-full border-8 border-white/5 flex items-center justify-center">
                <div className="text-center">
                   <p className="text-4xl font-bold">A+</p>
                   <p className="text-[10px] text-gray-500 uppercase tracking-widest">Market Health</p>
                </div>
             </div>
             {/* Decorative orbits */}
             <div className="absolute inset-0 border border-white/5 rounded-full scale-75 animate-[spin_20s_linear_infinite]"></div>
             <div className="absolute inset-0 border border-primary/20 rounded-full scale-90 animate-[spin_30s_linear_infinite_reverse]"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-8">
             <div className="text-center p-4 rounded-xl bg-white/5">
                <p className="text-2xl font-bold">14.2%</p>
                <p className="text-xs text-gray-500">Churn Rate</p>
             </div>
             <div className="text-center p-4 rounded-xl bg-white/5">
                <p className="text-2xl font-bold">4.8x</p>
                <p className="text-xs text-gray-500">Revenue Multiple</p>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
         {[
           { label: 'Burn Rate Avg', value: '$2.4M', icon: DollarSign, color: 'text-red-400' },
           { label: 'Headcount Growth', value: '45%', icon: Globe, color: 'text-blue-400' },
           { label: 'Acquisition Vol', value: '12', icon: BarChart, color: 'text-violet-400' },
           { label: 'Market Cap Total', value: '$450B', icon: TrendingUp, color: 'text-emerald-400' },
         ].map((stat, i) => (
           <div key={stat.label} className="glass-card p-6 border-white/5 flex flex-col items-center text-center space-y-2">
              <stat.icon className={`${stat.color} w-8 h-8 mb-2`} />
              <p className="text-xs text-gray-500 font-bold uppercase">{stat.label}</p>
              <p className="text-2xl font-bold">{stat.value}</p>
           </div>
         ))}
      </div>
    </motion.div>
  );
};

export default Intelligence;
