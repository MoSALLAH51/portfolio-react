  import React from 'react';
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
  import ProjectDetail from './detail';
  import Portfolio from './Portfolio.js';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
export default App;

