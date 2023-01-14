import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Refrigerator from './Components/Refrigerator';
import Menu from './Components/Menu';
import Itemslist from './Components/Items_list';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/fridge_manager" element={< Home />} />
          <Route path="/add-item" element={< Refrigerator />} />
          <Route path="/menu" element={< Menu />} />
          <Route path="/items" element={< Itemslist />} />
      </Routes>
    </Router>
  );
}

export default App;

