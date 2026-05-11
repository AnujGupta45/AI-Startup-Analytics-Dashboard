import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Database, CheckCircle, AlertTriangle, FileText } from 'lucide-react';

const Admin = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadComplete, setUploadComplete] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsUploading(false);
      setUploadComplete(true);
    }, 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <header className="flex flex-col gap-2">
        <h2 className="text-3xl font-bold font-['Outfit']">Admin Panel</h2>
        <p className="text-gray-400">Manage datasets, trigger pipelines, and monitor system health.</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="glass-card p-8 border-white/5 space-y-6">
          <div className="flex items-center gap-3">
            <Database className="text-primary w-6 h-6" />
            <h3 className="text-xl font-bold">Data Ingestion</h3>
          </div>
          
          <div className="border-2 border-dashed border-white/10 rounded-2xl p-12 text-center space-y-4 hover:border-primary/50 transition-colors group">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
              <Upload className="text-gray-400 group-hover:text-primary" />
            </div>
            <div>
              <p className="font-bold">Click to upload CSV</p>
              <p className="text-sm text-gray-500">or drag and drop your dataset here</p>
            </div>
            <button 
              onClick={handleUpload}
              disabled={isUploading}
              className="glass-button bg-primary/20 border-primary/30 text-primary font-bold hover:bg-primary hover:text-white px-8 py-2 disabled:opacity-50"
            >
              {isUploading ? 'Uploading...' : 'Select File'}
            </button>
          </div>

          {uploadComplete && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-sm font-medium"
            >
              <CheckCircle className="w-5 h-5" />
              Dataset "startups_q2_2026.csv" successfully ingested.
            </motion.div>
          )}
        </div>

        <div className="glass-card p-8 border-white/5 space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="text-violet-500 w-6 h-6" />
            <h3 className="text-xl font-bold">Pipeline Control</h3>
          </div>

          <div className="space-y-4">
            {[
              { name: 'Sentiment Analysis Engine', status: 'Running', health: 98 },
              { name: 'Market Gap ML Model', status: 'Idle', health: 100 },
              { name: 'Traffic Tracking Service', status: 'Running', health: 94 },
            ].map((p) => (
              <div key={p.name} className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                <div>
                  <p className="font-bold text-sm">{p.name}</p>
                  <p className="text-xs text-gray-500">{p.status}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-xs font-bold">{p.health}%</p>
                    <div className="w-16 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-primary" style={{ width: `${p.health}%` }} />
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-bold uppercase hover:bg-white/10">
                    Restart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/10 flex gap-3">
             <AlertTriangle className="text-amber-500 w-5 h-5 shrink-0" />
             <p className="text-xs text-gray-400">
               <span className="text-amber-500 font-bold">Attention:</span> 12 startup records require manual review due to missing funding data.
             </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Admin;
