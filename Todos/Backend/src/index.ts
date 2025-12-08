import { config } from "dotenv";
import app from "./config/server";
import { connectDatabse } from "./config/db";

config();

const PORT = process.env.PORT || 8000;
const MONGO_URI: any = process.env.MONGO_URI;

connectDatabse(MONGO_URI);

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
