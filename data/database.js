import mongoose from "mongoose";

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "todoProjectDB",
    })
    .then((c) => {
      console.log(`Database Connected with ${c.connection.host}`);
    })
    .catch((error) => {
      console.log(error);
    });
};
