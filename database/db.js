const mongoose = require('mongoose');
const dbUrl = `mongodb+srv://admin:Admin2023@cluster0.4ytrtt6.mongodb.net/test`;

const connectDB = async () => {
    const conn = await mongoose.connect(dbUrl);
    console.log(`Connected to DB`.yellow.underline);
}

module.exports = connectDB;