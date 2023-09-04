const mongoose = require("mongoose");
require("dotenv").config();

const DB_URL = process.env.DB_URL;

const connectDb = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Connected to the DB...");
    } catch (error) {
        console.log(error.message);
    }
    
}

module.exports = connectDb;