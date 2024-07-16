const { connect } = require("mongoose");

// const MONGO_URL = "mongodb+srv://sharmasujal995:Sujal123@cluster0.ff7z0uu.mongodb.net;

const MONGO_URL =
  "mongodb+srv://sharmasujal995:Sujal123@cluster0.ff7z0uu.mongodb.net";

const DB_NAME = `CipherSchools-mern`;

connect(`${MONGO_URL}/${DB_NAME}`);

async function connectDB() {
  try {
    await connect(`${MONGO_URL}/${DB_NAME}`);
    console.log("MongoDb Connected");
    console.log("Hello World");
  } catch (err) {
    console.log(err.message);
  }
}

connectDB();
