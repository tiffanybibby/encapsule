import './ItemCreate.css'
import Layout from '../../components/Layout/Layout'
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { createItem } from '../../services/items'

const ItemCreate = (props) => {

  const [item, setItem] = useState({
    category: '',
    season: '',
//    notes: '',
//    uploadImage: '',
    color: ''
})

  const [isCreated, setCreated] = useState(false)

  const handleChange = (e) => {
    console.log(props)
 //   const { ??name??, value } = e.target
      setItem({
 //     ...item,
 //      [??name??]: value
    })
}

  const handleSubmit = async (e) => {
    e.preventDefault()
    const created = await createItem(item)
    setCreated({ created })
}

if (isCreated) {
    return <Redirect to={`/`} />
}
  return (
    <Layout user={props.user}>
      <form className="create-form" onSubmit={handleSubmit}>
      <input
          className="input-category"
          placeholder='Category'
          value={item.category}
          name='category'
          required
          autoFocus
          onChange={handleChange}
        />
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
        <textarea
          className="textarea-notes"
          rows={10}
          placeholder='Notes'
          value={item.notes}
          name='notes'
//          required
          onChange={handleChange}
        />
        <input
          className="input-image-link"
          placeholder='Image Link'
          value={item.imgURL}
          name='imgURL'
//         required
          onChange={handleChange}
        />
        <button type='submit' className="submit-button">Submit</button>
      </form>
    </Layout>
    )
}


export default ItemCreate