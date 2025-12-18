import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Resume from './pages/Resume';
import Summary from './pages/Summary';
import Expenses from './pages/Expenses';
import Revenues from './pages/Revenues';
import Debt from './pages/Debt';
import Sources from './pages/Sources';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with Layout */}
        <Route path="/" element={<Layout><Navigate to="/resume" replace /></Layout>} />
        <Route path="/resume" element={<Layout><Resume /></Layout>} />
        <Route path="/summary" element={<Layout><Summary /></Layout>} />
        <Route path="/expenses" element={<Layout><Expenses /></Layout>} />
        <Route path="/revenues" element={<Layout><Revenues /></Layout>} />
        <Route path="/debt" element={<Layout><Debt /></Layout>} />
        <Route path="/sources" element={<Layout><Sources /></Layout>} />
      </Routes>
    </Router>
  );
}