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
      <div className='item-create'>
        <form className="form-create" onSubmit={handleSubmit}>
          <div className='item-container-create'>
            <div className='name-container-create'>
              <div className='name-create'>Name</div>
              <input
                className="name-input-create"
                value={item.name}
                name='name'
                required
                autoFocus
                onChange={handleChange}
              />
            </div>
            <div className='category-container-create'>
              <div className='category-create'>Category</div>
              <select
                className="category-input-create"
                placeholder='Category'
                value={item.category}
                name='category'
                required
                onChange={handleChange}
              >
                <option value='' defaultValue>Select</option>
                <option value='tops'>Tops</option>
                <option value='skirts'>Skirts</option>
                <option value='pants'>Pants</option>
                <option value='dresses'>Dresses</option>
              </select>
            </div>
            <div className='season-container-create'>
              <div className='season-create'>Season</div>
              <input
                className="season-input-create"
                value={item.season}
                name='season'
                required
                onChange={handleChange}
              />
            </div>
            <div className='color-container-create'>
              <div className='color-create'>Color</div>
              <input
                className="color-input-create"
                value={item.color}
                name='color'
                required
                autoFocus
                onChange={handleChange}
              />
              </div>
            <div className='image-container-create'>
              <div className='image-create'>Upload Image</div>
              <input
                className="image-link-create"
                placeholder="Insert image link"
                value={item.imgURL}
                name='imgURL'
                required
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='notes-container-create'>
            <div className='notes-create'>Notes</div>
            <textarea
              className="textarea-notes-create"
              value={item.notes}
              name='notes'
              onChange={handleChange}
            />
          </div>
          <div className='button-container-create'>
            <button type='submit' className="save-button">
              Save
            </button>
          </div>
        </form>
      </div>
    </Layout>
    )
}


export default ItemCreate