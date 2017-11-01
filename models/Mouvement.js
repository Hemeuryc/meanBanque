var mongoose = require('mongoose');

var MouvemenSchema = new mongoose.Schema({
  intitule: String,
  code: String,
  prix: Number,
  date: Date,
});

module.exports = mongoose.model('Mouvement', MouvemenSchema);
