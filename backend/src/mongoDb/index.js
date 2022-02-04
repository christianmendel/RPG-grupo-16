import mongoose from "mongoose";

const user = process.env.USER;
const password = process.env.PASSWORD;
const db = process.env.DB;

const dbURI = `mongodb+srv://${user}:${password}@cluster0.jwdqx.mongodb.net/${db}?retryWrites=true&w=majority`;

export const conn = mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("---------------Sucessfuly connected---------------");
    console.log(result);
    console.log("---------------Info's end---------------");
  })
  .catch((err) => console.log(err));
