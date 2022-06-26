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

module.exports = mongoose.model('article', articleSchema);
