// server.js
const express = require('express');
const mongoose = require('mongoose');
mongoose.set('debug', true);
const cors = require('cors');
require('dotenv').config();
const Recipe = require('./models/Recipe'); // Adjust the path as necessary


const app = express();

app.use(cors());
app.use(express.json());

const recipeRoutes = require('./routes/recipes');
app.use('/api/recipes', recipeRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
  

mongoose.connection.on('connected', () => {
  console.log('Mongoose default connection open to ' + mongoose.connection.db.databaseName);
});
console.log('Using collection:', Recipe.collection.collectionName);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));