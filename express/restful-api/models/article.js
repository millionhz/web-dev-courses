const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: {
    type: String,
    maxLength: [100, 'Max length exceeded'],
    required: [
      function () {
        return this.title !== '';
      },
      'Title can not be empty',
    ],
    trim: true,
  },
  content: {
    type: String,
    required: [
      function () {
        return this.content !== '';
      },
      'Content can not be empty',
    ],
    trim: true,
  },
});

articleSchema.statics.getArticles = function () {
  return this.find({}).exec();
};

articleSchema.statics.addArticle = function (title, content) {
  return this({ title, content }).save();
};

articleSchema.statics.getArticleByTitle = function (title) {
  return this.findOne({ title }).exec();
};

articleSchema.statics.updateArticleByTitle = function (title, updates) {
  return this.updateOne({ title }, updates, { runValidators: true }).exec();
};

articleSchema.statics.deleteArticleByTitle = function (title) {
  return this.deleteOne({ title }).exec();
};

module.exports = mongoose.model('article', articleSchema);
