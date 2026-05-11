import React from 'react';
import { motion } from 'framer-motion';
import { toolAnalytics } from '../services/mockData';
import { Star, ExternalLink, Download, Search } from 'lucide-react';

const ToolAnalytics = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold">AI Tool Comparative Analysis</h2>
          <p className="text-sm text-muted">A data-driven comparison of top AI tools across different metrics.</p>
        </div>
        <button className="btn-outline">
          <Download className="w-4 h-4" />
          Export Dataset
        </button>
      </div>

      <div className="dashboard-card p-0 overflow-hidden">
        <div className="p-4 border-b border-card-border flex justify-between items-center bg-slate-800/50">
           <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input type="text" placeholder="Filter tools..." className="form-input pl-10 h-8" />
           </div>
           <span className="text-xs text-muted">Showing {toolAnalytics.length} tools</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-800/30">
                <th className="p-4 font-semibold text-xs uppercase tracking-wider text-muted">Platform Name</th>
                <th className="p-4 font-semibold text-xs uppercase tracking-wider text-muted">Category</th>
                <th className="p-4 font-semibold text-xs uppercase tracking-wider text-muted text-center">User Rating</th>
                <th className="p-4 font-semibold text-xs uppercase tracking-wider text-muted text-center">Monthly Traffic</th>
                <th className="p-4 font-semibold text-xs uppercase tracking-wider text-muted text-right">Sentiment Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-card-border">
              {toolAnalytics.map((tool) => (
                <tr key={tool.id} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded bg-slate-700 flex items-center justify-center font-bold text-xs">
                        {tool.name[0]}
                      </div>
                      <span className="font-medium text-sm">{tool.name}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded bg-slate-800 text-[10px] font-bold text-slate-400 border border-card-border">
                      {tool.category}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center justify-center gap-1 text-amber-500">
                      <Star className="w-3 h-3 fill-amber-500" />
                      <span className="text-sm font-bold">{tool.rating}</span>
                    </div>
                  </td>
                  <td className="p-4 text-center text-sm font-medium">{tool.traffic}</td>
                  <td className="p-8">
                    <div className="flex items-center justify-end gap-3">
                      <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div className="h-full bg-primary" style={{ width: `${tool.sentiment}%` }} />
                      </div>
                      <span className="text-xs font-bold w-8">{tool.sentiment}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default ToolAnalytics;
