const express = require('express');
const mongoose = require('mongoose');

const productRoutes = require('./routes/product.routes'); 
const authRoutes =require('./routes/auth.routes');
const orderRoutes = require('./routes/order.routes');
const paymentRoutes =require('./routes/payment.routes')
const inventoryRoutes = require('./routes/inventory.routes');

const app = express();

app.use(express.json());


app.use('/products', productRoutes);
app.use('/auth',authRoutes);
app.use('/orders',orderRoutes);
app.use('/payments', paymentRoutes);
app.use('/inventory', inventoryRoutes);
mongoose.connect('mongodb://localhost:27017/pos')
.then(() => {
  console.log('MongoDB connected');
})
.catch(err => {
  console.log(err);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
