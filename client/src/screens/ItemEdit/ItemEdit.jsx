import { useState, useEffect } from 'react'
import './ItemEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { Layout } from '../../components'
import { getItem, updateItem, deleteItem } from '../../services/items'
import { useHistory } from 'react-router-dom'

const ItemEdit = (props) => {
  const history = useHistory()
  const [item, setItem] = useState({
    name: '',
    category: '',
    color: '',
    season: '',
    imgURL: '',
    notes: '',
    _id: ''
  })

  const [isUpdated, setUpdated] = useState(false)
  let { id } = useParams()

  useEffect(() => {
    const fetchItem = async () => {
      const item = await getItem(id)
      setItem(item)
    }
    fetchItem()
  }, [id])

  const handleChange = (e) => {
    const { name, value } = e.target
    setItem({
      ...item,
      [name]: value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const updated = await updateItem(id, item)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/items/${item._id}`} /> 
  }

  return (
    <Layout user={props.user}>
      <div className='edit-item'>
        <div className='edit-image-container'>
          <img
            className='edit-item-image'
            src={item.imgURL}
            alt={item.name}
          />
        </div>
        <div className='edit-item-container'>
          <form className='edit-form' onSubmit={handleSubmit}>
            <div>
              <label for='name'>Name</label>
              <input
                className='edit-input-name'
                placeholder='Name'
                value={item.name}
                name='name'
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div>
              <label for='category'>Category</label>
              <select
                className="edit-input-category"
                placeholder='Category'
                value={item.category}
                name='category'
                required
                onChange={handleChange}
              >
              <option value='choose-category' defaultValue>Choose category</option>
              <option value='tops'>Tops</option>
              <option value='skirts'>Skirts</option>
              <option value='pants'>Pants</option>
              <option value='dresses'>Dresses</option>
              </select>
            </div>
            <div>
              <label for='season'>Season</label>
              <input
                className="edit-input-season"
                placeholder='Season'
                value={item.season}
                name='season'
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label for='color'>Color</label>
              <input
                className="edit-input-color"
                placeholder='Color'
                value={item.color}
                name='color'
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div>
              <label for='imgURL'>Change Image Link</label>
              <input
                className="edit-input-image-link"
                placeholder='Change image link'
                value={item.imgURL}
                name='imgURL'
                required
                onChange={handleChange}
              />
            </div>
            <div>
              <label for='notes'>Notes</label>
              <textarea
                className='edit-textarea-notes'
                // rows={10}
                placeholder='Notes'
                value={item.notes}
                name='notes'
                required
                onChange={handleChange}
              />
            </div>
            <div className='edit-buttons'>
              <button type='submit' className='save-button'>
                Save
              </button>
              <button
                className='edit-delete-button'
                onClick={() => {
                  deleteItem(item._id)
                  history.push('/items')
                }}
              >
              Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default ItemEdit