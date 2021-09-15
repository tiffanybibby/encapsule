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
      <div className='item-edit'>
        <div className='image-container-edit'>
          <img
            className='item-image-edit'
            src={item.imgURL}
            alt={item.name}
          />
        </div>
        <div className='item-container-edit'>
          <form className='form-edit' onSubmit={handleSubmit}>
            <div className='name-container-edit'>
            <div className='name-edit'>Name</div>
              <input
                className='name-input-edit'
                placeholder='Name'
                value={item.name}
                name='name'
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className='category-container-edit'>
            <div className='category-edit'>Category</div>
              <select
                className="category-input-edit"
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
            <div className='season-container-edit'>
            <div className='season-edit'>Season</div>
              <input
                className="season-input-edit"
                placeholder='Season'
                value={item.season}
                name='season'
                required
                onChange={handleChange}
              />
            </div>
            <div className='color-container-edit'>
            <div className='color-edit'>Color</div>
              <input
                className="color-input-edit"
                placeholder='Color'
                value={item.color}
                name='color'
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className='image-container-edit'>
            <div className='image-edit'>Change Image Link</div>
              <input
                className="edit-input-image-link"
                placeholder='Change image link'
                value={item.imgURL}
                name='imgURL'
                required
                onChange={handleChange}
              />
        </div>
        <div className='notes-container-edit'>
            <div className='notes-edit'>Notes</div>
              <textarea
                className='textarea-notes-edit'
                // rows={10}
                placeholder='Notes'
                value={item.notes}
                name='notes'
                required
                onChange={handleChange}
              />
            </div>
            <div className='buttons-edit'>
              <button type='submit' className='save-button-edit'>
                Save
              </button>
              <button
                className='delete-button-edit'
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