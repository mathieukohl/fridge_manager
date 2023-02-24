// Components
import Header2 from '../Header2';
import AddGroceries from './AddGroceries';
// Hooks
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
// Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import '../../App.css';

function AddGrocery() {
  
  const [groceries, setGroceries] = useState([]); // Grocery State
  //const [showAddGrocery, setShowAddGrocery] = useState(false); // To reveal add Grocery form

  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
    }, 3500);
  }, [])

  // // Fetching from Local Storage
  // const getGroceries = JSON.parse(localStorage.getGrocery("groceryAdded"));
  // useEffect(() => {
  //     if (getGroceries == null) {
  //       setGroceries([])
  //     } else {
  //       setGroceries(getGroceries);
  //     }
  // }, [getGroceries])

  useEffect(() => {
    const storedGroceries = JSON.parse(localStorage.getItem("groceryAdded"));
    if (storedGroceries == null) {
      setGroceries([])
    } else {
      setGroceries(storedGroceries);
    }
  }, [])

  // Add Grocery
  const addGrocery = (grocery) => {
    const id = uuidv4();
    const newGrocery= { id, ...grocery }
    setGroceries([...groceries, newGrocery]);
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully added a new grocery!'
    })
    localStorage.setGrocery("groceryAdded", JSON.stringify([...groceries, newGrocery]));
    navigate('/groceries')
  }

  return (
    <>
      {
            <div className="container">
              <Header2/>
              <AddGroceries onSave={addGrocery}/>
            </div>
      }
    </>
  )
}

export default AddGrocery;