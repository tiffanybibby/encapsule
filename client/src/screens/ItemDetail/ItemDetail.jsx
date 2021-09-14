import { useState, useEffect } from 'react'
import './ItemDetail.css'
import { Layout } from '../../components'
import { getItem, deleteItem } from '../../services/items'
import { useParams, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const ItemDetail = (props) => {
  const [item, setItem] = useState(null)
  const [isLoaded, setLoaded] = useState(false)
  const { id } = useParams()
  const history = useHistory()

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
          <div className='name-div'>Name</div><p className='name'>{item.name}</p>
          <div className='category-div'>Category</div><p className='category'>{item.category}</p>
          <div className='season-div'>Season</div><p className='season'>{item.season}</p>
          <div className='color-div'>Color</div><p className='color'>{item.color}</p>
          <div className='notes-div'>Notes</div><p className='notes'>{item.notes}</p>
          <div className='button-container'>
            <Link className='edit-button' to={`/items/${item._id}/edit`}>
              Edit
            </Link>
            <button
              className='delete-button'
              onClick={() => {
                deleteItem(item._id)
                history.push('/items')
              }}
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
