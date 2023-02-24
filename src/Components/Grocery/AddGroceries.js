import React, { useState } from 'react'
import Swal from "sweetalert2";
import {database} from '../../firebase'
import {ref,push,child,update} from "firebase/database";


const AddGroceries = ({onSave}) => {

  const [product, setProduct] = useState('');
  const [type, setType] = useState('');
  const [day, setDay] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!product && !day && !type) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Fill in your grocery, type and date or close the form!'
      })
  } else if (!product && day && type) {
      Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Fill in your grocery!'
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

  return (
    <>
    <h1>Add Groceries</h1>
    <form className="add-form" onSubmit={onSubmit}>
        <div className="form-group">
            <label>Nom du produit</label>
            <input type="product" className="form-control" placeholder="Nom du produit" value={product} onChange={(e) => setProduct(e.target.value)}/>
             </div>
        <br/>
        <input type="submit" onClick={()=>handleSubmit()} className="btn btn-block" value="Ajouter" />
    </form>
    </>
  )
}

export default AddGroceries