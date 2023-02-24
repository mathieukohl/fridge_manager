import React from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../../index.css"
import { format } from 'date-fns'

const Grocery = ({ grocery, onDelete, onEdit }) => {

    React.useEffect(() => {

      //get the current date in the right format 
      const current = new Date();
      const date = format(current, 'yyyy-MM-dd')

      //get the next product date
      const product_date = grocery.day;

      console.log("product date : " + product_date)
      console.log("today date : " + date)

      if(product_date === date) {
        alert("Your " + grocery.product + " will be out of date soon")
      }else{
        console.log("its not today")
      }
    },[grocery.day, grocery.product])

    return (
      <div>
        <div className="grocery">
          <div className='icon'>
            <FaTimes onClick={() => onDelete(grocery.id)} className="delIcon" />
            <FaPencilAlt onClick={() => onEdit(grocery.id)} className="editIcon" />
          </div>
          <div>
            <p className="groceryName">
              <span className="textBold">
                grocery Name:
              </span> {grocery.product}
            </p>
          </div>
        </div>
      </div>
    )
}
export default Grocery;