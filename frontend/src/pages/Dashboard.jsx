import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Cell
} from 'recharts';
import { Users, DollarSign, TrendingUp, Globe, FileText, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { dashboardStats, growthData, categoryDistribution, topCountries } from '../services/mockData';

const StatCard = ({ item }) => {
  const isPositive = item.trend.startsWith('+');
  return (
    <div className="stat-card">
      <div className="flex justify-between items-start mb-4">
        <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
          {item.label === 'Total Startups' && <Users className="text-primary w-5 h-5" />}
          {item.label === 'Total Funding' && <DollarSign className="text-primary w-5 h-5" />}
          {item.label === 'AI Tool Categories' && <TrendingUp className="text-primary w-5 h-5" />}
          {item.label === 'Success Rate' && <Globe className="text-primary w-5 h-5" />}
        </div>
        <div className={`flex items-center gap-1 text-xs font-bold ${isPositive ? 'text-emerald-500' : 'text-rose-500'}`}>
          {isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
          {item.trend}
        </div>
      </div>
      <p className="text-xs text-muted font-medium uppercase tracking-wider mb-1">{item.label}</p>
      <h3 className="text-2xl font-bold">{item.value}</h3>
    </div>
  );
};

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-2xl font-bold">Analytics Overview</h2>
          <p className="text-sm text-muted">A summary of the current AI startup ecosystem.</p>
        </div>
        <div className="text-xs text-muted bg-card px-3 py-1.5 rounded-lg border border-card-border">
          Last updated: 11 May 2026, 22:45
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} item={stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 dashboard-card">
          <div className="flex justify-between items-center mb-6">
             <h3 className="text-lg font-bold">Funding Growth Trend</h3>
             <select className="bg-background border border-card-border rounded-lg px-2 py-1 text-[10px] outline-none">
                <option>Last 12 Months</option>
                <option>Last 6 Months</option>
             </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="month" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #334155', borderRadius: '8px' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="funding" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorFunding)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="colorFunding" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="dashboard-card">
          <h3 className="text-lg font-bold mb-6">Regional Distribution</h3>
          <div className="space-y-4">
            {topCountries.map((c) => (
              <div key={c.country}>
                <div className="flex justify-between items-center mb-2">
                   <div className="flex items-center gap-2">
                     <span>{c.flag}</span>
                     <span className="text-sm font-medium">{c.country}</span>
                   </div>
                   <span className="text-xs text-muted">{c.startups}</span>
                </div>
                <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                   <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${(c.startups / 4500) * 100}%` }}
                    className="h-full bg-primary"
                   />
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-2 text-xs font-medium border border-card-border rounded-lg hover:bg-white/5 transition-colors">
            View Regional Map
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="dashboard-card">
           <div className="flex items-center gap-2 mb-4">
              <FileText className="text-primary w-5 h-5" />
              <h3 className="text-lg font-bold">Recent Insights</h3>
           </div>
           <div className="space-y-3">
              {[
                "Generative AI tools saw a 45% increase in funding this quarter.",
                "Market gap detected in AI-driven compliance for European markets.",
                "US-based startups continue to lead in LLM infrastructure.",
                "Average success rate for AI agents remains stable at 68%."
              ].map((insight, i) => (
                <div key={i} className="flex gap-3 p-3 rounded-lg bg-white/5 border border-white/5 text-sm text-slate-300">
                   <div className="w-1 h-full bg-primary rounded-full shrink-0" />
                   {insight}
                </div>
              ))}
           </div>
        </div>
        
        <div className="dashboard-card flex flex-col justify-center items-center text-center p-12 bg-primary/5">
           <h3 className="text-xl font-bold mb-2">Generate Report</h3>
           <p className="text-sm text-muted mb-6 max-w-sm">
             Download a comprehensive PDF report of the current market trends and analysis.
           </p>
           <button className="btn-primary">
             <FileText className="w-4 h-4" />
             Download PDF Report
           </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
