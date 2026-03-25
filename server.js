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
  const payload = req.body;

  const totalBuyer = payload.buyer_count || 100;
  const batch = payload.batch || 1;

  console.log(`Batch ${batch} started for ${totalBuyer} buyers`);

  let result = [];

  for (let i = 1; i <= totalBuyer; i++) {
    const buyer = {
      buyer_id: `BUYER_${batch}_${i}`,
      status: 'processed'
    };

    result.push(buyer);

    console.log(`Processed ${buyer.buyer_id}`);
  }

  res.json({
    status: 'ok',
    batch: batch,
    total_processed: totalBuyer,
    result: result
  });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});