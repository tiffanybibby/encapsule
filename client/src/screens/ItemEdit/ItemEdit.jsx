import { useState, useEffect } from 'react'
import './ItemEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { Layout } from '../../components'
import { getItem, updateItem } from '../../services/items'

const ItemEdit = (props) => {
  const [item, setItem] = useState({
    name: '',
    category: '',
    color: '',
    season: ''
    imgURL: '',
    notes: '',
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
    e.preDefault()
    const updated = await updateItem(id, item)
    setUpdated(updated)
  }

  if (isUpdated) {
    return <Redirect to={`/items/${id}`} />
  }

  return (
    <Layout user={props.user}>
      <div className='item-edit'>
        <div className='image-container'>
          <form onSubmit={handleSubmit}>
            <input
              className='edit-input-image-link'
              placeholder='Image Link'
              value={item.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </form>
        </div>
        <form className='edit-form' onSubmit={handleSubmit}>
          <input
            className='input-name'
            placeholder='Name'
            value={item.name}
            name='name'
            required
            autoFocus
            onChange={handleChange}
          />
          <select
          className="input-category"
          placeholder='Category'
          value={item.category}
          name='category'
          required
          onChange={handleChange}
          >
          <option value='choose-category' selected>Choose category</option>
          <option value='tops'>Tops</option>
          <option value='skirts'>Skirts</option>
          <option value='pants'>Pants</option>
          <option value='dresses'>Dresses</option>
          </select>
          <input
          className="input-color"
          placeholder='Color'
          value={item.color}
          name='color'
          required
          autoFocus
          onChange={handleChange}
        />
        <input
          className="input-season"
          placeholder='Season'
          value={item.season}
          name='season'
          required
          onChange={handleChange}
          />
          <input
          className="input-image-link"
          placeholder='Add image link'
          value={item.imgURL}
          name='imgURL'
          required
          onChange={handleChange}
        />
          <textarea
            className='textarea-notes'
            rows={10}
            placeholder='Notes'
            value={item.notes}
            name='notes'
            required
            onChange={handleChange}
          />
          <button type='submit' className='save-button'>
            Save
          </button>
        </form>
      </div>
    </Layout>
  )
}

export default ItemEdit