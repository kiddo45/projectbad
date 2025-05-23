// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const serviceRoutes = require('./routes/services');
const carRoutes = require('./routes/car');

const app = express();

app.use(cors());
app.use(express.json());
app.get('/',(req, res)=>{
 res.send('api is running');
});
// Routes
app.use('/api/services', serviceRoutes);
app.use('/api/cars', carRoutes);
app.use(express.json());

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);

});
