const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
});

articleSchema.statics.getArticles = function () {
  return this.find({}).exec();
};

module.exports = mongoose.model('article', articleSchema);
