const { DB_URI } = require('./serverConfig');
const mongoose = require('mongoose');

const connectDatabase = async () => {
  mongoose.set("strictQuery", false);
  const { connection } = await mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected with ${connection.host}`);
};

module.exports = connectDatabase;