import './Nav.css'
import { NavLink } from 'react-router-dom'


const authenticatedOptions = (
    <>
        <NavLink className="link" to="/item-create">Add Item</NavLink>
        <NavLink className="link" to="/sign-out">Sign Out</NavLink>
    </>
)
const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/sign-up">Sign Up</NavLink>
        <NavLink className="link" to="/sign-in">Sign In</NavLink>
    </>
)

const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">enCapsule</NavLink>
        <div className="links">
          {user && <NavLink className="link-welcome" to="/items">{user.first_name}'s Closet</NavLink>}
          {user ? authenticatedOptions : unauthenticatedOptions}
        </div>
      </div>
    </nav>
  )
}

export default Nav