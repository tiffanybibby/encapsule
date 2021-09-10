import db from '../db/connection.js'
import Item from '../models/item.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    first_name: 'Bruno',
    last_name: 'Galvao',
    email: 'root@super.gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const user2 = new User({
    first_name: 'Bianca',
    last_name: 'Gal',
    email: 'b.anca@super.gmail.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11)
  })
  await user2.save()

  const user3 = new User({
    first_name: 'Elizabeth',
    last_name: 'Rodriguez',
    email: 'e.ro@super.gmail.com',
    password_digest: await bcrypt.hash('!$eller4Lif3', 11)
  })
  await user3.save()

  const user4 = new User({
    first_name: 'Derek',
    last_name: 'Johns',
    email: 'derek@super.gmail.com',
    password_digest: await bcrypt.hash('L0v32!p4int', 11)
  })
  await user4.save()

  // items data that we want inserted into database
const items = [{
  imgURL: 'https://i.imgur.com/7XWAhes.jpg',
  category: 'Skirts',
  season: 'Summer',
  color: 'Ecru',
  notes: 'Online https://www.zara.com/us/en/share/-p07385224.html?utm_campaign=productShare&utm_medium=mobile_sharing_iOS&utm_source=red_social_movil&v1=114766197'
},
{
  imgURL: 'https://i.imgur.com/daiNMbM.jpg',
  category: 'Skirts',
  season: 'Summer',
  color: 'Orange',
  notes: 'Spring season as well'
  },
  {
    imgURL: 'https://i.imgur.com/JzRXuTz.jpg',
    category: 'Skirts',
    season: 'Summer',
    color: 'Black',
    notes: 'Spring, Fall seasons as well'
  }]

  // insert items into database
  await Item.insertMany(items)
  console.log('Created users & items!')

  // close database connection. done.
  db.close()
}

insertData()