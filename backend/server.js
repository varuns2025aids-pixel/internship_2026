const  express = require('express');
const app = express();
const port = 3000;
require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL) 
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});


app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});