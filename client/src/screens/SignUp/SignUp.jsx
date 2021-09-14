import './SignUp.css'
import { useState } from 'react'
import { signUp } from '../../services/users'
import { useHistory } from 'react-router-dom'
import Layout from '../../components/Layout/Layout'

const SignUp = (props) => {
  const history = useHistory()

  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    isError: false,
    errorMsg: '',
  })

const handleChange = (event) =>
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })

const onSignUp = async (event) => {
    event.preventDefault()
    const { setUser } = props
  try {
    if (password === passwordConfirmation) { 
      const user = await signUp(form)
      setUser(user)
      history.push('/items')
    } else {
      throw 'Sign Up Details Invalid'
      }
    } catch (error) {
      console.error(error)
      setForm({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        isError: true,
        errorMsg: 'Sign Up Details Invalid!',
      })
    }
  }

const renderError = () => {
    const toggleForm = form.isError ? 'danger' : ''
    if (form.isError) {
      return ( 
      <>
        <button type='submit'>Sign Up</button>
        <p className={toggleForm}>
          {form.errorMsg}
        </p>
      </>
      )
    } else {
      return <button type='submit'>Sign Up</button>
    }
  }  

const { first_name, last_name, email, password, passwordConfirmation } = form

  return (
    <Layout>
      <div className='sign-up'>
        <div className='left-column'>
          <img className='sign-up-img' src="https://lh3.googleusercontent.com/MJQaCBft3cJZSda5vhRDotuObepiBk-X4CrlAuw7_WKSwyTAYphb94Qg-5sb-d-sS0YprGds1rT3_SjFUBjyBbtgyCeBoSniFJ_sUwgZ0YHzb3ZJVJ315Lpld0mZ_vqISLf4X9dD4dE=h480" alt='Happy woman sitting in organized closet' />
          <h1>Always know what to wear!</h1>
          <h2>Easily keep track of your clothing with enCapsule.</h2>
        </div>
        <div className='right-column'>
          <form className='sign-up-form' onSubmit={onSignUp}>
            <label>First Name</label>
            <input
              required
              type='text'
              name='first_name'
              value={first_name}
              onChange={handleChange}
            />
            <label>Last Name</label>
            <input
              required
              type='text'
              name='last_name'
              value={last_name}
              onChange={handleChange}
            />
            <label>Email</label>
            <input
              required
              type='email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <label>Password</label>
            <input
              required
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
            <label>Password Confirmation</label>
            <input
              required
              type='password'
              name='passwordConfirmation'
              value={passwordConfirmation}
              onChange={handleChange}
            />
            {renderError()}
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default SignUp