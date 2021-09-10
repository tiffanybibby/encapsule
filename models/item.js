import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Item = new Schema(
  {
    imgURL: { type: String, required: true },
    category: { type: String, required: true },
    season: { type: String, required: true },
    color: { type: String, required: true },
    notes: { type: String, required: false }
  },
  { timestamps: true }
)

export default mongoose.model('item', Item)