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
            <div className='container-edit'>
            <div className='div-edit'>Name</div>
              <input
                className='input-edit'
                placeholder='Name'
                value={item.name}
                name='name'
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className='container-edit'>
            <div className='div-edit'>Category</div>
              <select
                className="input-edit"
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
            <div className='container-edit'>
            <div className='div-edit'>Season</div>
              <input
                className="input-edit"
                placeholder='Season'
                value={item.season}
                name='season'
                required
                onChange={handleChange}
              />
            </div>
            <div className='container-edit'>
            <div className='div-edit'>Color</div>
              <input
                className="input-edit"
                placeholder='Color'
                value={item.color}
                name='color'
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className='container-edit'>
            <div className='div-edit'>Image Link</div>
              <input
                className="input-edit"
                placeholder='Change image link'
                value={item.imgURL}
                name='imgURL'
                required
                onChange={handleChange}
              />
        </div>
        <div className='container-edit'>
            <div className='div-edit'>Notes</div>
              <textarea
                className='textarea-notes-edit'
                placeholder='Notes'
                value={item.notes}
                rows='5'
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