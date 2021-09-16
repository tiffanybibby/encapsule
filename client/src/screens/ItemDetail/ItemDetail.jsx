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
          <div className='name-container'>
            <div className='name-div'>Name</div><div className='name'>{item.name}</div>
          </div>
          <div className='category-container'>
            <div className='category-div'>Category</div><div className='category'>{item.category}</div>
          </div>
          <div className='season-container'>
            <div className='season-div'>Season</div><div className='season'>{item.season}</div>
          </div>
          <div className='color-container'>
            <div className='color-div'>Color</div>
            <div className='color'>{item.color}</div>
          </div>
          <div className='notes-container'>
            <div className='notes-div'>Notes</div><div className='notes'>{item.notes}</div>
          </div>
          <div className='button-container'>
            <button className='edit-button'>
              <Link  to={`/items/${item._id}/edit`}>
                Edit
              </Link>
            </button>
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
