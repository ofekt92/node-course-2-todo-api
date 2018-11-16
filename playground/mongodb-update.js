// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if (err) {
  return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  const db = client.db('TodoApp');

 // andrew's explanation
 
  // db.collection('Todos')
  // .findOneAndUpdate({
  //   _id: new ObjectID('5bd2657fc945b8d6048e8078')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // })
  // .then((res) => {
  //   console.log(res);
  // })

 // challenge
db.collection('Users').findOneAndUpdate({
  _id: new ObjectID('5bd25b86d691342f1c978444')
}, {
  $set: {
    name: 'Yovel Tsoref'
  },
  $inc: {
    age: 1
  }
}, {
  returnOriginal: false
}).then((res) => {
  console.log(res);
});

  // client.close();
});
