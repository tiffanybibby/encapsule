import { useState, useEffect } from 'react'
import './ItemEdit.css'
import { useParams, Redirect } from 'react-router-dom'
import { Layout } from '../../components'
import { getItem, updateItem } from '../../services/items'

const ItemEdit = (props) => {
  const [item, setItem] = useState({
    name: '',
    description: '',
    imgURL: '',
    price: '',
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
          <img
            className='edit-item-image'
            src={item.imgURL}
            alt={item.name}
          />
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
          <input
            className='input-price'
            placeholder='Price'
            value={item.price}
            name='price'
            required
            onChange={handleChange}
          />
          <textarea
            className='textarea-description'
            rows={10}
            cols={78}
            placeholder='Description'
            value={item.description}
            name='description'
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