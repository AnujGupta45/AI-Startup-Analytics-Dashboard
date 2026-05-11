import React from 'react';
import { Search, Bell, User, Download, Filter } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="h-16 border-b border-card-border px-8 flex items-center justify-between bg-card/30 sticky top-0 z-50 backdrop-blur-sm">
      <div className="flex items-center gap-4">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
          <input 
            type="text" 
            placeholder="Search datasets..." 
            className="form-input pl-10 w-64 h-9 bg-white/5"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="btn-outline h-9 text-xs py-0">
          <Filter className="w-3.5 h-3.5" />
          Filters
        </button>
        <button className="btn-primary h-9 text-xs py-0">
          <Download className="w-3.5 h-3.5" />
          Export CSV
        </button>
        
        <div className="h-8 w-[1px] bg-card-border mx-2"></div>
        
        <button className="p-2 text-muted hover:text-white transition-colors relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
        </button>
        
        <div className="flex items-center gap-3 ml-2 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs text-slate-300 group-hover:bg-primary transition-colors">
            AG
          </div>
          <span className="text-sm font-medium text-slate-300 hidden md:block">Anuj Gupta</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
