const mongoose = require('mongoose');
const validator = require('validator');
const encrypt = require('mongoose-encryption');

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

userSchema.plugin(encrypt, {
  secret: process.env.SECRET,
  encryptedFields: ['password'],
});

userSchema.statics.addUser = function (email, password) {
  return new this({ email, password }).save();
};

userSchema.statics.authenticate = function (email, password) {
  return this.findOne({ email }).then((user) => {
    if (user && user.password === password) {
      return 1;
    }

    throw new Error('invalid user email or password');
  });
};

async function devInit() {
  const User = mongoose.model('user', userSchema);
  // User.deleteMany({}).exec();
  module.exports = User;
}

devInit();
