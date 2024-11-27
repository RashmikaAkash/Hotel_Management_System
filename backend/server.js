const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// Connect to MongoDB
mongoose.connect(URL)
    .then(() => console.log("Mongodb Connection success!"))
    .catch((err) => console.error("Mongodb connection error:", err));

const employeeRouter = require("./routes/employees");
const salaryRouter = require("./routes/employees"); // Import the salary router

app.use("/employees", employeeRouter); // Change the base route to match your API calls
app.use("/salary", salaryRouter); // New route for salary

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});
