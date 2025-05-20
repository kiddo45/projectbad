import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ServiceList from './pages/services/ServiceList';
import AddService from './pages/services/AddServices';
import EditService from './pages/services/EditService';

function App() {
  return (
   
     <Router>
      <Routes>
        <Route path="/services" element={<ServiceList />} />
        <Route path="/services/add" element={<AddService />} />
        <Route path="/services/edit/:id" element={<EditService />} />
        <Route path="*" element={<ServiceList />} />
      </Routes>
    </Router>
  );
}

export default App;
