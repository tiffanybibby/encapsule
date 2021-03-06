import { useState, useEffect } from 'react'
import './ItemCards.css'
import Item from '../Item/Item'
import { getItems } from '../../services/items'

const ItemCards = () => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchItems = async () => {
      const allItems = await getItems()
      setItems(allItems)
    }
    fetchItems()
  }, [])

  const CARDS = items
    
    .map((item, index) =>
      index < 80 ? (
        <Item
          _id={item._id}
          imgURL={item.imgURL}
          name={item.name}
          key={index}
        />
      ) : null
    )

  return (
    <div className='item-cards'>
      <div className='index-cards'>{CARDS}</div>
    </div>
  )
}

export default ItemCards