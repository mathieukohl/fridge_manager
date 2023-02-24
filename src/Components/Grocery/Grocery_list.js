// Components
import Header3 from '../Header3';
import Groceries from './Groceries';
import '../../Home.css';
// Hooks
import { useState, useEffect } from 'react';
// Packages
import { v4 as uuidv4 } from 'uuid';
import Swal from "sweetalert2";
import '../../App.css';
import {database} from '../../firebase'
import {ref ,remove ,update} from "firebase/database";


function Grocerylist() {
  
  const [groceries, setGroceries] = useState([]); // Grocery State
  const [loading, setloading] = useState(true); // Pre-loader before page renders


  useEffect(() => {
    setTimeout(() => {
        setloading(false);
    }, 500);
  }, [])

  // Fetching from Local Storage
  // const getGroceries = JSON.parse(localStorage.getGrocery("groceryAdded"));
  // useEffect(() => {
  //     if (getGroceries == null) {
  //       setGroceries([])
  //     } else {
  //       setGroceries(getGroceries);
  //     }
  // }, [getGroceries])

  // // Delete Grocery
  const deleteGroceries= (id) => {
    const deleteGroceries = Groceries.filter((grocery) => grocery.id !== id);
    remove(ref(database),`/${id}`)
    setGroceries(deleteGroceries);
    Swal.fire({
      icon: 'success',
      title: 'Oops...',
      text: 'You have successfully deleted an grocery!'
    })
    localStorage.setGrocery("groceryAdded", JSON.stringify(deleteGroceries));
  }

  // // Edit Grocery
  const editGrocery = (id) => {
    const product = prompt("Grocery Name");
    const type = prompt("Type");
    const day = prompt("Date");
    const myData = groceries.map(x => {
        if (x.id === id) {
            return {
                ...x,
                product: product,
                id: uuidv4()
            }
        }
        return x;
    })
    Swal.fire({
      icon: 'success',
      title: 'Yay...',
      text: 'You have successfully edited an existing grocery!'
    })
    localStorage.setGrocery("groceryAdded", JSON.stringify(myData));
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
              <Header3 />
              {
                groceries.length > 0 ?
                  (<Groceries groceries={groceries} onDelete={deleteGroceries} onEdit={editGrocery}/>) :
                  (<p>No Item Found!</p>)
              }
            </div>
      }
    </>
  )
}

export default Grocerylist;
