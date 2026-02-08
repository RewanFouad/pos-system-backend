const Inventory = require('../models/inventory.model');
const Product = require('../models/product.model');



exports.createInventory = async (req, res) => {
  try {

    const { productId, quantity } = req.body;

    if (!productId || !quantity) {
      return res.status(400).json({ message: 'productId and quantity are required' });
    }

    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const existing = await Inventory.findOne({ product: productId });

    if (existing) {
      return res.status(400).json({ message: 'Inventory already exists for this product' });
    }

    const inventory = await Inventory.create({
      product: productId,
      quantity
    });

    res.status(201).json(inventory);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




exports.getInventory = async (req, res) => {
  try {

    const inventory = await Inventory.find()
      .populate('product');

    res.json(inventory);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
exports.updateInventory = async (req, res) => {
  try {

    const { id } = req.params;
    const { quantity } = req.body;

    const inventory = await Inventory.findById(id);

    if (!inventory) {
      return res.status(404).json({ message: 'Inventory not found' });
    }

    inventory.quantity = quantity;

    await inventory.save();

    res.json(inventory);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
