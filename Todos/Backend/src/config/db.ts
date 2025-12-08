import mongoose from "mongoose";

export async function connectDatabse(url: string) {
  mongoose
    .connect(url)
    .then(() => {
      console.log(
        "Database connected successfully...",
        mongoose.connection.name
      );
    })
    .catch((error) => {
      console.log("Database connection error: ", error);
    });
}
