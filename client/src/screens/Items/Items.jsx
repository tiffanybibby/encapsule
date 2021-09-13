import './Items.css'
import { Layout, ItemCards} from '../../components'

const Items = (props) => {

  return (
    <Layout user={props.user}>
    <ItemCards/>
    </Layout>
  )
}

export default Items