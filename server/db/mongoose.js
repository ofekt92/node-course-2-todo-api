var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // built in JS promise.
mongoose.connect('mongodb://localhost:27017/TodoApp');


module.exports = {
  mongoose
}
