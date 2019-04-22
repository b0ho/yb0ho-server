import mongoose from "mongoose";

// mongoose 스키마 모듈 생성

const Schema = mongoose.Schema;

export const getTest = _ => {
  return "sstt";
};

const imageSchema = new Schema({
  id: Number,
  title: String,
  location: String,
  tags: String,
  round: Number,
  round_win: Number,
  game: Number,
  game_win: Number
});

export default mongoose.model("Image", imageSchema);
