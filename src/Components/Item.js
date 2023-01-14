import React from 'react';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"
import { format } from 'date-fns'

const Item = ({ item, onDelete, onEdit }) => {

    React.useEffect(() => {

      //get the current date in the right format 
      const current = new Date();
      const date = format(current, 'yyyy-MM-dd')

      //get the next product date
      const product_date = item.day;

      console.log("product date : " + product_date)
      console.log("today date : " + date)

      if(product_date === date) {
        alert("Your " + item.product + " will be out of date soon")
      }else{
        console.log("its not today")
      }
    },[item.day, item.product])

    return (
      <div>
        <div className="item">
          <div className='icon'>
            <FaTimes onClick={() => onDelete(item.id)} className="delIcon" />
            <FaPencilAlt onClick={() => onEdit(item.id)} className="editIcon" />
          </div>
          <div>
            <p className="itemName">
              <span className="textBold">
                item Name:
              </span> {item.product}
            </p>
            <p className="itemType">
              <span className="textBold">
                Type:
              </span> {item.type}
            </p>
            <p className="itemDate">
              <span className="textBold">
                Date de pérenption:
              </span> {item.day}
            </p>
          </div>
        </div>
      </div>
    )
}
export default Item;