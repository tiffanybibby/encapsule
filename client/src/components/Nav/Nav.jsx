import './Nav.css'
import { NavLink } from 'react-router-dom'

const Nav = () => {

  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">enCapsule</NavLink>
        <div className="links">
          <NavLink className="link" to="/sign-up">sign up</NavLink>
          <NavLink className="link" to="/sign-in">sign in</NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Nav