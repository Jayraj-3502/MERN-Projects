import { config } from "dotenv";
import app from "./config/server";

config();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is running on PORT: ", PORT);
});
