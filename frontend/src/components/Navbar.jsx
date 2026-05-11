import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  Wrench, 
  Lightbulb, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Zap,
  Search,
  Bell
} from 'lucide-react';

const Navbar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Explore', path: '/' },
    { icon: Wrench, label: 'Tools', path: '/tools' },
    { icon: Lightbulb, label: 'Market', path: '/market-gap' },
    { icon: MessageSquare, label: 'Sentiment', path: '/sentiment' },
    { icon: BarChart3, label: 'Intelligence', path: '/intelligence' },
  ];

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[100] w-fit">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', damping: 20, stiffness: 100 }}
        className="bg-black/60 backdrop-blur-3xl border border-white/10 rounded-full px-2 py-2 flex items-center gap-1 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        <div className="px-4 flex items-center gap-2 border-r border-white/10 mr-2">
          <Zap className="w-5 h-5 text-primary fill-primary/20" />
          <span className="font-['Outfit'] font-bold text-sm tracking-tighter">AURA</span>
        </div>

        <div className="flex items-center gap-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-500 flex items-center gap-2
                ${isActive ? 'text-white' : 'text-muted hover:text-white'}
              `}
            >
              {({ isActive }) => (
                <>
                  <item.icon className={`w-4 h-4 ${isActive ? 'text-primary' : ''}`} />
                  <span className="hidden md:block">{item.label}</span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-bg"
                      className="absolute inset-0 bg-white/5 border border-white/10 rounded-full -z-10"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 pl-2 border-l border-white/10 ml-1">
          <button className="p-2 text-muted hover:text-white transition-colors rounded-full hover:bg-white/5">
            <Search className="w-4 h-4" />
          </button>
          <button className="p-2 text-muted hover:text-white transition-colors rounded-full hover:bg-white/5 relative">
            <Bell className="w-4 h-4" />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-primary rounded-full"></span>
          </button>
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent ml-2 cursor-pointer border border-white/20 hover:scale-110 transition-transform"></div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
