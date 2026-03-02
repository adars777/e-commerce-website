const mongoose = require("mongoose");
const DB_NAME = require("../constant");

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    console.log(
      `Connected tom MONGODB!! DB HOST: ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.error(`MONGO Connection FAILED!! ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB