const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: validator.isEmail,
      message: 'email invalid',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator(password) {
        return validator.isLength(password, { min: 6 });
      },
      message: 'password too short',
    },
  },
});

userSchema.statics.addUser = function (email, password) {
  return new this({ email, password }).save();
};

async function devInit() {
  const User = mongoose.model('user', userSchema);
  User.deleteMany({}).exec();
  module.exports = User;
}

devInit();
