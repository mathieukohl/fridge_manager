// Components
import Header from './Header2';
import Items from './Items';
import '../Home.css';
// Hooks
import { useState, useEffect } from 'react';
// Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import '../App.css';
import {database} from '../firebase'
import {ref ,remove ,update} from "firebase/database";


function Itemslist() {
  
  const [items, setItems] = useState([]); // Item State
  const [loading, setloading] = useState(true); // Pre-loader before page renders


  useEffect(() => {
    setTimeout(() => {
        setloading(false);
    }, 1000);
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

  // Delete Item
  const deleteItem= (id) => {
    const deleteItem = items.filter((item) => item.id !== id);
    remove(ref(database),`/${id}`)
    setItems(deleteItem);
    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: 'You have successfully deleted a item!'
    })
    localStorage.setItem("itemAdded", JSON.stringify(deleteItem));
  }

  // Edit Item
  const editItem = (id) => {
    const product = prompt("Item Name");
    const type = prompt("Type");
    const day = prompt("Date");
    const myData = items.map(x => {
        if (x.id === id) {
            return {
                ...x,
                product: product,
                type: type,
                day: day,
                id: uuidv4()
            }
        }
        return x;
    })
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully edited an existing item!'
    })
    localStorage.setItem("itemAdded", JSON.stringify(myData));
    update(ref(database, `/${product}/${type}/${day}`),{
      product: product,
      type: type,
      day: day
    });
    window.location.reload();
  }

  return (
    <>
      {
          loading ?
            <div className="spinnerContainer">
                <div className="spinner"/>
            </div> :
            <div className="container">
              {/* App Header */}
              <Header />
              {/* Displaying Items */}
              {
                items.length > 0 ?
                  (<Items items={items} onDelete={deleteItem} onEdit={editItem}/>) :
                  (<p>No Item Found!</p>)
              }
            </div>
      }
    </>
  )
}

export default Itemslist;
