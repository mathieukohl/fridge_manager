import Grocery from '../Grocery/Grocery';
import "../../index.css"

const Groceries = ({ groceries, onDelete, onEdit }) => {
  return (
    <>
      {
        groceries.map((grocery) => (
          <Grocery key={grocery.id} grocery={grocery} onDelete={onDelete} onEdit={onEdit} />
        ))
      }
    </>
    )
}


export default Groceries;