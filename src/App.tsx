import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Method } from './pages/Method';
import { Reviews } from './pages/Reviews';
import { Assessment } from './pages/Assessment';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { AssessmentSuccess } from './pages/AssessmentSuccess';

function App() {
  return (
    <Router>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/over-ons" element={<About />} />
          <Route path="/methode" element={<Method />} />
          <Route path="/ervaringen" element={<Reviews />} />
          <Route path="/assessment" element={<Assessment />} />
          <Route path="/assessment/success" element={<AssessmentSuccess />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;