import './ItemCreate.css'
import Layout from '../../components/Layout/Layout'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createItem } from '../../services/items'

const ItemCreate = (props) => {

  const [item, setItem] = useState({
    name: '',
    imgURL: '',
    category: '',
    season: '',
    color: '',
    notes: ''
})

  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    console.log(props)
    const { name, value } = e.target
      setItem({
        ...item,
      [name]: value
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createItem(item)
    setCreated({ created })
}

if (isCreated) {
    return <Redirect to={`/items`} />
}
  return (
    <Layout user={props.user}>
      <div className='create-item'>
      <form className="create-form" onSubmit={handleSubmit}>
        <div className='create-item-container'>
          <div>
            <label for='name'>Name</label>
            <input
              className="input-create-name"
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
              className="input-create-category"
              placeholder='Category'
              value={item.category}
              name='category'
              required
              onChange={handleChange}
            >
            <option value='' defaultValue>Choose category</option>
            <option value='tops'>Tops</option>
            <option value='skirts'>Skirts</option>
            <option value='pants'>Pants</option>
            <option value='dresses'>Dresses</option>
            </select>
          </div>
          <div>
            <label for='season'>Season</label>
            <input
              className="input-create-season"
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
              className="input-create-color"
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
              className="input-create-image-link"
              placeholder='Add image link'
              value={item.imgURL}
              name='imgURL'
              required
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='create-notes-container'>
          <div>
            <label for='notes'>Notes</label>
            <textarea
              className="textarea-create-notes"
              // rows={10}
              placeholder='Notes'
              value={item.notes}
              name='notes'
              onChange={handleChange}
            />
          </div>
        </div>
        <div className='create-buttons'>
          <button type='submit' className="submit-button">
            Submit
          </button>
        </div>
      </form>
      </div>
    </Layout>
    )
}


export default ItemCreate