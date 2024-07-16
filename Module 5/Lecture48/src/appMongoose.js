const { connect } = require("mongoose");

const MONGO_URL =
  "mongodb+srv://sharmasujal995:Sujal123@cluster0.ff7z0uu.mongodb.net";

const DB_NAME = `cs-mern`;

connect(`${MONGO_URL}/${DB_NAME}`);

async function connectDB() {
  try {
    await connect(`${MONGO_URL}/${DB_NAME}`);
    console.log("MongoDb Connected");
  } catch (err) {
    console.log(err.message);
  }
}

connectDB();
