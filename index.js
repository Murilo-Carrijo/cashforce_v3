const express = require('express');

const orderController = require('./controllers/orderController');

const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use('/order', orderController);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));