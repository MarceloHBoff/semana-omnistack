const { Schema } = require('mongoose');

const PointSchema = new Schema({
  type: {
    type: String,
    enum: ['Point'],
    require: true,
  },
  coordinates: {
    type: [Number],
  },
});

export default PointSchema;
