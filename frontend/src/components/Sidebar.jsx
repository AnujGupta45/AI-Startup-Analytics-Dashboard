import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Wrench, 
  Lightbulb, 
  MessageSquare, 
  BarChart3, 
  Settings,
  Database,
  TrendingUp,
  Zap
} from 'lucide-react';

const Sidebar = () => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Wrench, label: 'AI Tool Analysis', path: '/tools' },
    { icon: Lightbulb, label: 'Market Opportunity', path: '/market-gap' },
    { icon: MessageSquare, label: 'Sentiment Trends', path: '/sentiment' },
    { icon: BarChart3, label: 'Startup Intelligence', path: '/intelligence' },
  ];

  return (
    <aside className="w-64 border-r border-card-border h-screen sticky top-0 flex flex-col bg-card/50">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary p-1.5 rounded-lg">
          <Zap className="text-white w-5 h-5 fill-white" />
        </div>
        <h1 className="text-lg font-bold tracking-tight">AI Analytics Pro</h1>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <p className="px-4 text-[10px] font-bold text-muted uppercase tracking-widest mb-4">Core Analytics</p>
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}
          >
            <item.icon className="w-4 h-4" />
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
        
        <p className="px-4 text-[10px] font-bold text-muted uppercase tracking-widest mt-8 mb-4">Management</p>
        <NavLink to="/admin" className={({ isActive }) => `sidebar-link ${isActive ? 'sidebar-link-active' : ''}`}>
          <Database className="w-4 h-4" />
          <span className="text-sm font-medium">Dataset Manager</span>
        </NavLink>
        <NavLink to="/settings" className="sidebar-link">
          <Settings className="w-4 h-4" />
          <span className="text-sm font-medium">Project Settings</span>
        </NavLink>
      </nav>

      <div className="p-4 border-t border-card-border m-4 bg-primary/5 rounded-xl">
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="text-primary w-4 h-4" />
          <span className="text-xs font-bold">Project Goal</span>
        </div>
        <p className="text-[10px] text-muted leading-relaxed">
          Analyzing AI tool ecosystems for business intelligence insights.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
