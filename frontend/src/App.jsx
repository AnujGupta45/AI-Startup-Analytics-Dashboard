import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Dashboard from './pages/Dashboard';
import ToolAnalytics from './pages/ToolAnalytics';
import MarketGap from './pages/MarketGap';
import Sentiment from './pages/Sentiment';
import Intelligence from './pages/Intelligence';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import AIChatbot from './components/AIChatbot';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
        <Navbar />
        <main className="max-w-7xl mx-auto pt-32 pb-20 px-6 lg:px-10">
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
    </Router>
  );
}

export default App;
