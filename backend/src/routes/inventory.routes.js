const router = require('express').Router();
const {
  createInventory,
  getInventory,
  updateInventory
} = require('../controllers/inventory.controller');

router.post('/', createInventory);
router.get('/', getInventory);
router.patch('/:id', updateInventory);

module.exports = router;
