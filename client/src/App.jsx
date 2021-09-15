import { useState, useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './screens/Home/Home'
import ItemCreate from './screens/ItemCreate/ItemCreate'
import ItemDetail from './screens/ItemDetail/ItemDetail'
import ItemEdit from './screens/ItemEdit/ItemEdit'
import Items from './screens/Items/Items'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import SignUp from './screens/SignUp/SignUp'
import { Route, Switch, Redirect } from 'react-router-dom'
import { verifyUser } from './services/users'


const App = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchUser = async () => {
      const user = await verifyUser()
      user ? setUser(user) : setUser(null)
    }
    fetchUser()
  }, [])


  return (
      <div className="app">
      <Switch>
        <Route exact path="/">
          <Home user={user} />
        </Route>
        <Route path="/sign-up">
          <SignUp setUser={setUser} />
        </Route>
        <Route path="/sign-in">
          <SignIn setUser={setUser} />
        </Route>
        <Route path="/sign-out">
          <SignOut setUser={setUser} />
        </Route>
        <Route exact path="/items">
          <Items user={user} />
        </Route>
        <Route path="/item-create">
          {user ? <ItemCreate user={user} /> : <Redirect to="/sign-up" />}
        </Route>
        <Route exact path="/items/:id/edit">
          {user ? <ItemEdit user={user} /> : <Redirect to='/' />}
        </Route>
        <Route exact path="/items/:id">
          <ItemDetail user={user} />
        </Route>
      </Switch>
    </div>
  )
}

export default App;



