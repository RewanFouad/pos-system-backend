const Payment = require('../models/payment.model');
const Order = require('../models/order.model');

exports.createPayment = async (req, res) => {
  try {
    const { orderId, method } = req.body;

  
    if (!orderId || !method) {
      return res.status(400).json({ message: 'orderId and method are required' });
    }

   
    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }


    const payment = new Payment({
      order: order._id,
      method,
      amount: order.totalPrice,
      status: 'success'
    });

    await payment.save();

   
    order.status = 'paid';
    await order.save();

    res.status(201).json({
      message: 'Payment successful',
      payment
    });

  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
};
