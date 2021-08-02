import mongoose from "mongoose";

mongoose.Promise = global.Promise;

function connect(url) {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to the Database");
    })
    .catch((error) => {
      console.error(`Error trying to connect to the DB: ${error}\nURL: ${url}`);
    });
}

export default connect;
