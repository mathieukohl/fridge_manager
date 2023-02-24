import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Refrigerator from './Components/Items/Refrigerator';
import Menu from './Components/Menu';
import Itemslist from './Components/Items/Items_list';
import Grocerylist from './Components/Grocery/Grocery_list';
import AddGrocery from './Components/Grocery/AddGrocery';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/fridge_manager" element={< Home />} />
          <Route path="/add-item" element={< Refrigerator />} />
          <Route path="/menu" element={< Menu />} />
          <Route path="/items" element={< Itemslist />} />
          <Route path="/add-to-list" element={< AddGrocery />} />
          <Route path="/groceries" element={< Grocerylist />} />
      </Routes>
    </Router>
  );
}

export default App;

