import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center p-6 z-50">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md glass-card p-8 border-white/10 relative z-10"
      >
        <div className="text-center space-y-2 mb-8">
          <div className="bg-primary/20 p-3 rounded-2xl border border-primary/50 w-fit mx-auto mb-4">
            <Zap className="text-primary w-8 h-8 fill-primary/20" />
          </div>
          <h2 className="text-3xl font-bold font-['Outfit']">Welcome Back</h2>
          <p className="text-gray-400">Access your startup intelligence dashboard</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Email Address</label>
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
              <input 
                type="email" 
                placeholder="name@company.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400 ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-primary transition-colors" />
              <input 
                type="password" 
                placeholder="••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all text-white"
                required
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 rounded border-white/10 bg-white/5 checked:bg-primary accent-primary" />
              <span className="text-gray-400 group-hover:text-gray-300 transition-colors">Remember me</span>
            </label>
            <a href="#" className="text-primary hover:underline font-medium">Forgot password?</a>
          </div>

          <button 
            type="submit"
            className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Sign In to Aura
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-500">
          Don't have an account? <a href="#" className="text-white hover:underline font-bold">Request Access</a>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
