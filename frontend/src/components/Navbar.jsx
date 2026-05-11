import React from 'react';
import { Bell, Search, User, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="p-6 flex items-center justify-between">
      <div className="flex lg:hidden items-center gap-3">
        <Menu className="w-6 h-6 text-gray-400" />
        <h1 className="text-xl font-bold font-['Outfit'] gradient-text">Aura</h1>
      </div>

      <div className="hidden md:flex items-center glass-card px-4 py-2 w-96 border-white/5 bg-white/5">
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Search startup ecosystem..." 
          className="bg-transparent border-none outline-none px-3 text-sm w-full text-white placeholder:text-gray-500"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-xl glass-button border-white/5 hover:bg-white/5 relative">
          <Bell className="w-5 h-5 text-gray-400" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-background"></span>
        </button>
        <div className="flex items-center gap-3 glass-button py-1.5 px-3 border-white/5 bg-white/5">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-xs">
            JD
          </div>
          <div className="hidden sm:block text-left">
            <p className="text-xs font-bold leading-none">Jane Doe</p>
            <p className="text-[10px] text-gray-400">Founder @ AIX</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
