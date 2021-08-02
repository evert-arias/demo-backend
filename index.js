import { app } from "./utils/express.js";
import dotenv from 'dotenv';

// dotenv
dotenv.config();

// server port
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
