const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BopSchema = new Schema({
  boppin: {
    type: Boolean,
    ref: 'users',
  },
});

module.exports = mongoose.model('bop', PostSchema);
