import './Item.css';
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <> 
            <Link className="item" to={`/items/${props._id}`}>
                <img className="item-image" src={props.imgURL} alt={props.name} />
                <div className="item-name">{props.name}</div>
                <div className="item-category">{props.category}</div>
                <div className="item-color">{props.color}</div>
                <div className="item-season">{props.season}</div>
                <div className="item-notes">{props.notes}</div>
            </Link>
        </>
    )
}
export default Item