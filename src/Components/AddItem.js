import React, { useState } from 'react'
import Swal from "sweetalert2";
import {database} from '../firebase'
import {ref,push,child,update} from "firebase/database";

const AddItem = ({onSave}) => {

  const [product, setProduct] = useState('');
  const [type, setType] = useState('');
  const [day, setDay] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!product && !day && !type) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Fill in your item, type and date or close the form!'
      })
  } else if (!product && day && type) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Fill in your item!'
      })
  } else if (product && !day && type) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Fill in your date!'
      })
  } else if (product && day && !type) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill in your type!'
     })
  } else {
      onSave({ product ,type ,day });
  }
    setProduct('');
    setDay('');
    setType('');
  }


  const handleSubmit = () =>{
    let obj = {
            product : product,
            type:type,
            day:day,
        }       
    const newPostKey = push(child(ref(database), 'posts')).key;
    const updates = {};
    updates['/' + newPostKey] = obj
    return update(ref(database), updates);
  }

  //get today date for the calendar
  let date = new Date().toLocaleDateString();

  return (
    <>
    <h1>Add Item</h1>
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-group">
            <label>Nom du produit</label>
            <input type="product" className="form-control" placeholder="Nom du produit" value={product} onChange={(e) => setProduct(e.target.value)}/>
            <br/>
            <label>Type d'aliments</label>
            <select className="form-control" type="text" value={type} onChange={(e) => setType(e.target.value)}>
                <option>Choisi...</option>
                <option>Fruits</option>
                <option>légumes</option>
                <option>Viandes</option>
                <option>Poissons</option>
                <option>Produits laitiers</option>
            </select>
            <br/>
            <label>Date de pérenption</label>
            {/*<input type="text" className="form-control" placeholder="Date de pérenption" value={day} onChange={(e) => setDay(e.target.value)}/>*/}
            <br/>
            <input className="form-control" type="date" id="start"
              min={date} max="2199-12-31" value={day} onChange={(e) => setDay(e.target.value)}/>
        </div>
       
        <br/>
        <input type="submit" onClick={()=>handleSubmit()} className="btn btn-block" value="Ajouter" />
    </form>
    </>
  )
}

export default AddItem