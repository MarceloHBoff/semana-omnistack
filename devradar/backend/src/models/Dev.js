import { Schema, model } from 'mongoose';
import Point from './utils/PointSchema';

const DevSchema = new Schema({
  name: String,
  github_username: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  location: {
    type: Point,
    index: '2dsphere',
  },
});

export default model('Dev', DevSchema);
