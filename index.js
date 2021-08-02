import { app } from "./utils/express.js";
import dotenv from 'dotenv';
import db from './utils/db.js';

// dotenv
dotenv.config();

db(process.env.MONGO_URL);

// server port
const PORT = process.env.PORT || 3000;

// start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
