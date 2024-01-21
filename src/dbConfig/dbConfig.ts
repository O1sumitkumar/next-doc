import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGODB_URL!);
    const connection = mongoose.connection;
    connection.on("connected", (stream) => {
      console.log("Connected successfully", stream);
    });

    connection.on("error", () => {
      console.log("Something went wrong...!!");
      process.exit();
    });
  } catch (error) {
    console.log("Got some unexpected error " + error);
  }
}
