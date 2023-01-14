// Components
import Header from './Header';
import AddItem from './AddItem';
// Hooks
import { useState, useEffect } from 'react';
// Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import '../App.css';

function Refrigerator() {
  
  const [items, setItems] = useState([]); // Item State
  const [showAddItem, setShowAddItem] = useState(false); // To reveal add Item form


  useEffect(() => {
    setTimeout(() => {
    }, 3500);
  }, [])

  // Fetching from Local Storage
  const getItems = JSON.parse(localStorage.getItem("itemAdded"));
  useEffect(() => {
      if (getItems == null) {
          setItems([])
      } else {
        setItems(getItems);
      }
  }, [getItems])

  // Add Item
  const addItem = (item) => {
    const id = uuidv4();
    const newItem= { id, ...item }
    setItems([...items, newItem]);
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new item!'
    })
    localStorage.setItem("itemAdded", JSON.stringify([...items, newItem]));
  }

  return (
    <>
      {
            <div className="container">
              {/* App Header */}
              <Header showForm={() => setShowAddItem(!showAddItem)} changeTextAndColor={showAddItem} />
              
              {/* Revealing the Add Item Form */}
              {showAddItem && <AddItem onSave={addItem} />}
            </div>
      }
    </>
  )
}

export default Refrigerator;