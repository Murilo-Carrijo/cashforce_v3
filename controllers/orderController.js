const express = require('express');
const { Order, Cnpj, User, Buyer, Provider } = require('../models');
const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const orders = await Order.findAll({
      include: [
        { model: Cnpj, as: 'cnpj' },
        { model: User, as: 'user' },
        { model: Buyer, as: 'buyer' },
        { model: Provider, as: 'providers' }
      ] 
    }
    );
    return res.status(200).json(orders);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Something went wrong' });
  };
});

module.exports = router;
