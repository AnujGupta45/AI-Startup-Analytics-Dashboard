import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ThumbsUp, ThumbsDown, Smile } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts';

const sentimentData = [
  { name: 'Positive', value: 65, color: '#10b981' },
  { name: 'Neutral', value: 25, color: '#64748b' },
  { name: 'Negative', value: 10, color: '#ef4444' },
];

const Sentiment = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold font-['Outfit']">Sentiment Analysis</h2>
        <p className="text-gray-400">Analyze user satisfaction and public perception across the AI ecosystem.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card p-6 border-white/5">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
            <Smile className="text-emerald-500 w-5 h-5" />
            Global Sentiment Distribution
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData}>
                <XAxis dataKey="name" stroke="#ffffff50" axisLine={false} tickLine={false} />
                <YAxis hide />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6 border-white/5 bg-emerald-500/5">
            <div className="flex items-center gap-3 mb-2">
              <ThumbsUp className="text-emerald-500 w-5 h-5" />
              <h4 className="font-bold">Key Positives</h4>
            </div>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>High efficiency gains</li>
              <li>Ease of integration</li>
              <li>Creative freedom</li>
            </ul>
          </div>
          <div className="glass-card p-6 border-white/5 bg-red-500/5">
            <div className="flex items-center gap-3 mb-2">
              <ThumbsDown className="text-red-500 w-5 h-5" />
              <h4 className="font-bold">Key Negatives</h4>
            </div>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>Data privacy concerns</li>
              <li>High subscription costs</li>
              <li>Occasional hallucinations</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="glass-card p-6 border-white/5">
        <h3 className="text-xl font-bold mb-6">Recent Tool Reviews</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all flex gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/20 shrink-0 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-bold text-sm">Anonymous AI Researcher</span>
                  <span className="text-[10px] text-gray-500 bg-white/5 px-2 py-0.5 rounded-full uppercase">2 hours ago</span>
                </div>
                <p className="text-sm text-gray-300">
                  "The latency on the new GPT-4o model is incredible. It feels like a real conversation. However, the token cost is still a bit high for large-scale production apps."
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Sentiment;
