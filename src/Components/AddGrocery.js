import React, { useState } from 'react'
import {database} from '../firebase'
import {ref, push, child, update} from "firebase/database";

const AddGrocery = () => {
  const [item, setItem] = useState('');

  const handleSubmit = () => {
    let obj = {
      item: item,
    }
    const newPostKey = push(child(ref(database), 'grocery_list')).key;
    const updates = {};
    updates['/' + newPostKey] = obj;
    return update(ref(database), updates);
  }

  return (
    <>
    <h1>Add to Grocery List</h1>
    <form>
        <div className="form-group">
            <label>Item</label>
            <input type="text" className="form-control" placeholder="Item name" value={item} onChange={(e) => setItem(e.target.value)}/>
        </div>
        <br/>
        <input type="submit" onClick={()=>handleSubmit()} className="btn btn-block" value="Add Item" />
    </form>
    </>
  )
}

export default AddGrocery