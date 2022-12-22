import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import "../index.css"


const Item = ({ item, onDelete, onEdit }) => {

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