
const Users =require('../models/user.model');
exports.login =async (req, res) => {
  try{
  const {username, email, password,role } = req.body;
console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing data' });
  }

const user = new Users({
 username, email,password,role
});
const usersaved = await user.save();
  res.status(201).json({
      message: 'Product created successfully',
      user: usersaved
    });

  } catch (error) {
    res.status(500).json({
      message: 'Server error',
      error: error.message
    });
  };


}