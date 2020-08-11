const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /((http:\/\/)|(https:\/\/))(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(([\d\w-]+\.)+[a-z]{2,3}))(:\d{2,5})?)\/?((\w+(\/|#?$))*)?/.test(v);
      },
      message: (props) => `${props.value} is not a valid link url!`,
    },
  },
});

module.exports = mongoose.model('user', userSchema);
