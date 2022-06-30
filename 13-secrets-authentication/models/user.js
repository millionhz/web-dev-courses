const mongoose = require('mongoose');
const validate = require('validate.js');

const constraints = {
  email: {
    type: 'string',
    email: true,
  },
  password: {
    type: 'string',
    length: {
      minimum: 6,
    },
  },
};

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator(email) {
        return validate({ email }, constraints) === undefined;
      },
      message: 'email validation failed',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator(password) {
        return validate({ password }, constraints) === undefined;
      },
      message: 'password validation failed',
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
