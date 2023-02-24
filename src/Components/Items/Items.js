import Item from '../Items/Item';
import "../../index.css"

const Items = ({ items, onDelete, onEdit }) => {
  return (
    <>
      {
        items.map((item) => (
          <Item key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
    )
}


export default Items;