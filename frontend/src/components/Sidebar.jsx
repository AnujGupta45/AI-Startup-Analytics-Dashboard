import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wrench, 
  Lightbulb, 
  MessageSquare, 
  BarChart3, 
  Settings, 
  LogOut,
  Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Wrench, label: 'Tool Analytics', path: '/tools' },
    { icon: Lightbulb, label: 'Market Gap', path: '/market-gap' },
    { icon: MessageSquare, label: 'Sentiment AI', path: '/sentiment' },
    { icon: BarChart3, label: 'Intelligence', path: '/intelligence' },
    { icon: Settings, label: 'Admin Panel', path: '/admin' },
  ];

  return (
    <div className="w-64 glass-card m-4 mr-0 border-white/5 flex flex-col hidden lg:flex">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary/20 p-2 rounded-xl border border-primary/50">
          <Zap className="text-primary w-6 h-6 fill-primary/20" />
        </div>
        <h1 className="text-xl font-bold font-['Outfit'] gradient-text">Aura Analytics</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `
              flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
              ${isActive 
                ? 'bg-primary/20 text-primary border border-primary/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]' 
                : 'hover:bg-white/5 text-gray-400 hover:text-white'}
            `}
          >
            <item.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-4 py-3 w-full text-gray-400 hover:text-red-400 transition-colors group">
          <LogOut className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
