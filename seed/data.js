import db from "../db/connection.js";
import Item from "../models/item.js";
import User from "../models/user.js";
import bcrypt from "bcrypt";

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  const user1 = new User({
    first_name: 'Nora',
    last_name: 'Tulchina',
    email: 'alienora@super.gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()

  const user2 = new User({
    first_name: 'Nikki',
    last_name: 'Gilpin',
    email: 'nikkicole@super.gmail.com',
    password_digest: await bcrypt.hash('!$h0pp3R1', 11)
  })
  await user2.save()

  const user3 = new User({
    first_name: 'Bianca',
    last_name: 'Gal',
    email: 'b.anca@super.gmail.com',
    password_digest: await bcrypt.hash('!$eller4Lif3', 11)
  })
  await user3.save()

  const user4 = new User({
    first_name: 'Elizabeth',
    last_name: 'Rodriguez',
    email: 'e.ro@super.gmail.com',
    password_digest: await bcrypt.hash('L0v32!p4int', 11)
  })
  await user4.save()

  // items data that we want inserted into database
  const items = [
    {
      name: "Linen blend skirt",
      imgURL: "https://i.imgur.com/7XWAhes.jpg",
      category: "Skirts",
      season: "Summer",
      color: "Ecru",
      notes: "Online https://www.zara.com/us/en/share/-p07385224.html?utm_campaign=productShare&utm_medium=mobile_sharing_iOS&utm_source=red_social_movil&v1=114766197",
    },
    {
      name: "Printed lining mini skirt",
      imgURL: "https://i.imgur.com/daiNMbM.jpg",
      category: "Skirts",
      season: "Summer",
      color: "Orange",
      notes: "Spring season as well",
    },
    {
      name: "Satin effect midi skirt",
      imgURL: "https://i.imgur.com/JzRXuTz.jpg",
      category: "Skirts",
      season: "Summer",
      color: "Black",
      notes: "Spring, Fall seasons as well",
    },
    {
      name: "Cozy sweater",
      imgURL: "https://i.imgur.com/j5conAp.png",
      category: "Tops",
      season: "Fall Winter",
      color: "Black",
      notes: "Store: Zara",
    },

    {
      name: "Chiffon dress",
      imgURL: "https://i.imgur.com/hrf84y3.jpg",
      category: "Dresses",
      season: "Summer",
      color: "Pink Print",
      notes: "Store: Express",
    },
    {
      name: "Long dress",
      imgURL: "https://i.imgur.com/sMaQY8e.jpg",
      category: "Dresses",
      season: "Fall Spring",
      color: "Basil",
      notes: "Store: Express",
    },
    {
      name: "Plaid pants",
      imgURL: "https://i.imgur.com/Nym7fQO.jpg",
      category: "Pants",
      season: "Spring Summer Fall",
      color: "Gray Print",
      notes: "Store: Express",
    },
    {
      name: "Faux leather pants",
      imgURL: "https://i.imgur.com/I8pHFny.jpg",
      category: "Pants",
      season: "Summer",
      color: "Basil",
      notes: "Store: Express",
    },
    {
      name: "Dress with silver buttons",
      imgURL: "https://i.imgur.com/2uyGOWZ.jpg",
      category: "Dresses",
      season: "Fall Winter",
      color: "Gray",
      notes: "Store: Express",
    },
    {
      name: "Ripped skinny jeans",
      imgURL: "https://i.imgur.com/BUUwlN8.jpg",
      category: "Pants",
      season: "Spring Summer Fall",
      color: "Pitch Black",
      notes: "Store: Express",
    },
    {
      name: "High waisted joggers",
      imgURL: "https://i.imgur.com/4AE4xPM.jpg",
      category: "Pants",
      season: "Spring Summer",
      color: "Basil",
      notes: "Store: Express",
    },
    {
      name: "Midi skirt",
      imgURL: "https://i.imgur.com/KRiuCpx.jpg",
      category: "Skirts",
      season: "Spring Summer",
      color: "Red",
      notes: "Srore: Zara",
    },
    {
      name: "Satin cami",
      imgURL: "https://i.imgur.com/mROnUsO.jpg",
      category: "Tops",
      season: "Summer Fall",
      color: "Truffle Pink",
      notes: "Store: Express",
    },
    {
      name: "Black and white dress",
      imgURL: "https://i.imgur.com/fR4JHrW.jpg",
      category: "Dresses",
      season: "Fall Winter",
      color: "Multicolor",
      notes: "Store: Express",
    },
    {
      name: "Basic shirt",
      imgURL: "https://i.imgur.com/x8c8YXe.jpg",
      category: "Tops",
      season: "Spring Summer Fall",
      color: "Beige",
      notes: "Store: Zara",
    },
    {
      name: "Basic long sleeve",
      imgURL: "https://i.imgur.com/198lYBu.jpg",
      category: "Tops",
      season: "Spring Summer",
      color: "White",
      notes: "Store: Zara",
    },
    {
      name: "Midi dress with tie",
      imgURL: "https://i.imgur.com/mLDQl7g.jpg",
      category: "Dresses",
      season: "Summer",
      color: "Beige",
      notes: "Store: Express",
    },
    {
      name: "Favorite crop top",
      imgURL: "https://i.imgur.com/pQMQ0fV.jpg",
      category: "Tops",
      season: "Summer",
      color: "White",
      notes: "Store: Zara",
    },
    {
      name: "Midi skirt with tie",
      imgURL: "https://i.imgur.com/prnyX34.jpg",
      category: "Skirts",
      season: "Spring Summer",
      color: "Green",
      notes: "Store: Zara",
    },
    {
      name: "A-line skirt",
      imgURL: "https://i.imgur.com/xAnXZ4d.jpg",
      category: "Skirts",
      season: "Fall Winter",
      color: "Black",
      notes: "Store: Zara",
    },
    {
      name: "Favorite dress",
      imgURL: "https://i.imgur.com/T6UBIs9.jpg",
      category: "Dresses",
      season: "Summer",
      color: "Pink",
      notes: "Store: Express",
    },
    {
      name: "Striped wrap skirt",
      imgURL: "https://i.imgur.com/QFoHPkH.jpg",
      category: "Skirts",
      season: "Summer Fall",
      color: "Brown Print",
      notes: "Store: Zara",
    },
    {
      name: "Buttoned long sleeve",
      imgURL: "https://i.imgur.com/qTfLmiv.jpg",
      category: "Tops",
      season: "Spring Fall Winter",
      color: "Purple",
      notes: "Store: Zara",
    },
  ];

  // insert items into database
  await Item.insertMany(items);
  console.log("Created users & items!");

  // close database connection. done.
  db.close();
};

insertData();
