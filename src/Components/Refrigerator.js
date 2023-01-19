// Components
import Header2 from './Header2';
import AddItem from './AddItem';
// Hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import '../App.css';

function Refrigerator() {
  
  const [items, setItems] = useState([]); // Item State
  //const [showAddItem, setShowAddItem] = useState(false); // To reveal add Item form

  const navigate = useNavigate()

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
    navigate('/items')
  }

  return (
    <>
      {
            <div className="container">
              {/* App Header 
              <Header showForm={() => setShowAddItem(!showAddItem)} changeTextAndColor={showAddItem} />
              
              {/* Revealing the Add Item Form 
              {showAddItem && <AddItem onSave={addItem} />}
            */}
            <Header2/>
            <AddItem onSave={addItem}/>
            </div>
      }
    </>
  )
}

export default Refrigerator;