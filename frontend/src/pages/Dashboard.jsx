import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { TrendingUp, Users, DollarSign, Globe, ArrowUpRight, Zap } from 'lucide-react';
import { dashboardStats, growthData, categoryDistribution, topCountries } from '../services/mockData';

const Dashboard = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', damping: 25, stiffness: 100 } }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="space-y-12"
    >
      <header className="flex flex-col gap-4 text-center max-w-2xl mx-auto mb-16">
        <motion.div variants={item} className="w-fit mx-auto px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary tracking-widest uppercase flex items-center gap-2">
          <Zap className="w-3 h-3 fill-primary" />
          Intelligence Platform v4.0
        </motion.div>
        <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
          Analyze the <span className="text-muted">Future</span> of AI.
        </motion.h1>
        <motion.p variants={item} className="text-xl text-muted leading-relaxed">
          The ultimate engine for startup intelligence and ecosystem analytics.
        </motion.p>
      </header>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[200px]">
        
        {/* Main Growth Chart */}
        <motion.div variants={item} className="md:col-span-8 md:row-span-2 bento-card flex flex-col">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-2xl font-bold font-['Outfit']">Funding Velocity</h3>
              <p className="text-sm text-muted">Capital deployment across AI sectors.</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs">Real-time</span>
              <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/30 text-xs text-primary font-bold">+24%</span>
            </div>
          </div>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorFunding" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" hide />
                <YAxis hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#000', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '16px', backdropFilter: 'blur(10px)' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="funding" 
                  stroke="#3b82f6" 
                  strokeWidth={4}
                  fillOpacity={1} 
                  fill="url(#colorFunding)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Stats 1 */}
        <motion.div variants={item} className="md:col-span-4 md:row-span-1 bento-card bg-gradient-to-br from-primary/10 to-transparent flex flex-col justify-between">
          <Users className="w-8 h-8 text-primary" />
          <div>
            <p className="text-sm text-muted mb-1 font-medium">Total Startups</p>
            <h3 className="text-4xl font-bold tracking-tighter">12,450</h3>
          </div>
        </motion.div>

        {/* Stats 2 */}
        <motion.div variants={item} className="md:col-span-4 md:row-span-1 bento-card flex flex-col justify-between group">
          <div className="flex justify-between">
            <DollarSign className="w-8 h-8 text-accent" />
            <ArrowUpRight className="w-5 h-5 text-muted group-hover:text-white transition-colors" />
          </div>
          <div>
            <p className="text-sm text-muted mb-1 font-medium">Capital Raised</p>
            <h3 className="text-4xl font-bold tracking-tighter">$84.2B</h3>
          </div>
        </motion.div>

        {/* Market Share */}
        <motion.div variants={item} className="md:col-span-4 md:row-span-2 bento-card flex flex-col">
          <h3 className="text-xl font-bold mb-6">Market Share</h3>
          <div className="flex-1 min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ backgroundColor: '#000', borderRadius: '12px', border: 'none' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4">
             {categoryDistribution.slice(0, 4).map(c => (
               <div key={c.name} className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full" style={{ backgroundColor: c.color }} />
                 <span className="text-[10px] text-muted uppercase font-bold truncate">{c.name}</span>
               </div>
             ))}
          </div>
        </motion.div>

        {/* Global Hubs */}
        <motion.div variants={item} className="md:col-span-8 md:row-span-2 bento-card">
           <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold font-['Outfit']">Global Ecosystems</h3>
              <Globe className="text-muted w-6 h-6" />
           </div>
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
             {topCountries.map((c, i) => (
               <div key={c.country} className="space-y-3">
                 <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                       <span className="text-xl">{c.flag}</span>
                       <span className="font-bold">{c.country}</span>
                    </div>
                    <span className="text-sm font-medium text-muted">{c.startups}</span>
                 </div>
                 <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(c.startups / 4500) * 100}%` }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: 'circOut' }}
                      className="h-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                    />
                 </div>
               </div>
             ))}
           </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div 
        variants={item}
        className="bento-card bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 p-12 text-center flex flex-col items-center justify-center space-y-6"
      >
        <h2 className="text-4xl font-bold tracking-tighter">Ready to outpace the market?</h2>
        <p className="text-lg text-white/60 max-w-xl">
          Get deeper insights, custom ML reports, and early-stage alerts delivered to your workspace.
        </p>
        <div className="flex gap-4">
          <button className="premium-button">Start Free Trial</button>
          <button className="px-6 py-2.5 rounded-full font-medium border border-white/10 hover:bg-white/5 transition-all">Talk to Sales</button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Dashboard;
