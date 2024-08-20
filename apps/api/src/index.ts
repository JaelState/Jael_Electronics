import express from 'express';
import connectDB from './db/connection';
import { Product } from './models/product';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('E-Commerce API is running');
});

app.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Server Error' });
  }
});

const PORT = process.env.PORT || 3001;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
