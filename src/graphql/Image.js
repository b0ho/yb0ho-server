import mongoose from "mongoose";
import { stringify } from "querystring";

const Schema = mongoose.Schema;

const imageSchema = new Schema({
  id: Number,
  title: String,
  location: String,
  tags: [String],
  round: Number,
  round_win: Number,
  game: Number,
  game_win: Number
});

export default mongoose.model("Image", imageSchema);
