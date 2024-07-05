import { app } from "./app.js";
// import Connection_db from "./Database/index.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

// Connection_db()

app.listen(process.env.PORT || 8000, () => {
  console.log(`the server is serve at Port ${process.env.PORT}`);
  console.log(`http://localhost:${process.env.PORT}`);
});
