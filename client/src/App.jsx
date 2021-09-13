import './App.css'
import Home from './screens/Home/Home'
import ItemCreate from './screens/ItemCreate/ItemCreate'
import ItemDetail from './screens/ItemDetail/ItemDetail'
import ItemEdit from './screens/ItemEdit/ItemEdit'
import Items from './screens/Items/Items'
import SignIn from './screens/SignIn/SignIn'
import SignOut from './screens/SignOut/SignOut'
import SignUp from './screens/SignUp/SignUp'
import { Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/item-create" component={ItemCreate} />
        <Route exact path="/items/:id" component={ItemDetail} />
        <Route exact path="/items/:id/edit" component={ItemEdit} />
        <Route exact path="/items" component={Items} />
        <Route exact path="/sign-up" component={SignUp} />
        <Route exact path="/sign-out" component={SignOut} />
        <Route exact path="/sign-in" component={SignIn} />
      </Switch>
    </div>
  )
}

export default App;
