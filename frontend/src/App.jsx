import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Dashboard from './pages/Dashboard';
import ToolAnalytics from './pages/ToolAnalytics';
import MarketGap from './pages/MarketGap';
import Sentiment from './pages/Sentiment';
import Intelligence from './pages/Intelligence';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-background text-foreground overflow-x-hidden">
        <Sidebar />
        <div className="flex-1 flex flex-col relative">
          <Navbar />
          <main className="flex-1 p-6 lg:p-10">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/tools" element={<ToolAnalytics />} />
                <Route path="/market-gap" element={<MarketGap />} />
                <Route path="/sentiment" element={<Sentiment />} />
                <Route path="/intelligence" element={<Intelligence />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </AnimatePresence>
          </main>
          <AIChatbot />
        </div>
      </div>
    </Router>
  );
}

export default App;
