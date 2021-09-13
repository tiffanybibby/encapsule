import { useState, useEffect } from 'react'
import './ItemDetail.css'
import { Layout } from '../../components'
import { getItem, deleteItem } from '../../services/items'
import { useParams, Link } from 'react-router-dom'

const ItemDetail = (props) => {
  const [item, setItem] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id)
      setItem(item)
      setLoaded(true)
    }
    fetchItem()
  }, [id])

  if (!isLoaded) {
    return <h1>Loading...</h1>
  }

  return (
    <Layout user={props.user}>
      <div className='item-detail'>
        <img
          className='item-detail-image'
          src={item.imgURL}
          alt={item.name}
        />
        <div className='detail'>
          <p className='name-p'>Name</p><div className='name'>{item.name}</div>
          <p className='category-p'>Category</p><div className='category'>{item.category}</div>
          <p className='season-p'>Season</p><div className='season'>{item.season}</div>
          <p className='color-p'>Color</p><div className='color'>{item.color}</div>
          <p className='notes-p'>Notes</p><div className='notes'>{item.notes}</div>
          <div className='button-container'>
            <Link className='edit-button' to={`/items/${item._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => deleteItem(item._id)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ItemDetail
