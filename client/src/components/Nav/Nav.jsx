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
// const alwaysOptions = (
//     <>
//         <NavLink className="link" to="/items">Closet</NavLink>
//     </>
// )


const Nav = ({ user }) => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">enCapsule</NavLink>
        <div className="links">
<<<<<<< HEAD
=======
          {/* <NavLink className="link" to="/sign-up">sign up</NavLink>
          <NavLink className="link" to="/sign-in">sign in</NavLink> */}
>>>>>>> 2080a80c637abba862d0bd2b02962eb7234b6e20
          {user && <div className="link welcome">{user.username}'s Closet</div>}
          {/* {alwaysOptions} */}
          {user ? authenticatedOptions : unauthenticatedOptions}

        </div>
      </div>
    </nav>
  )
}

export default Nav