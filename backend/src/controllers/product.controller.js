const Product = require('../models/product.model');


exports.createProduct = async (req, res) => {
  try {
   
    const { name, price, quantity, category, image, barcode } = req.body;

   
    if (!name || price == null || quantity == null || !category) {
      return res.status(400).json({
        message: 'Missing required fields'
      });
    }

   
    const product = new Product({
      name,
      price,
      quantity,
      category,
      image,
      barcode
    });

    
    const savedProduct = await product.save();

  
    res.status(201).json({
      message: 'Product created successfully',
      product: savedProduct
    });

  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  }
};
exports.getProduct=(req,res)=>{
  try{
   const products = product.find();
   res.json(products);

  }catch(error){
        res.status(500).json({ error: 'Server error' });
  }
}