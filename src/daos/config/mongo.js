const connect = require('mongoose').connect;

const url =
  'mongodb+srv://Veilen:2eagBIZ5UBsPgAL4@cluster0.ojhttk5.mongodb.net/test';

async function connectMongoDb() {
  try {
    const client = await connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Db connectect to', client.connection.name);
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectMongoDb;