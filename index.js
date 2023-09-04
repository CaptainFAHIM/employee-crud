// External imports
const express = require("express");
require("dotenv").config();

// Local imports
const connectDb = require("./config/db");
const employeeRoutes = require("./controllers/employee.controller");
const {errorHandler} = require("./middlewares/index");

const app = express();
const PORT = process.env.PORT || 4000;

// Body Parser
app.use(express.json());

// Routes
app.use("/api/employees", employeeRoutes);

// Error Handler
app.use(errorHandler);

// Database Connection
connectDb();

app.listen(PORT, () => {
    console.log(`Listening to the port ${PORT}`);
});