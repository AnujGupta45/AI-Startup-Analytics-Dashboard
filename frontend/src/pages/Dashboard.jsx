import React from 'react';
import { motion } from 'framer-motion';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, Legend
} from 'recharts';
import { TrendingUp, Users, DollarSign, Globe } from 'lucide-react';
import { dashboardStats, growthData, categoryDistribution, topCountries } from '../services/mockData';

const StatCard = ({ item, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="glass-card p-6 border-white/5 relative overflow-hidden group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-xl bg-${item.color}-500/10 border border-${item.color}-500/20`}>
        {item.label === 'Total Startups' && <Users className={`text-${item.color}-500 w-6 h-6`} />}
        {item.label === 'Total Funding' && <DollarSign className={`text-${item.color}-500 w-6 h-6`} />}
        {item.label === 'AI Tool Categories' && <TrendingUp className={`text-${item.color}-500 w-6 h-6`} />}
        {item.label === 'Success Rate' && <Globe className={`text-${item.color}-500 w-6 h-6`} />}
      </div>
      <span className="text-emerald-500 text-sm font-bold">{item.trend}</span>
    </div>
    <p className="text-gray-400 text-sm mb-1">{item.label}</p>
    <h3 className="text-2xl font-bold font-['Outfit']">{item.value}</h3>
    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-${item.color}-500/0 via-${item.color}-500/50 to-${item.color}-500/0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold font-['Outfit']">Ecosystem Overview</h2>
        <p className="text-gray-400">Real-time intelligence on the AI startup landscape.</p>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((stat, i) => (
          <StatCard key={stat.label} item={stat} index={i} />
        ))}
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 border-white/5 min-h-[400px]">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            Funding & Growth Trends
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={growthData}>
                <defs>
                  <linearGradient id="colorFunding" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff05" vertical={false} />
                <XAxis dataKey="month" stroke="#ffffff50" axisLine={false} tickLine={false} />
                <YAxis stroke="#ffffff50" axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="funding" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorFunding)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="glass-card p-6 border-white/5">
          <h3 className="text-xl font-bold mb-6">Market Share</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                   contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Legend layout="vertical" verticalAlign="middle" align="right" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="glass-card p-6 border-white/5">
          <h3 className="text-xl font-bold mb-6">Global AI Hubs</h3>
          <div className="space-y-4">
            {topCountries.map((c, i) => (
              <div key={c.country} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{c.flag}</span>
                  <span className="font-medium text-gray-300 group-hover:text-white transition-colors">{c.country}</span>
                </div>
                <div className="flex items-center gap-4 flex-1 max-w-[200px]">
                  <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(c.startups / 4500) * 100}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <span className="text-sm font-bold w-12 text-right">{c.startups}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-6 border-white/5 flex flex-col justify-center items-center text-center space-y-4 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
            <TrendingUp className="text-primary w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold">Predictive Growth</h3>
          <p className="text-gray-400 max-w-xs">
            Our ML model predicts a <span className="text-primary font-bold">34% increase</span> in AI automation startups by Q4 2026.
          </p>
          <button className="glass-button bg-primary/20 border-primary/30 text-primary font-bold hover:bg-primary hover:text-white">
            View Forecast Report
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;
