const mongoose = require('mongoose');
const validator = require('validator');
const encrypt = require('mongoose-encryption');
const bcrypt = require('bcrypt');

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

userSchema.statics.addUser = async function (email, password) {
  const hash = await bcrypt.hash(password, 10);
  return new this({ email, password: hash }).save();
};

userSchema.statics.authenticate = async function (email, password) {
  const user = await this.findOne({ email });

  if (!user) {
    throw new Error('user email not registered');
  }

  if (!(await bcrypt.compare(password, user.password))) {
    throw new Error('incorrect password');
  }

  return true;
};

async function devInit() {
  const User = mongoose.model('user', userSchema);
  // User.deleteMany({}).exec();
  module.exports = User;
}

devInit();
