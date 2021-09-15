import './Items.css'
import { Layout, ItemCards } from '../../components'
import { Link } from 'react-router-dom'

const Items = (props) => {

  return (
    <Layout user={props.user}>
      { props.user ? <ItemCards /> :
        <>
          <p className="awkward">Well, this is awkward...</p>
          <p className="no-closet"> Your closet is empty {':('}</p>
          <br />
          <div className="funny-gifs">
            <img className="gif-1" src="https://media0.giphy.com/media/3ohfFucMqPjwFq5f7W/giphy.gif" alt="clueless" />
            <img className="gif-2" src="https://studentlife.uiowa.edu/assets/wp-old/2014/05/new-girl-gif1.gif" alt="girl crying" />
            <img className="gif-3" src="https://i.pinimg.com/originals/dd/74/41/dd7441477760a25ed30bc6e7aceae639.gif" alt="clueless clip" />
          </div>
          <br />
          <p className="no-closet-sell"> <Link className="closet-empty" to="/sign-up">Sign up</Link> or <Link className="closet-empty" to="/sign-up">sign in</Link> to get enCapsulated today!</p>
          <div class="push"></div>
        </>
      }
    </Layout>
  )
}

export default Items