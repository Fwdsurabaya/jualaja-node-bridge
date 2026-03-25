const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
  res.send('JualAja Node Bridge Active');
});

// Stress test endpoint
app.post('/stress-test', async (req, res) => {
  try {
    const buyerCount = req.body.buyer_count || 10;

    const transactions = [];

    for (let i = 0; i < buyerCount; i++) {
      transactions.push({
        idPembeli: 'B' + Math.random().toString(36).substring(2, 10),
        idToko: 'TOKO001',
        produk: 'ProdukChaos',
        qty: 1,
        harga: 10000
      });
    }

    const scriptUrl = 'https://script.google.com/macros/s/AKfycbypkJFWSFNGBLtWYoBCJk7qtqDGQlmgkV4iuULpmPdKPe0DeHzfirUqMzJMp3GpW0_bSg/exec';

    const response = await axios.post(scriptUrl, {
      transactions: transactions
    });

    res.json({
      status: 'success',
      sent: transactions.length,
      result: response.data
    });

  } catch (err) {
    console.error(err.message);

    res.status(500).json({
      status: 'error',
      message: err.message
    });
  }
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});