const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /((http:\/\/)|(https:\/\/))(www\.)?((\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}|(([\d\w-]+\.)+[a-z]{2,3}))(:\d{2,5})?)\/?((\w+(\/|#?$))*)?/.test(v);
      },
      message: (props) => `${props.value} is not a valid link url!`,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'user',
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('card', cardSchema);
