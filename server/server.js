const express = require('express');
const connectDB = require('./database/db');
const dotenv = require('dotenv');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes')

dotenv.config();
connectDB();

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: 'GET,POST,PUT,DELETE',
    credentials: true
  }));


app.use(express.json());
app.use("/api/books", bookRoutes);

const PORT = process.env.PORT || 5000;
console.log(`Using PORT: ${PORT}`);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });