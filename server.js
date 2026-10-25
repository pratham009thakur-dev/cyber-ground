const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();
const app = express();

// ✅ Must come BEFORE routes
app.use(express.json());

mongoose.connect('mongodb+srv://pratham09thakur:pratham09@cyberplayground.4owia.mongodb.net/cyberplaygroundDB?retryWrites=true&w=majority&appName=CyberPlayground')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
  res.send('API is working!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
