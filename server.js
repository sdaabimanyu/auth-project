const dotenv = require("dotenv");
const connectDB = require("./config/db");
const app = require("./index");

dotenv.config();

// connect DB
connectDB();

// safe port fallback
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});