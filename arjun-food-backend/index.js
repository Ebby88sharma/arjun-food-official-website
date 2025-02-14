const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());


const errorHandler = require("./middlewares/errorHandler");
app.use(errorHandler);

const swaggerDocs = require("./docs/swagger");
swaggerDocs(app);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
})
.then(() => console.log("✅ MongoDB Connected"))
.catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("Arjun Food Traders API is running...");
});
app.use("/api/v1/company", require("./routes/companyRoutes"));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
