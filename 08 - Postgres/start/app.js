const express = require('express');
const morgan = require('morgan');
const connect = require('./config/database');
const sync = require('./config/database');

const productRoutes = require('./routes/products');

const app = express();

// Setting up middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Setting up routes
app.use('/products', productRoutes);

// Creating a server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});

// Connect to the database
async function initializeDatabase() {
  await connect();
  await sync();
}
initializeDatabase();