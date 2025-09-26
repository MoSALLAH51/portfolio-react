import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import ProjectDetailPage from './detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Portfolio />} />
          
          <Route path="/project/:id" element={<ProjectDetailPage />} />
          
          <Route path="*" element={
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-4xl font-bold text-cyan-400 mb-4">404 - Page Not Found</h1>
                <p className="text-blue-200 mb-6">The page you're looking for doesn't exist.</p>
                <a 
                  href="/" 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-6 py-3 rounded-full text-white font-medium transition-all duration-300 hover:scale-105"
                >
                  Back to Home
                </a>
              </div>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;